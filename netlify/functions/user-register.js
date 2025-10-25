// Netlify Function: user-register (LeanCloud-backed)
// Purpose: Register current Netlify Identity user into DB; only registered users can convert
// Methods: GET(status), POST(register)

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
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
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

function getUserFromContext(context) {
  const user = context && context.clientContext && context.clientContext.user;
  if (!user) return null;
  const id = user.sub || user.user_id || user.id;
  const email = user.email || undefined;
  const name = (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name)) || undefined;
  return { id, email, name };
}

function getUserId(context, event) {
  const fromCtx = getUserFromContext(context);
  if (fromCtx && fromCtx.id) return fromCtx.id;
  const sub = parseJwtSub(getAuthHeader(event));
  return sub || null;
}

function normalizeProfile(obj) {
  const attrs = obj.toJSON();
  return {
    ownerId: attrs.ownerId,
    email: attrs.email || undefined,
    name: attrs.name || undefined,
    createdAt: obj.createdAt ? obj.createdAt.toISOString() : undefined
  };
}

function isClassMissing(err) {
  return /Class or object doesn'?t exists/i.test(String(err || ''));
}

exports.handler = async (event, context) => {
  const headers = corsHeaders();
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    initLeanCloud();
    const hasMaster = !!process.env.LC_MASTER_KEY;
    const uid = getUserId(context, event);
    if (!uid) return { statusCode: 401, headers, body: JSON.stringify({ error: 'unauthorized' }) };

    const method = event.httpMethod;

    if (method === 'GET') {
      try {
        const query = new AV.Query('UserProfile');
        query.equalTo('ownerId', uid);
        const obj = await query.first();
        const registered = !!obj;
        return { statusCode: 200, headers, body: JSON.stringify({ success: true, registered, profile: obj ? normalizeProfile(obj) : null }) };
      } catch (e) {
        if (isClassMissing(e) && hasMaster) {
          return { statusCode: 200, headers, body: JSON.stringify({ success: true, registered: false, profile: null }) };
        }
        throw e;
      }
    }

    if (method === 'POST') {
      let obj;
      try {
        const query = new AV.Query('UserProfile');
        query.equalTo('ownerId', uid);
        obj = await query.first();
      } catch (e) {
        if (!(isClassMissing(e) && hasMaster)) throw e;
        obj = null;
      }
      if (!obj) {
        const UserProfile = AV.Object.extend('UserProfile');
        obj = new UserProfile();
        obj.set('ownerId', uid);
      }
      const uCtx = getUserFromContext(context) || {};
      if (uCtx.email) obj.set('email', uCtx.email);
      if (uCtx.name) obj.set('name', uCtx.name);
      await obj.save();
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, registered: true, profile: normalizeProfile(obj) }) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'method_not_allowed' }) };
  } catch (err) {
    const msg = String(err || '');
    if (isClassMissing(err)) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'leancloud_class_missing', hint: '请在 LeanCloud 控制台创建数据表 UserProfile 并允许客户端写入，或在环境变量中配置 LC_MASTER_KEY 以启用服务端写入。', raw: msg }) };
    }
    return { statusCode: 500, headers, body: JSON.stringify({ error: msg }) };
  }
};