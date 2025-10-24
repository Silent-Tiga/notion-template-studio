// Netlify Function: user-settings (LeanCloud-backed)
// Purpose: Persist per-user settings securely (e.g., Notion API Key)
// Methods: GET(status), PATCH/PUT(save)

const AV = require('leancloud-storage');

function initLeanCloud() {
  const appId = process.env.LC_APP_ID;
  const appKey = process.env.LC_APP_KEY;
  const serverURL = process.env.LC_SERVER_URL;
  if (!appId || !appKey || !serverURL) throw new Error('LeanCloud env not set');
  AV.init({ appId, appKey, serverURL });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  };
}

function getUserId(context) {
  const user = context && context.clientContext && context.clientContext.user;
  return user && (user.sub || user.user_id || user.id) || null;
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
    const uid = getUserId(context);
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
    return { statusCode: 500, headers, body: JSON.stringify({ error: String(err) }) };
  }
};