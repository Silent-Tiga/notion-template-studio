import { Project, ProjectPlan } from '../types';

const STORAGE_KEY = 'projects:v1';

function readAll(): Project[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeAll(items: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function listProjects(ownerId: string): Project[] {
  return readAll().filter(p => p.ownerId === ownerId);
}

export function getProject(id: string): Project | null {
  return readAll().find(p => p.id === id) || null;
}

export function createProject(params: {
  ownerId: string;
  siteTitle: string;
  rootDatabaseId?: string;
  plan?: ProjectPlan;
  mappings?: Record<string, any>;
}): Project {
  const items = readAll();
  const now = new Date().toISOString();
  const p: Project = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    ownerId: params.ownerId,
    siteTitle: params.siteTitle,
    rootDatabaseId: params.rootDatabaseId,
    mappings: params.mappings || {},
    hostingEnabled: false,
    exportEnabled: true,
    createdAt: now,
    plan: params.plan || 'free'
  };
  items.unshift(p);
  writeAll(items);
  return p;
}

export function updateProject(id: string, changes: Partial<Project>): Project | null {
  const items = readAll();
  const idx = items.findIndex(p => p.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...changes };
  writeAll(items);
  return items[idx];
}

export function deleteProject(id: string) {
  const items = readAll().filter(p => p.id !== id);
  writeAll(items);
}