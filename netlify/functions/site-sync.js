// Netlify Function: site-sync
// - Scheduled via netlify.toml (cron)
// - Also supports manual HTTP trigger for on-demand refresh

exports.handler = async (event) => {
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
            'Access-Control-Allow-Headers': 'Content-Type'
          },
          body: ''
        };
      }
      if (event.httpMethod === 'POST') {
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