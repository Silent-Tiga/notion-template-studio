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

const endpoint = '/.netlify/functions/user-register';

export type RegistrationStatus = { registered: boolean; profile?: { ownerId: string; email?: string; name?: string; createdAt?: string } | null };

export async function getRegistrationStatus(): Promise<RegistrationStatus> {
  const res = await fetch(endpoint, { method: 'GET', headers: await getAuthHeaders() });
  if (!res.ok) throw new Error('获取注册状态失败');
  const data = await res.json();
  return { registered: !!data.registered, profile: data.profile || null };
}

export async function registerUser(): Promise<RegistrationStatus> {
  const res = await fetch(endpoint, { method: 'POST', headers: await getAuthHeaders() });
  if (!res.ok) throw new Error('注册失败');
  const data = await res.json();
  return { registered: !!data.registered, profile: data.profile || null };
}