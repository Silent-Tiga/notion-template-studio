// Netlify Function: projects (LeanCloud-backed)
// Methods: GET(list/get), POST(create), PATCH(update), DELETE(remove)

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
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  };
}

function getUserId(context) {
  const user = context && context.clientContext && context.clientContext.user;
  // netlify identity provides sub as user id
  return user && (user.sub || user.user_id || user.id) || null;
}

function normalizeProject(obj) {
  const attrs = obj.toJSON();
  return {
    id: obj.id,
    ownerId: attrs.ownerId,
    siteTitle: attrs.siteTitle,
    rootDatabaseId: attrs.rootDatabaseId,
    mappings: attrs.mappings || {},
    hostingEnabled: !!attrs.hostingEnabled,
    exportEnabled: attrs.exportEnabled !== false,
    createdAt: obj.createdAt ? obj.createdAt.toISOString() : new Date().toISOString(),
    plan: attrs.plan || 'free'
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
    if (!uid) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: 'unauthorized' }) };
    }

    const method = event.httpMethod;

    if (method === 'GET') {
      const id = event.queryStringParameters && event.queryStringParameters.id;
      if (id) {
        const obj = await AV.Object.createWithoutData('Project', id).fetch();
        if (!obj || obj.get('ownerId') !== uid) {
          return { statusCode: 404, headers, body: JSON.stringify({ error: 'not_found' }) };
        }
        return { statusCode: 200, headers, body: JSON.stringify({ success: true, data: normalizeProject(obj) }) };
      }
      const query = new AV.Query('Project');
      query.equalTo('ownerId', uid);
      query.descending('createdAt');
      const list = await query.find();
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, data: list.map(normalizeProject) }) };
    }

    if (method === 'POST') {
      const body = event.body ? JSON.parse(event.body) : {};
      const Project = AV.Object.extend('Project');
      const obj = new Project();
      obj.set('ownerId', uid);
      obj.set('siteTitle', body.siteTitle || '未命名站点');
      if (body.rootDatabaseId) obj.set('rootDatabaseId', body.rootDatabaseId);
      obj.set('mappings', body.mappings || {});
      obj.set('hostingEnabled', !!body.hostingEnabled);
      obj.set('exportEnabled', body.exportEnabled !== false);
      obj.set('plan', body.plan || 'free');
      await obj.save();
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, data: normalizeProject(obj) }) };
    }

    if (method === 'PATCH' || method === 'PUT') {
      const body = event.body ? JSON.parse(event.body) : {};
      const id = body.id;
      if (!id) return { statusCode: 400, headers, body: JSON.stringify({ error: 'missing_id' }) };
      const obj = await AV.Object.createWithoutData('Project', id).fetch();
      if (!obj || obj.get('ownerId') !== uid) return { statusCode: 404, headers, body: JSON.stringify({ error: 'not_found' }) };
      const fields = ['siteTitle', 'rootDatabaseId', 'mappings', 'hostingEnabled', 'exportEnabled', 'plan'];
      for (const f of fields) {
        if (body[f] !== undefined) obj.set(f, body[f]);
      }
      await obj.save();
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, data: normalizeProject(obj) }) };
    }

    if (method === 'DELETE') {
      const id = event.queryStringParameters && event.queryStringParameters.id;
      if (!id) return { statusCode: 400, headers, body: JSON.stringify({ error: 'missing_id' }) };
      const obj = await AV.Object.createWithoutData('Project', id).fetch();
      if (!obj || obj.get('ownerId') !== uid) return { statusCode: 404, headers, body: JSON.stringify({ error: 'not_found' }) };
      await obj.destroy();
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'method_not_allowed' }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: String(err) }) };
  }
};