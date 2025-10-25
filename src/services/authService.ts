export interface AuthUser {
  id: string;
  email?: string;
  name?: string;
}

let currentUser: AuthUser | null = null;
let listeners: Array<(u: AuthUser | null) => void> = [];

function notify() {
  for (const cb of listeners) cb(currentUser);
}

export function onAuthChange(cb: (u: AuthUser | null) => void) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter(fn => fn !== cb);
  };
}

export function getCurrentUser(): AuthUser | null {
  if (currentUser) return currentUser;
  // Fallback local demo user
  const raw = localStorage.getItem('demoUser');
  if (raw) {
    currentUser = JSON.parse(raw);
  }
  return currentUser;
}

export function initIdentity() {
  const anyWin = window as any;
  const identity = anyWin.netlifyIdentity;
  if (identity && identity.on && !identity._ainotion_inited) {
    identity._ainotion_inited = true;
    identity.on('init', (user: any) => {
      currentUser = user ? { id: user.id, email: user.email, name: user.user_metadata?.full_name } : null;
      notify();
    });
    identity.on('login', (user: any) => {
      currentUser = { id: user.id, email: user.email, name: user.user_metadata?.full_name };
      notify();
    });
    identity.on('logout', () => {
      currentUser = null;
      notify();
    });
    try {
      const APIUrl = (import.meta as any).env?.VITE_NETLIFY_IDENTITY_API_URL || '';
      if (APIUrl) {
        identity.init({ APIUrl });
      } else {
        identity.init();
      }
    } catch {
      identity.init();
    }
  }
}

export async function login() {
  const anyWin = window as any;
  if (anyWin.netlifyIdentity) {
    anyWin.netlifyIdentity.open('login');
    return;
  }
  // Demo login fallback
  currentUser = { id: 'demo', email: 'demo@example.com', name: 'Demo User' };
  localStorage.setItem('demoUser', JSON.stringify(currentUser));
  notify();
}

export async function register() {
  const anyWin = window as any;
  if (anyWin.netlifyIdentity) {
    anyWin.netlifyIdentity.open('signup');
    return;
  }
  // Demo register fallback just logs in demo
  return login();
}

export async function logout() {
  const anyWin = window as any;
  try {
    if (anyWin.netlifyIdentity) {
      // 等待身份组件完成注销，避免事件不触发导致UI不更新
      await anyWin.netlifyIdentity.logout();
      anyWin.netlifyIdentity.close?.();
    }
  } finally {
    // 强制本地状态清理，确保立即反映为未登录
    currentUser = null;
    try {
      localStorage.removeItem('demoUser');
      // 兼容 Netlify Identity (gotrue) 的本地存储键，避免残留会话
      localStorage.removeItem('gotrue.user');
      localStorage.removeItem('gotrue.refresh_token');
    } catch {}
    notify();
  }
}