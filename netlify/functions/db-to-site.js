// Netlify Function: Convert Notion Database to Multi-page Site Manifest
// Requires NOTION_API_KEY env var if private; supports public with shared key when possible

const json = (status, body) => ({ statusCode: status, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });

function slugifySlug(input) {
  const base = (input || '').toString().toLowerCase().trim();
  const normalized = base.replace(/[^a-z0-9\u4e00-\u9fa5\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return normalized || 'untitled';
}

function extractTextFromProperty(prop) {
  if (!prop) return null;
  const arr = Array.isArray(prop.title) ? prop.title : Array.isArray(prop.rich_text) ? prop.rich_text : null;
  if (!arr || arr.length === 0) return null;
  return arr.map(t => t.plain_text || '').join(' ').trim();
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method Not Allowed' });
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { error: 'Invalid JSON body' });
  }

  const { url, databaseId, apiKey, slugProperty } = body;
  const notionApiKey = apiKey || process.env.NOTION_API_KEY;

  try {
    const id = databaseId || (url ? (url.match(/[a-f0-9]{32}/i)?.[0] || '') : '');
    if (!id) return json(400, { error: 'Missing databaseId or url' });

    // Fetch Notion database items (simplified demo; replace with real Notion API v1 calls)
    const items = [
      {
        id: 'page-1',
        properties: {
          Name: { title: [{ plain_text: 'Welcome' }] },
          Slug: { rich_text: [{ plain_text: 'welcome' }] },
          Updated: { rich_text: [{ plain_text: new Date().toISOString() }] },
        },
        cover: { external: { url: 'https://picsum.photos/seed/1/1200/630' } },
        icon: { emoji: '👋' },
      },
      {
        id: 'page-2',
        properties: {
          Name: { title: [{ plain_text: 'About' }] },
          Slug: { rich_text: [{ plain_text: 'about' }] },
        },
        cover: { external: { url: 'https://picsum.photos/seed/2/1200/630' } },
        icon: { emoji: 'ℹ️' },
      },
      {
        id: 'page-3',
        properties: {
          Name: { title: [{ plain_text: 'Contact' }] },
          URLTitle: { rich_text: [{ plain_text: 'contact' }] },
        },
        cover: { external: { url: 'https://picsum.photos/seed/3/1200/630' } },
        icon: { emoji: '✉️' },
      },
    ];

    const pages = items.map((item) => {
      const title = extractTextFromProperty(item.properties?.Name) || 'Untitled';
      const slugSource = slugProperty && item.properties && item.properties[slugProperty]
        ? extractTextFromProperty(item.properties[slugProperty]) || title
        : (extractTextFromProperty(item.properties?.Slug) || title);
      const slug = slugifySlug(slugSource);
      const html = `<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>${title}</title><style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:860px;margin:40px auto;padding:0 20px;line-height:1.7;color:#1f2937}header{display:flex;align-items:center;gap:10px;margin-bottom:24px}header .icon{font-size:28px}nav a{margin-right:12px;color:#2563eb;text-decoration:none}article h1{font-size:28px;margin:20px 0}</style></head><body><header><div class="icon">${item.icon?.emoji || '📄'}</div><h1>${title}</h1></header><article><p>此处为从 Notion 渲染的页面内容（演示）。</p></article><footer style="margin-top:40px;color:#6b7280">由 AI Notion Converter 生成</footer></body></html>`;
      return {
        id: item.id,
        title,
        slug,
        html,
        sourceId: item.id,
        coverImage: item.cover?.external?.url,
        icon: item.icon?.emoji,
        updatedAt: extractTextFromProperty(item.properties?.Updated) || new Date().toISOString(),
      };
    });

    const navigation = pages.map(p => ({ title: p.title, slug: p.slug }));

    const siteTitle = `站点 - ${pages[0]?.title || 'Untitled'}`;
    const manifest = {
      siteTitle,
      rootPageId: pages[0]?.id,
      pages,
      navigation,
      generatedAt: new Date().toISOString(),
    };

    return json(200, manifest);
  } catch (err) {
    const status = err?.statusCode || err?.status || 500;
    if (status === 401) return json(401, { error: '401: Unauthorized or invalid API key.' });
    if (status === 403) return json(403, { error: '403: Integration not invited. Please add the Integration via Share → Invite.' });
    if (status === 404) return json(404, { error: '404: Database not found or invalid URL.' });
    return json(500, { error: err?.message || 'Unknown error' });
  }
};