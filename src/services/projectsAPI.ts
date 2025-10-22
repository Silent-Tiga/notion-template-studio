import type { Project, ProjectPlan } from '../types';

function getAuthHeaders(): HeadersInit {
  const anyWin = window as any;
  const user = anyWin.netlifyIdentity?.currentUser?.() || null;
  const token = user?.token?.access_token;
  const headers: any = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

const endpoint = '/.netlify/functions/projects';

export async function listProjects(): Promise<Project[]> {
  const res = await fetch(endpoint, { method: 'GET', headers: getAuthHeaders() });
  if (!res.ok) throw new Error('加载项目失败');
  const data = await res.json();
  return data.data as Project[];
}

export async function getProject(id: string): Promise<Project> {
  const res = await fetch(`${endpoint}?id=${encodeURIComponent(id)}`, { method: 'GET', headers: getAuthHeaders() });
  if (!res.ok) throw new Error('获取项目失败');
  const data = await res.json();
  return data.data as Project;
}

export async function createProject(params: { siteTitle: string; rootDatabaseId?: string; plan?: ProjectPlan; mappings?: Record<string, any> }): Promise<Project> {
  const res = await fetch(endpoint, { method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(params) });
  if (!res.ok) throw new Error('创建项目失败');
  const data = await res.json();
  return data.data as Project;
}

export async function updateProject(id: string, changes: Partial<Project>): Promise<Project> {
  const res = await fetch(endpoint, { method: 'PATCH', headers: getAuthHeaders(), body: JSON.stringify({ id, ...changes }) });
  if (!res.ok) throw new Error('更新项目失败');
  const data = await res.json();
  return data.data as Project;
}

export async function deleteProject(id: string): Promise<void> {
  const res = await fetch(`${endpoint}?id=${encodeURIComponent(id)}`, { method: 'DELETE', headers: getAuthHeaders() });
  if (!res.ok) throw new Error('删除项目失败');
}