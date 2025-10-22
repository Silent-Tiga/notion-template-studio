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
    identity.init();
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
  if (anyWin.netlifyIdentity) {
    anyWin.netlifyIdentity.logout();
    return;
  }
  // Demo logout
  currentUser = null;
  localStorage.removeItem('demoUser');
  notify();
}