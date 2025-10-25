async function getAuthHeaders(): Promise<HeadersInit> {
  const anyWin = window as any;
  const user = anyWin.netlifyIdentity?.currentUser?.() || null;
  const headers: any = { 'Content-Type': 'application/json' };
  try {
    if (user?.jwt) {
      const token = await user.jwt(true);
      if (token) headers['Authorization'] = `Bearer ${token}`;
      return headers;
    }
  } catch {}
  const token = user?.token?.access_token;
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

const endpoint = '/.netlify/functions/user-settings';

export type SettingsStatus = { hasKey: boolean; updatedAt?: string };

export async function getUserSettingsStatus(): Promise<SettingsStatus> {
  const res = await fetch(endpoint, { method: 'GET', headers: await getAuthHeaders() });
  if (!res.ok) throw new Error('加载用户设置失败');
  const data = await res.json();
  return data.data as SettingsStatus;
}

export async function saveUserNotionKey(notionApiKey: string): Promise<SettingsStatus> {
  const res = await fetch(endpoint, { method: 'PATCH', headers: await getAuthHeaders(), body: JSON.stringify({ notionApiKey }) });
  if (!res.ok) throw new Error('保存 Notion 密钥失败');
  const data = await res.json();
  return data.data as SettingsStatus;
}