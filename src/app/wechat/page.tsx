import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { accountMonths, accountUpdates, schoolAccount } from '@/data/sources';

export const metadata = {
  title: '公众号档案 - 北京市第一六六中学（非正式网站）',
  description: '从学校认证公众号历史目录整理的推送标题，按月份查阅与搜索。'
};

export default async function WechatArchivePage({ searchParams }: {
  searchParams: Promise<{ month?: string | string[]; q?: string | string[] }>;
}) {
  const params = await searchParams;
  const month = typeof params.month === 'string' && accountMonths.includes(params.month) ? params.month : '';
  const query = (typeof params.q === 'string' ? params.q : '').trim().slice(0, 100);
  const entries = accountUpdates.filter((item) =>
    (!month || item.date.startsWith(month)) &&
    (!query || item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  );
  const months = accountMonths.filter((value) => entries.some((item) => item.date.startsWith(value)));

  return (
    <PageLayout title="公众号档案" english="WECHAT ARTICLE ARCHIVE">
      <div className="archive-intro">
        <h3>{schoolAccount.name}</h3>
        <p className="noindent">认证主体：{schoolAccount.certifiedEntity}。标题和日期通过微信桌面版的公众号历史目录核对。</p>
        <div className="archive-stats">
          <span><strong>{accountUpdates.length}</strong>条推送标题</span>
          <span><strong>{accountMonths.length}</strong>个月份</span>
          <span>核对日期：{schoolAccount.checkedAt}</span>
        </div>
      </div>
      <form className="news-search" action="/wechat" method="get">
        <label className="visually-hidden" htmlFor="wechat-query">搜索公众号标题</label>
        <input id="wechat-query" name="q" defaultValue={query} type="search" maxLength={100} placeholder="搜索科技、阅读、运动会等标题" />
        <label className="visually-hidden" htmlFor="wechat-month">推送月份</label>
        <select id="wechat-month" name="month" defaultValue={month}>
          <option value="">全部月份</option>
          {accountMonths.map((value) => <option key={value} value={value}>{value.replace('-', '年')}月</option>)}
        </select>
        <button type="submit">查找</button>
      </form>
      <p className="noindent result-count">找到{entries.length}条{month ? ` · ${month}` : ''}{query ? ` · “${query}”` : ''}。{(month || query) && <Link href="/wechat">查看全部</Link>}</p>
      <div className="archive-month-links" aria-label="按月份浏览">
        {accountMonths.map((value) => <Link key={value} href={`/wechat?month=${value}`} aria-current={month === value ? 'page' : undefined}>{value.replace('-', '年')}月</Link>)}
      </div>
      {months.map((value) => {
        const items = entries.filter((item) => item.date.startsWith(value));
        return (
          <section className="archive-month" key={value}>
            <h3 className="block-t">{value.replace('-', '年')}月<span>{items.length}条</span></h3>
            <ul className="archive-entries">
              {items.map((item) => <li key={item.date + item.title}><time dateTime={item.date}>{item.date.slice(5)}</time><span>{item.title}</span></li>)}
            </ul>
          </section>
        );
      })}
      {entries.length === 0 && <div className="empty-results">没有匹配的标题，可调整月份或关键词。</div>}
      <div className="source-note">
        本页是历史推送标题目录，尚未核读这些文章的完整正文。查阅原文可在微信中搜索“{schoolAccount.name}”，核对认证主体后按标题查找。
        日期指推送日期，不等同于活动日期；本目录不代表该时段的全部推送。招生查询、招聘、个人介绍及与校园活动无关的转载不予收录。
      </div>
    </PageLayout>
  );
}
