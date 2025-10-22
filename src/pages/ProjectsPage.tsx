import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, login, onAuthChange, type AuthUser } from '../services/authService';
import { listProjects, createProject } from '../services/projectsAPI';
import type { Project, ProjectPlan } from '../types';

export default function ProjectsPage() {
  const [user, setUser] = useState<AuthUser | null>(getCurrentUser());
  const [projects, setProjects] = useState<Project[]>([]);
  const [siteTitle, setSiteTitle] = useState('我的站点');
  const [rootDatabaseId, setRootDatabaseId] = useState('');
  const [plan, setPlan] = useState<ProjectPlan>('free');
  const navigate = useNavigate();

  useEffect(() => {
    const off = onAuthChange(async u => {
      setUser(u);
      if (u) {
        try {
          const list = await listProjects();
          setProjects(list);
        } catch (e) {
          console.error(e);
          setProjects([]);
        }
      } else {
        setProjects([]);
      }
    });
    // initial load
    (async () => {
      if (user) {
        try {
          const list = await listProjects();
          setProjects(list);
        } catch (e) {
          console.error(e);
        }
      }
    })();
    return () => off();
  }, []);

  const handleCreate = async () => {
    if (!user) return;
    try {
      const p = await createProject({ siteTitle, rootDatabaseId, plan });
      const list = await listProjects();
      setProjects(list);
      navigate(`/projects/${p.id}`);
    } catch (e) {
      console.error(e);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">项目管理</h2>
          <p className="text-neutral-700 mb-4">请先登录以创建和管理站点项目。</p>
          <button className="btn-primary" onClick={() => login()}>登录 / 注册</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">我的项目</h2>
          {projects.length === 0 ? (
            <div className="text-neutral-600">暂无项目，右侧创建一个新站点吧。</div>
          ) : (
            <ul className="divide-y divide-neutral-200">
              {projects.map(p => (
                <li key={p.id} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="text-neutral-900 font-medium">{p.siteTitle}</div>
                    <div className="text-sm text-neutral-600">计划：{p.plan} · 创建于 {new Date(p.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link to={`/projects/${p.id}`} className="text-primary hover:text-primary-dark">详情</Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">创建新站点</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-neutral-700">站点名称</label>
              <input className="input mt-1 w-full" value={siteTitle} onChange={e => setSiteTitle(e.target.value)} placeholder="例如：我的博客" />
            </div>
            <div>
              <label className="text-sm text-neutral-700">根数据库链接或ID（可选）</label>
              <input className="input mt-1 w-full" value={rootDatabaseId} onChange={e => setRootDatabaseId(e.target.value)} placeholder="https://www.notion.so/... 或 databaseId" />
            </div>
            <div>
              <label className="text-sm text-neutral-700">套餐计划</label>
              <select className="input mt-1 w-full" value={plan} onChange={e => setPlan(e.target.value as ProjectPlan)}>
                <option value="free">免费</option>
                <option value="pro">专业</option>
                <option value="business">商业</option>
              </select>
            </div>
            <button className="btn-primary w-full" onClick={handleCreate}>创建项目</button>
          </div>
        </div>
      </div>
    </div>
  );
}