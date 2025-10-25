// Netlify Function: site-sync
// - Scheduled via netlify.toml (cron)
// - Also supports manual HTTP trigger for on-demand refresh

const AV = require('leancloud-storage');

function initLeanCloud() {
  const appId = process.env.LC_APP_ID;
  const appKey = process.env.LC_APP_KEY;
  const serverURL = process.env.LC_SERVER_URL;
  const masterKey = process.env.LC_MASTER_KEY;
  if (!appId || !appKey || !serverURL) return false;
  if (masterKey) {
    AV.init({ appId, appKey, serverURL, masterKey });
    AV.Cloud.useMasterKey();
  } else {
    AV.init({ appId, appKey, serverURL });
  }
  return true;
}

function isClassMissing(err) {
  return /Class or object doesn'?t exists/i.test(String(err || ''));
}

function getUserId(context) {
  const user = context && context.clientContext && context.clientContext.user;
  return user && (user.sub || user.user_id || user.id) || null;
}

exports.handler = async (event, context) => {
  const now = new Date().toISOString();
  const isHttp = !!event.httpMethod;

  // Read payload for manual trigger
  let databaseId = process.env.SYNC_DATABASE_ID || '';
  let databaseUrl = process.env.SYNC_DATABASE_URL || '';
  let slugProperty = process.env.SYNC_SLUG_PROPERTY || '';

  try {
    if (isHttp) {
      if (event.httpMethod === 'OPTIONS') {
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
          },
          body: ''
        };
      }
      if (event.httpMethod === 'POST') {
        // Require registered user for manual trigger
        const uid = getUserId(context);
        if (!uid || !initLeanCloud()) {
          return { statusCode: 401, headers: { 'Access-Control-Allow-Origin': '*'}, body: JSON.stringify({ success: false, error: 'guest_not_allowed: 请先登录并注册' }) };
        }
-        const userQuery = new AV.Query('User');
-        userQuery.equalTo('ownerId', uid);
-        const userObj = await userQuery.first();
+        let userObj;
+        try {
+          const userQuery = new AV.Query('UserProfile');
+          userQuery.equalTo('ownerId', uid);
+          userObj = await userQuery.first();
+        } catch (e) {
+          if (isClassMissing(e)) {
+            return { statusCode: 403, headers: { 'Access-Control-Allow-Origin': '*'}, body: JSON.stringify({ success: false, error: 'not_registered: 请先完成注册' }) };
+          }
+          throw e;
+        }
         if (!userObj) {
           return { statusCode: 403, headers: { 'Access-Control-Allow-Origin': '*'}, body: JSON.stringify({ success: false, error: 'not_registered: 请先完成注册' }) };
         }

        const body = event.body ? JSON.parse(event.body) : {};
        databaseId = body.databaseId || databaseId;
        databaseUrl = body.url || databaseUrl;
        slugProperty = body.slugProperty || slugProperty;
      }
    }

    // Simulated polling check — replace with real Notion API logic
    // Strategy: compare remote "last_edited_time" to cached value (KV/DB)
    // Here we simply return a mocked update count and timestamps
    const updatesFound = Math.random() < 0.3 ? Math.floor(Math.random() * 5) + 1 : 0;

    const response = {
      success: true,
      checkedAt: now,
      updates: updatesFound,
      databaseId,
      databaseUrl,
      slugProperty,
      message: updatesFound > 0 ? `检测到 ${updatesFound} 处更新` : '暂无更新'
    };

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    return { statusCode: 200, headers, body: JSON.stringify(response) };
  } catch (err) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    return { statusCode: 500, headers, body: JSON.stringify({ success: false, error: String(err), checkedAt: now }) };
  }
};