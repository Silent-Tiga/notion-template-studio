// Netlify Function: user-settings (LeanCloud-backed)
// Purpose: Persist per-user settings securely (e.g., Notion API Key)
// Methods: GET(status), PATCH/PUT(save)

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

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,PUT,OPTIONS',
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
  // 兼容：当 Netlify 未注入 user 时，直接解析 JWT 获取 sub
  const sub = parseJwtSub(getAuthHeader(event));
  return sub || null;
}

function normalizeStatus(obj) {
  if (!obj) return { hasKey: false };
  const attrs = obj.toJSON();
  return {
    hasKey: !!attrs.notionApiKey,
    updatedAt: obj.updatedAt ? obj.updatedAt.toISOString() : undefined
  };
}

exports.handler = async (event, context) => {
  const headers = corsHeaders();
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    initLeanCloud();
    const uid = getUserId(context, event);
    if (!uid) return { statusCode: 401, headers, body: JSON.stringify({ error: 'unauthorized' }) };

    const method = event.httpMethod;
    const Settings = AV.Object.extend('UserSettings');

    if (method === 'GET') {
      const query = new AV.Query('UserSettings');
      query.equalTo('ownerId', uid);
      const obj = await query.first();
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, data: normalizeStatus(obj) }) };
    }

    if (method === 'PATCH' || method === 'PUT') {
      const body = event.body ? JSON.parse(event.body) : {};
      const notionApiKey = body.notionApiKey;
      if (!notionApiKey || typeof notionApiKey !== 'string') {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'missing_notionApiKey' }) };
      }
      const query = new AV.Query('UserSettings');
      query.equalTo('ownerId', uid);
      let obj = await query.first();
      if (!obj) {
        obj = new Settings();
        obj.set('ownerId', uid);
      }
      // Store the raw key; access to this function is guarded by Netlify Identity
      obj.set('notionApiKey', notionApiKey);
      await obj.save();
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, data: normalizeStatus(obj) }) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'method_not_allowed' }) };
  } catch (err) {
    const msg = String(err || '');
    if (/Class or object doesn'?t exists/i.test(msg)) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'leancloud_class_missing', hint: '请在 LeanCloud 控制台创建数据表 UserSettings 并允许客户端写入，或在环境变量中配置 LC_MASTER_KEY 以启用服务端写入。', raw: msg }) };
    }
    return { statusCode: 500, headers, body: JSON.stringify({ error: msg }) };
  }
};