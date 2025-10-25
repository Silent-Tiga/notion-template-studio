// Netlify Function: Convert Notion Database to Multi-page Site Manifest
// Requires NOTION_API_KEY env var if private; supports public with shared key when possible

const json = (status, body) => ({ statusCode: status, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
// Netlify Function: db-to-site
// Purpose: Example protected action that needs Identity auth

const AV = require('leancloud-storage');

function initLeanCloud() {
  const appId = process.env.LC_APP_ID;
  const appKey = process.env.LC_APP_KEY;
  const serverURL = process.env.LC_SERVER_URL;
  const masterKey = process.env.LC_MASTER_KEY;
  if (!appId || !appKey || !serverURL) throw new Error('LeanCloud env not set');
  if (masterKey) {
    AV.init({ appId, appKey, serverURL, masterKey });
    AV.Cloud.useMasterKey();
  } else {
    AV.init({ appId, appKey, serverURL });
  }
}

function isClassMissing(err) {
  return /Class or object doesn'?t exists/i.test(String(err || ''));
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  };
}

function getAuthHeader(event) {
  const h = (event && event.headers) || {};
  return h.authorization || h.Authorization || '';
}

function parseJwtSub(authHeader) {
  try {
    const m = String(authHeader || '').match(/^Bearer\s+([^\s]+)$/i);
    if (!m) return null;
    const token = m[1];
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));
    return payload && (payload.sub || payload.user_id || payload.id) || null;
  } catch {
    return null;
  }
}

function getUserId(context, event) {
  const user = context && context.clientContext && context.clientContext.user;
  const ctxId = user && (user.sub || user.user_id || user.id) || null;
  if (ctxId) return ctxId;
  const sub = parseJwtSub(getAuthHeader(event));
  return sub || null;
}

exports.handler = async (event, context) => {
  const headers = corsHeaders();
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers, body: JSON.stringify({ error: 'method_not_allowed' }) };
    }
    initLeanCloud();

    const uid = getUserId(context, event);
    if (!uid) return { statusCode: 401, headers, body: JSON.stringify({ error: 'unauthorized' }) };

    // Placeholder protected action
    return { statusCode: 200, headers, body: JSON.stringify({ success: true, ownerId: uid }) };
  } catch (err) {
    const msg = String(err || '');
    return { statusCode: 500, headers, body: JSON.stringify({ error: msg }) };
  }
};

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

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method Not Allowed' });
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { error: 'Invalid JSON body' });
  }

  // Require registered user
  const uid = getUserId(context);
  if (!uid || !initLeanCloud()) {
    return json(401, { error: 'guest_not_allowed: 请先登录并注册' });
  }
-  const userQuery = new AV.Query('User');
-  userQuery.equalTo('ownerId', uid);
-  const userObj = await userQuery.first();
+  let userObj;
+  try {
+    const userQuery = new AV.Query('UserProfile');
+    userQuery.equalTo('ownerId', uid);
+    userObj = await userQuery.first();
+  } catch (e) {
+    if (isClassMissing(e)) {
+      return json(403, { error: 'not_registered: 请先完成注册' });
+    }
+    throw e;
+  }
  if (!userObj) {
    return json(403, { error: 'not_registered: 请先完成注册' });
  }

  const { url, databaseId, apiKey, slugProperty } = body;
  let notionApiKey = apiKey || process.env.NOTION_API_KEY;

  // Fallback to per-user saved key (LeanCloud) if not provided
  if (!notionApiKey) {
    const query = new AV.Query('UserSettings');
    query.equalTo('ownerId', uid);
    const obj = await query.first();
    const savedKey = obj ? obj.get('notionApiKey') : null;
    if (savedKey) notionApiKey = savedKey;
  }

  try {
    const id = databaseId || (url ? (url.match(/[a-f0-9]{32}/i)?.[0] || '') : '');
    if (!id) return json(400, { error: 'Missing databaseId or url' });

    // Fetch Notion database items (simplified demo; replace with real Notion API v1 calls)
    const pages = [
      { id: 'page1', title: '首页', slug: slugifySlug('首页') },
      { id: 'page2', title: '关于', slug: slugifySlug('关于') },
      { id: 'page3', title: '联系我们', slug: slugifySlug('联系我们') }
    ];

    // Build navigation from pages (simulate)
    const navigation = pages.map(p => ({ title: p.title, slug: p.slug }));

    // Site title is either database title or a fixed string in this demo
    const siteTitle = 'Notion 站点';

    return json(200, {
      siteTitle,
      pages,
      navigation,
      rootDatabaseId: id,
      slugProperty: slugProperty || null
    });
  } catch (err) {
    const msg = (err && err.message) || String(err);
    if (/401|403/.test(msg)) return json(403, { error: '403: Integration not invited or key missing.' });
    if (/404/.test(msg)) return json(404, { error: '404: Database not found.' });
    return json(500, { error: msg });
  }
};