import Link from 'next/link';
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
  const article = findArticle((await params).id);
  return article ? { title: `${article.title} - 北京市第一六六中学（非正式网站）`, description: article.summary } : { title: '报道未找到' };
}
export default async function NewsDetailPage({ params }: Props) {
  const article = findArticle((await params).id);
  if (!article) notFound();
  const position = sortedNews.findIndex((item) => item.id === article.id);
  const newer = sortedNews[position - 1];
  const older = sortedNews[position + 1];
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
              <a href={article.sourceUrl} target="_blank" rel="noreferrer">{article.sourceTitle} ↗</a>
              <span>{article.source} · {article.date}</span>
              {article.relatedSources?.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">相关资料：{source.title} ↗</a>)}
              <p>本文为有出处的事实摘要，由同学维护的非正式网站整理；核对日期：{contentCheckedAt}。</p>
            </div>
            <nav className="pager" aria-label="相邻报道">
              {newer && <p>较新报道：<Link href={`/news/${newer.id}`}>{newer.title}</Link></p>}
              {older && <p>较早报道：<Link href={`/news/${older.id}`}>{older.title}</Link></p>}
              <p><Link href="/news">返回新闻中心</Link></p>
            </nav>
          </article>
        </div>
      </main>
    </>
  );
}
