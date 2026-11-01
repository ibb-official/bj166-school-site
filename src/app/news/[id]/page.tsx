import Link from '@/components/Link';
import { notFound } from 'next/navigation';
import ReportPhoto from '@/components/ReportPhoto';
import { contentCheckedAt, getNews, newsList, sortedNews } from '@/data/news';

interface Props { params: Promise<{ id: string }> }
function findArticle(id: string) {
  return /^\d+$/.test(id) ? getNews(Number(id)) : undefined;
}
export function generateStaticParams() {
  return newsList.map((item) => ({ id: String(item.id) }));
}
export async function generateMetadata({ params }: Props) {
  const id = (await params).id;
  const article = findArticle(id);
  if (!article) return { title: '报道未找到' };
  const image = article.image?.src ?? '/images/school-emblem.jpg';
  return {
    title: `${article.title} - 北京市第一六六中学（非正式网站）`,
    description: article.summary,
    alternates: { canonical: `/news/${article.id}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.summary,
      url: `/news/${article.id}`,
      publishedTime: `${article.date}T00:00:00+08:00`,
      locale: 'zh_CN',
      images: [{ url: image, alt: article.image?.alt ?? '北京市第一六六中学' }]
    },
    twitter: {
      card: 'summary',
      title: article.title,
      description: article.summary
    }
  };
}
export default async function NewsDetailPage({ params }: Props) {
  const article = findArticle((await params).id);
  if (!article) notFound();
  const position = sortedNews.findIndex((item) => item.id === article.id);
  const newer = sortedNews[position - 1];
  const older = sortedNews[position + 1];
  const related = sortedNews
    .filter((item) => item.category === article.category && item.id !== article.id)
    .slice(0, 4);
  return (
    <>
      <div className="page-head"><div className="wrap"><h2>新闻中心</h2><p>NEWS CENTER</p></div></div>
      <main className="main">
        <div className="wrap">
          <div className="crumb">当前位置：<Link href="/">首页</Link> &gt; <Link href="/news">新闻中心</Link> &gt; 报道摘要</div>
          <article className="content-card article">
            <div className="article-category">{article.category}</div>
            <h1>{article.title}</h1>
            <div className="meta">
              <span>原文发布：<time dateTime={article.date}>{article.date}</time></span>
              {article.eventDate && <span>活动日期：{article.eventDate}</span>}
              <span>来源：{article.source}</span>
            </div>
            <div className="body">
              {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <ReportPhoto article={article} />
              {article.gallery && <div className="report-gallery" aria-label="报道配图">{article.gallery.map((photo) => <ReportPhoto key={photo.src} article={article} photo={photo} />)}</div>}
            </div>
            <div className="article-source">
              <strong>原文入口</strong>
              {article.sourceOffline ? (
                <>
                  <span>{article.sourceTitle}</span>
                  <em>原文分享链接已失效（微信公众号分享链接有时效）。可按“{article.source}”＋上方标题＋推送日期 {article.date} 在微信内检索原文。</em>
                </>
              ) : (
                <a href={article.sourceUrl} target="_blank" rel="noreferrer">{article.sourceTitle} ↗</a>
              )}
              <span>{article.source} · {article.date}</span>
              {article.relatedSources?.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">相关资料：{source.title} ↗</a>)}
              <p>本文为有出处的事实摘要，由同学维护的非正式网站整理；核对日期：{contentCheckedAt}。</p>
            </div>
            <nav className="pager" aria-label="相邻报道">
              {newer && <p>较新报道：<Link href={`/news/${newer.id}`}>{newer.title}</Link></p>}
              {older && <p>较早报道：<Link href={`/news/${older.id}`}>{older.title}</Link></p>}
              <p><Link href="/news">返回新闻中心</Link></p>
            </nav>
            {related.length > 0 && (
              <section className="related-block" aria-label="同类别其他报道">
                <h2>同类报道 · {article.category}</h2>
                <ul>
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link href={`/news/${item.id}`}>{item.title}</Link>
                      <time dateTime={item.date}>{item.date}</time>
                    </li>
                  ))}
                </ul>
                <p className="small-note"><Link href={`/news?category=${encodeURIComponent(article.category)}`}>查看该类别全部报道 &gt;</Link></p>
              </section>
            )}
          </article>
        </div>
      </main>
    </>
  );
}
