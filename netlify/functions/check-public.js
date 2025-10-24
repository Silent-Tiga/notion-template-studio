// Netlify Function: check-public
// Checks if the Notion page is accessible with a Notion Integration key

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_API_VERSION = '2022-06-28';
const AV = require('leancloud-storage');

function initLeanCloud() {
  const appId = process.env.LC_APP_ID;
  const appKey = process.env.LC_APP_KEY;
  const serverURL = process.env.LC_SERVER_URL;
  if (!appId || !appKey || !serverURL) return false;
  AV.init({ appId, appKey, serverURL });
  return true;
}

function getUserId(context) {
  const user = context && context.clientContext && context.clientContext.user;
  return user && (user.sub || user.user_id || user.id) || null;
}

const json = (status, data) => ({
  statusCode: status,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});

const extractPageId = (notionLink = '') => {
  try {
    const regex = /([a-zA-Z0-9]{32}|[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})/;
    const match = notionLink.match(regex);
    return match ? match[1] : null;
  } catch {
    return null;
  }
};

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method Not Allowed' });
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const url = body.url || '';
    const pageId = body.pageId || extractPageId(url);

    if (!pageId) {
      return json(400, { success: false, isPublic: false, tip: 'Invalid Notion link. Please provide a valid page URL.' });
    }

    // Prefer apiKey from body, fallback to env, then per-user saved key
    let apiKey = body.apiKey || process.env.NOTION_API_KEY;
    if (!apiKey) {
      const uid = getUserId(context);
      if (uid && initLeanCloud()) {
        const query = new AV.Query('UserSettings');
        query.equalTo('ownerId', uid);
        const obj = await query.first();
        const savedKey = obj ? obj.get('notionApiKey') : null;
        if (savedKey) apiKey = savedKey;
      }
    }

    if (!apiKey) {
      return json(500, { success: false, error: 'NOTION_API_KEY not found. Provide your key or configure shared key.' });
    }

    const resp = await fetch(`${NOTION_API_BASE}/pages/${pageId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': NOTION_API_VERSION
      }
    });

    if (resp.status === 200) {
      const page = await resp.json();
      const titleProp = Object.values(page.properties || {}).find((p) => p?.type === 'title');
      const title = Array.isArray(titleProp?.title)
        ? titleProp.title.map((r) => r.plain_text || r?.text?.content || '').join('')
        : '';
      return json(200, {
        success: true,
        isPublic: true,
        pageId,
        tip: 'Page is accessible with the provided Integration key.',
        title: title || 'Untitled'
      });
    }

    if (resp.status === 403) {
      return json(200, {
        success: true,
        isPublic: false,
        pageId,
        tip: '403: Integration not invited. Please go to Notion → Share → Invite and add the Integration.'
      });
    }
    if (resp.status === 404) {
      return json(200, {
        success: true,
        isPublic: false,
        pageId,
        tip: '404: Page not found. Please verify the URL.'
      });
    }

    const text = await resp.text();
    return json(200, {
      success: true,
      isPublic: false,
      pageId,
      tip: `Unexpected status ${resp.status}. ${text?.slice(0, 200) || ''}`
    });
  } catch (err) {
    return json(500, { success: false, error: err?.message || 'Unknown error' });
  }
};