import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { contentCheckedAt, newsCategories, sortedNews } from '@/data/news';

export const metadata = {
  title: '新闻中心 - 北京市第一六六中学（非正式网站）',
  description: '科学教育、校园文化、思政实践、集团动态及政府公开文件的有来源摘要。'
};

export default async function NewsPage({ searchParams }: {
  searchParams: Promise<{ q?: string | string[]; category?: string | string[]; year?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = (typeof params.q === 'string' ? params.q : '').trim().slice(0, 100);
  const category = typeof params.category === 'string' ? params.category : '';
  const activeCategory = newsCategories.find((item) => item === category) ?? '';
  const years = [...new Set(sortedNews.map((item) => item.date.slice(0, 4)))];
  const activeYear = typeof params.year === 'string' && years.includes(params.year) ? params.year : '';
  const results = sortedNews.filter((item) =>
    (!activeCategory || item.category === activeCategory) &&
    (!activeYear || item.date.startsWith(activeYear)) &&
    (!query || `${item.title} ${item.summary} ${item.source} ${item.paragraphs.join(' ')}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  );
  return (
    <PageLayout title="新闻中心" english="NEWS CENTER">
      <p className="noindent small-note">按原文发布日期排序 · 共{sortedNews.length}条公开报道与文件 · 核对至{contentCheckedAt}</p>
      <form className="news-search" action="/news" method="get">
        <label className="visually-hidden" htmlFor="news-query">关键词</label>
        <input id="news-query" name="q" defaultValue={query} placeholder="搜索标题、内容或来源" maxLength={100} type="search" />
        <label className="visually-hidden" htmlFor="news-category">报道类别</label>
        <select id="news-category" name="category" defaultValue={activeCategory}>
          <option value="">全部类别</option>
          {newsCategories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <label className="visually-hidden" htmlFor="news-year">报道年份</label>
        <select id="news-year" name="year" defaultValue={activeYear}>
          <option value="">全部年份</option>
          {years.map((year) => <option key={year} value={year}>{year}年</option>)}
        </select>
        <button type="submit">查找</button>
      </form>
      <p className="noindent result-count">找到{results.length}条{query ? `，关键词：“${query}”` : ''}{activeCategory ? ` · ${activeCategory}` : ''}{activeYear ? ` · ${activeYear}年` : ''}。{(query || activeCategory || activeYear) && <Link href="/news">查看全部</Link>}</p>
      <ul className="report-list">
        {results.map((item) => (
          <li key={item.id}>
            <div className="report-meta"><span className="source-tag">{item.category}</span><time dateTime={item.date}>{item.date}</time><span>{item.source}</span></div>
            <h3><Link href={`/news/${item.id}`}>{item.title}</Link></h3>
            <p>{item.summary}</p>
            <Link className="read-link" href={`/news/${item.id}`}>查看摘要与原文来源 &gt;</Link>
          </li>
        ))}
      </ul>
      {results.length === 0 && <div className="empty-results">暂未收录匹配报道，可调整关键词或选择其他类别。</div>}
      <div className="source-note">学校公众号近期推送标题另见<Link href="/sources#wechat">公众号动态索引</Link>，仅核对到标题的推送不混入正文报道。</div>
    </PageLayout>
  );
}
