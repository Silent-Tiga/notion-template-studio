import React from 'react';

interface SeoCheckProps {
  html?: string;
}

const SeoCheck: React.FC<SeoCheckProps> = ({ html = '' }) => {
  const text = html || '';
  const hasTitle = /<title>[^<]+<\/title>/i.test(text);
  const hasMetaDesc = /<meta[^>]+name=["']description["'][^>]*>/i.test(text);
  const viewport = /<meta[^>]+name=["']viewport["'][^>]*>/i.test(text);
  const h1Matches = text.match(/<h1[^>]*>/gi) || [];
  const imgMatches = text.match(/<img[^>]*>/gi) || [];
  const imgWithAlt = (text.match(/<img[^>]*alt=["'][^"']+["'][^>]*>/gi) || []).length;
  const imgAltCoverage = imgMatches.length > 0 ? Math.round((imgWithAlt / imgMatches.length) * 100) : 100;

  let score = 100;
  if (!hasTitle) score -= 20;
  if (!hasMetaDesc) score -= 20;
  if (h1Matches.length !== 1) score -= 20;
  if (!viewport) score -= 20;
  if (imgAltCoverage < 80) score -= 20;
  if (score < 0) score = 0;

  const items = [
    { ok: hasTitle, label: '<title> 存在', fix: '在 <head> 中添加 <title>...' },
    { ok: hasMetaDesc, label: '<meta description> 存在', fix: '添加页面摘要，建议 50-160 字。' },
    { ok: h1Matches.length === 1, label: 'H1 唯一', fix: '保持唯一 H1，其他用 H2/H3。' },
    { ok: viewport, label: '移动端适配 Meta', fix: '添加 <meta name="viewport" content="width=device-width, initial-scale=1">' },
    { ok: imgAltCoverage >= 80, label: `图片 alt 覆盖率 ${imgAltCoverage}%`, fix: '为重要图片补充 alt 文本。' }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3 text-neutral-900">SEO 快速检查</h3>
      <div className="mb-3 text-sm text-neutral-700">SEO 健康度：<span className="font-semibold">{score}/100</span></div>
      <ul className="space-y-2">
        {items.map((it, idx) => (
          <li key={idx} className={`p-2 rounded-github border ${it.ok ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-800'}`}>
            <div className="text-sm font-medium">{it.label}</div>
            {!it.ok && <div className="text-xs mt-1 opacity-90">建议：{it.fix}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeoCheck;