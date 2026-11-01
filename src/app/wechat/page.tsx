import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { findNewsIdByArchiveTitle, sogouSearchUrl } from '@/data/archive-links';
import {
  accountMonths, accountUpdates, accountYears, schoolAccount,
  attachedAccount, attachedMonths, attachedUpdates, attachedYears
} from '@/data/sources';

export const metadata = {
  title: '公众号档案 - 北京市第一六六中学（非正式网站）',
  description: '从学校认证公众号历史目录整理的推送标题，覆盖2016年至今，可按年份、月份查阅与搜索。'
};

export default async function WechatArchivePage({ searchParams }: {
  searchParams: Promise<{ month?: string | string[]; year?: string | string[]; q?: string | string[] }>;
}) {
  const params = await searchParams;
  const month = typeof params.month === 'string' && accountMonths.includes(params.month) ? params.month : '';
  const year = typeof params.year === 'string' && accountYears.includes(params.year) ? params.year : '';
  const query = (typeof params.q === 'string' ? params.q : '').trim().slice(0, 100);
  const entries = accountUpdates.filter((item) =>
    (!month || item.date.startsWith(month)) &&
    (!year || item.date.startsWith(year)) &&
    (!query || item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  );
  const months = accountMonths.filter((value) => entries.some((item) => item.date.startsWith(value)));
  const yearsInView = accountYears.filter((value) => accountMonths.some((m) => m.startsWith(value)));

  return (
    <PageLayout title="公众号档案" english="WECHAT ARTICLE ARCHIVE">
      <div className="archive-intro">
        <h3>{schoolAccount.name}</h3>
        <p className="noindent">
          认证主体：{schoolAccount.certifiedEntity}。2026年条目的标题和日期通过微信桌面版的公众号历史目录核对；
          {schoolAccount.historyFrom.replace('-', '年')}起的条目为2026年11月据公开索引补充的标题与推送日期，未逐篇核读正文。
        </p>
        <div className="archive-stats">
          <span><strong>{accountUpdates.length}</strong>条推送标题</span>
          <span><strong>{accountYears.length}</strong>个年份</span>
          <span><strong>{accountMonths.length}</strong>个月份</span>
          <span>核对日期：{schoolAccount.checkedAt}</span>
        </div>
        <p className="account-note"><Link href="/photos">校园影像：查看已核对出处的校园与活动配图 &gt;</Link></p>
      </div>
      <form className="news-search" action="/wechat" method="get">
        <label className="visually-hidden" htmlFor="wechat-query">搜索公众号标题</label>
        <input id="wechat-query" name="q" defaultValue={query} type="search" maxLength={100} placeholder="搜索科技、阅读、运动会等标题" />
        <label className="visually-hidden" htmlFor="wechat-year">推送年份</label>
        <select id="wechat-year" name="year" defaultValue={year}>
          <option value="">全部年份</option>
          {accountYears.map((value) => <option key={value} value={value}>{value}年</option>)}
        </select>
        <label className="visually-hidden" htmlFor="wechat-month">推送月份</label>
        <select id="wechat-month" name="month" defaultValue={month}>
          <option value="">全部月份</option>
          {accountMonths.map((value) => <option key={value} value={value}>{value.replace('-', '年')}月</option>)}
        </select>
        <button type="submit">查找</button>
      </form>
      <p className="noindent result-count">找到{entries.length}条{year ? ` · ${year}年` : ''}{month ? ` · ${month}` : ''}{query ? ` · “${query}”` : ''}。{(month || year || query) && <Link href="/wechat">查看全部</Link>}</p>
      <nav className="archive-year-groups" aria-label="按年份与月份浏览">
        {yearsInView.map((value) => (
          <div className="archive-year-group" key={value}>
            <Link className="archive-year" href={`/wechat?year=${value}`} aria-current={year === value ? 'page' : undefined}>{value}年</Link>
            <span className="archive-year-months">
              {accountMonths.filter((m) => m.startsWith(value)).map((m) => (
                <Link key={m} href={`/wechat?month=${m}`} aria-current={month === m ? 'page' : undefined}>{Number(m.slice(5))}月</Link>
              ))}
            </span>
          </div>
        ))}
      </nav>
      {months.map((value) => {
        const items = entries.filter((item) => item.date.startsWith(value));
        return (
          <section className="archive-month" key={value}>
            <h3 className="block-t">{value.replace('-', '年')}月<span>{items.length}条</span></h3>
            <ul className="archive-entries">
              {items.map((item) => {
                const newsId = findNewsIdByArchiveTitle(item.title);
                return (
                  <li key={item.date + item.title}>
                    <time dateTime={item.date}>{item.date.slice(5)}</time>
                    {newsId ? (
                      <Link href={`/news/${newsId}`}>{item.title}<em>本站摘要</em></Link>
                    ) : (
                      <a href={sogouSearchUrl(item.title)} target="_blank" rel="noreferrer">{item.title}<em>搜原文 ↗</em></a>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
      {entries.length === 0 && <div className="empty-results">没有匹配的标题，可调整年份、月份或关键词。</div>}

      <h3 className="block-t" id="attached">{attachedAccount.name}<span>{attachedUpdates.length}条</span></h3>
      <p className="noindent small-note">
        认证主体：{attachedAccount.certifiedEntity}。附属校尉胡同小学与本校为不同发布主体，推送单独列出，不与本校条目混排。
        下列标题与推送日期据公开索引整理（核对日期：{attachedAccount.checkedAt}），多数未核读正文。
      </p>
      <nav className="archive-year-groups" aria-label="附属小学按年份浏览">
        {attachedYears.map((value) => (
          <div className="archive-year-group" key={`att-${value}`}>
            <span className="archive-year">{value}年</span>
            <span className="archive-year-months">
              <span className="small-note">{attachedMonths.filter((m) => m.startsWith(value)).length}个月·{attachedUpdates.filter((i) => i.date.startsWith(value)).length}条</span>
            </span>
          </div>
        ))}
      </nav>
      {attachedYears.map((value) => {
        const items = attachedUpdates.filter((item) => item.date.startsWith(value));
        return (
          <section className="archive-month" key={`att-sec-${value}`}>
            <h3 className="block-t">{value}年<span>{items.length}条</span></h3>
            <ul className="archive-entries">
              {items.map((item) => {
                const newsId = findNewsIdByArchiveTitle(item.title);
                return (
                  <li key={item.date + item.title}>
                    <time dateTime={item.date}>{item.date.slice(5)}</time>
                    {newsId ? (
                      <Link href={`/news/${newsId}`}>{item.title}<em>本站摘要</em></Link>
                    ) : (
                      <a href={sogouSearchUrl(item.title)} target="_blank" rel="noreferrer">{item.title}<em>搜原文 ↗</em></a>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <div className="source-note">
        本页是历史推送标题目录，未逐篇核读完整正文（已在<Link href="/news">新闻中心</Link>整理的报道除外）。查阅原文可在微信中搜索“{schoolAccount.name}”或“{attachedAccount.name}”，核对认证主体后按标题查找。
        日期指推送日期，不等同于活动日期；本目录不代表该时段的全部推送。招生查询、招聘、个人介绍及与校园活动无关的转载不予收录。
      </div>
    </PageLayout>
  );
}
