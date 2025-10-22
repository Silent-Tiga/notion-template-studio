import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProject, updateProject } from '../services/projectsAPI';
import type { Project, ProjectPlan } from '../types';
import { siteSync } from '../services/backendAPI';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [syncMessage, setSyncMessage] = useState('');
  const [lastSyncAt, setLastSyncAt] = useState('');

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const p = await getProject(id);
        setProject(p);
      } catch (e) {
        console.error(e);
        setProject(null);
      }
    })();
  }, [id]);

  if (!project) {
    return <div className="container mx-auto px-4 py-6"><div className="card p-6">未找到项目</div></div>;
  }

  const handleChange = async (changes: Partial<Project>) => {
    try {
      const updated = await updateProject(project.id, changes);
      if (updated) setProject(updated);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSync = async () => {
    try {
      const result = await siteSync({ url: project.rootDatabaseId });
      setLastSyncAt(result.checkedAt || new Date().toISOString());
      setSyncMessage(result.message || `已同步（更新数：${result.updates ?? 0}）`);
    } catch (e: any) {
      setSyncMessage(e.message || '同步失败');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">项目详情</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-neutral-700">站点名称</label>
              <input className="input mt-1 w-full" value={project.siteTitle} onChange={e => handleChange({ siteTitle: e.target.value })} />
            </div>
            <div>
              <label className="text-sm text-neutral-700">根数据库链接或ID</label>
              <input className="input mt-1 w-full" value={project.rootDatabaseId || ''} onChange={e => handleChange({ rootDatabaseId: e.target.value })} />
            </div>
            <div>
              <label className="text-sm text-neutral-700">套餐计划</label>
              <select className="input mt-1 w-full" value={project.plan} onChange={e => handleChange({ plan: e.target.value as ProjectPlan })}>
                <option value="free">免费</option>
                <option value="pro">专业</option>
                <option value="business">商业</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-neutral-700">托管开启</label>
              <input type="checkbox" checked={!!project.hostingEnabled} onChange={e => handleChange({ hostingEnabled: e.target.checked })} />
              <label className="text-sm text-neutral-700 ml-4">导出开启</label>
              <input type="checkbox" checked={!!project.exportEnabled} onChange={e => handleChange({ exportEnabled: e.target.checked })} />
            </div>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">同步状态</h3>
          <div className="space-y-2 text-sm text-neutral-700">
            <div>最近同步：{lastSyncAt ? new Date(lastSyncAt).toLocaleString() : '尚未同步'}</div>
            {syncMessage && <div>{syncMessage}</div>}
          </div>
          <button className="btn-primary mt-3" onClick={handleSync}>手动同步</button>
        </div>
      </div>
    </div>
  );
}