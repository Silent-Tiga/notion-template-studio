// Netlify Function: notion-to-html
// Converts a Notion page to simplified content JSON using Notion API

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

const fetchJson = async (url, apiKey) => {
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Notion-Version': NOTION_API_VERSION
    }
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw Object.assign(new Error(`Notion request failed ${resp.status}: ${text.slice(0, 200)}`), { status: resp.status });
  }
  return resp.json();
};

const getText = (rich = []) => {
  try {
    return rich.map((r) => (typeof r.plain_text === 'string' ? r.plain_text : r?.text?.content || '')).join('');
  } catch {
    return '';
  }
};

const fetchAllBlocks = async (pageId, apiKey) => {
  let all = [];
  let cursor;
  while (true) {
    const url = `${NOTION_API_BASE}/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`;
    const data = await fetchJson(url, apiKey);
    all.push(...(data.results || []));
    if (data.has_more && data.next_cursor) {
      cursor = data.next_cursor;
    } else {
      break;
    }
  }
  return all;
};

const normalizeBlocks = (blocks = []) => {
  return blocks.map((b) => {
    const t = b?.type;
    switch (t) {
      case 'paragraph':
        return { id: b.id, type: 'paragraph', content: getText(b.paragraph?.rich_text || []) };
      case 'heading_1':
      case 'heading_2':
      case 'heading_3':
        return { id: b.id, type: 'heading', content: getText(b[t]?.rich_text || []) };
      case 'bulleted_list_item':
        return { id: b.id, type: 'list', content: `<li>${getText(b.bulleted_list_item?.rich_text || [])}</li>` };
      case 'numbered_list_item':
        return { id: b.id, type: 'list', content: `<li>${getText(b.numbered_list_item?.rich_text || [])}</li>` };
      case 'quote':
        return { id: b.id, type: 'quote', content: getText(b.quote?.rich_text || []) };
      case 'callout':
        return { id: b.id, type: 'callout', content: getText(b.callout?.rich_text || []) };
      case 'toggle':
        return { id: b.id, type: 'toggle', content: getText(b.toggle?.rich_text || []) };
      case 'image':
        return { id: b.id, type: 'image', content: b.image?.file?.url || b.image?.external?.url || '' };
      default:
        return { id: b.id, type: 'paragraph', content: getText(b[t]?.rich_text || []) };
    }
  });
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method Not Allowed' });
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const url = body.url || '';
    const providedPageId = body.pageId || extractPageId(url);
    const apiKey = body.apiKey || process.env.NOTION_API_KEY;

    if (!providedPageId) {
      return json(400, { error: 'Invalid Notion link. Please provide a valid page URL.' });
    }
    if (!apiKey) {
      return json(403, { error: 'NOTION_API_KEY is missing. Provide your own key or configure the shared key.' });
    }

    // Check access & fetch page
    const page = await fetchJson(`${NOTION_API_BASE}/pages/${providedPageId}`, apiKey);
    const blocks = await fetchAllBlocks(providedPageId, apiKey);

    const titleProp = Object.values(page.properties || {}).find((p) => p?.type === 'title');
    const title = getText(titleProp?.title ?? []);
    const normalizedBlocks = normalizeBlocks(blocks || []);
    const finalTitle = title || (normalizedBlocks.find((b) => b.type === 'heading')?.content ?? 'Untitled');

    const coverImage = page.cover?.file?.url || page.cover?.external?.url || undefined;
    const icon = page.icon?.emoji || page.icon?.file?.url || page.icon?.external?.url || undefined;

    return json(200, {
      pageData: { title: finalTitle },
      content: normalizedBlocks,
      coverImage,
      icon
    });
  } catch (err) {
    const status = err?.status || 500;
    if (status === 403) {
      return json(403, { error: '403: Integration not invited. Please add the Integration via Share → Invite.' });
    }
    if (status === 404) {
      return json(404, { error: '404: Page not found or invalid URL.' });
    }
    return json(500, { error: err?.message || 'Unknown error' });
  }
};