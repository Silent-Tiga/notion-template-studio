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

function getUser(context) {
  const user = context && context.clientContext && context.clientContext.user;
  if (!user) return null;
  const id = user.sub || user.user_id || user.id;
  const email = user.email || user.email_verified || undefined;
  const name = (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name)) || undefined;
  return { id, email, name };
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

exports.handler = async (event, context) => {
  const headers = corsHeaders();
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    initLeanCloud();
    const u = getUser(context);
    if (!u || !u.id) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: 'unauthorized' }) };
    }

    const method = event.httpMethod;
    const User = AV.Object.extend('User');

    if (method === 'GET') {
      const query = new AV.Query('User');
      query.equalTo('ownerId', u.id);
      const obj = await query.first();
      const registered = !!obj;
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, registered, profile: obj ? normalizeProfile(obj) : null }) };
    }

    if (method === 'POST') {
      // upsert
      const query = new AV.Query('User');
      query.equalTo('ownerId', u.id);
      let obj = await query.first();
      if (!obj) {
        obj = new User();
        obj.set('ownerId', u.id);
      }
      if (u.email) obj.set('email', u.email);
      if (u.name) obj.set('name', u.name);
      await obj.save();
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, registered: true, profile: normalizeProfile(obj) }) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'method_not_allowed' }) };
  } catch (err) {
    const msg = String(err || '');
    if (/Class or object doesn'?t exists/i.test(msg)) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'leancloud_class_missing', hint: '请在 LeanCloud 控制台创建数据表 User 并允许客户端写入，或在环境变量中配置 LC_MASTER_KEY 以启用服务端写入。', raw: msg }) };
    }
    return { statusCode: 500, headers, body: JSON.stringify({ error: msg }) };
  }
};