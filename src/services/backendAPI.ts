// Backend API service for Netlify Functions endpoints

export const BACKEND_BASE = '/.netlify/functions';

async function getAuthHeaders(): Promise<HeadersInit> {
  const anyWin = window as any;
  const user = anyWin.netlifyIdentity?.currentUser?.() || null;
  const headers: any = { 'Content-Type': 'application/json' };
  try {
    // 优先使用最新的 JWT，避免过期令牌
    if (user?.jwt) {
      const token = await user.jwt(true);
      if (token) headers['Authorization'] = `Bearer ${token}`;
      return headers;
    }
  } catch {
    // 忽略刷新失败，走旧令牌兜底
  }
  const token = user?.token?.access_token;
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

export async function checkPublic(url: string): Promise<{ ok: boolean; isPublic?: boolean; tip?: string }> {
  const res = await fetch(`${BACKEND_BASE}/check-public`, {
    method: 'POST',
    headers: await getAuthHeaders(),
    body: JSON.stringify({ url })
  });
  if (!res.ok) {
    return { ok: false, tip: await res.text() };
  }
  const data = await res.json();
  return { ok: true, isPublic: data.isPublic, tip: data.tip };
}

export async function convertViaWorker(payload: { url: string; useAI?: boolean; apiKey?: string }): Promise<any> {
  const res = await fetch(`${BACKEND_BASE}/notion-to-html`, {
    method: 'POST',
    headers: await getAuthHeaders(),
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    throw new Error(`Function convert failed: ${res.status}`);
  }
  return res.json();
}

export interface DbConvertPayload {
  url?: string;
  databaseId?: string;
  apiKey?: string;
  slugProperty?: string;
}

export interface SiteManifest {
  siteTitle: string;
  rootPageId?: string;
  pages: Array<{ id: string; title: string; slug: string; html: string; sourceId: string; coverImage?: string; icon?: string; updatedAt?: string }>;
  navigation: Array<{ title: string; slug: string }>;
  generatedAt: string;
}

export async function convertDatabaseToSite(payload: DbConvertPayload): Promise<SiteManifest> {
  const res = await fetch(`${BACKEND_BASE}/db-to-site`, {
    method: 'POST',
    headers: await getAuthHeaders(),
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `db-to-site failed: ${res.status}`);
  }
  return res.json();
}

export interface SiteSyncPayload {
  url?: string;
  databaseId?: string;
  slugProperty?: string;
}

export interface SiteSyncResult {
  success: boolean;
  checkedAt: string;
  updates: number;
  databaseId?: string;
  databaseUrl?: string;
  slugProperty?: string;
  message?: string;
  error?: string;
}

export async function siteSync(payload: SiteSyncPayload): Promise<SiteSyncResult> {
  const endpoint = '/.netlify/functions/site-sync';
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: await getAuthHeaders(),
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('站点同步失败');
  return res.json();
}