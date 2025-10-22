// Netlify Function: check-public
// Checks if the Notion page is accessible with the shared Integration key

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_API_VERSION = '2022-06-28';

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

exports.handler = async (event) => {
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

    const apiKey = process.env.NOTION_API_KEY;
    if (!apiKey) {
      return json(500, { success: false, error: 'Shared NOTION_API_KEY is not configured on Netlify.' });
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
        tip: 'Page is accessible via the shared Integration key.',
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