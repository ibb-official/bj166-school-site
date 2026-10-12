import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { newsList } from '@/data/news';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return newsList.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const numId = parseInt(id, 10);
  const article = newsList.find((n) => n.id === numId);
  if (!article) return { title: '新闻未找到' };
  return {
    title: `${article.title} - 北京市第一六六中学（非正式网站）`,
    description: article.summary,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const numId = parseInt(id, 10);
  const article = newsList.find((n) => n.id === numId);

  if (!article) {
    notFound();
  }

  const prevArticle = newsList.find((n) => n.id === (numId === 1 ? 8 : numId - 1));
  const nextArticle = newsList.find((n) => n.id === (numId === 8 ? 1 : numId + 1));

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h2>新闻中心</h2>
          <p>NEWS CENTER</p>
        </div>
      </div>

      <div className="main">
        <div className="wrap">
          <div className="crumb">
            当前位置：<Link href="/">首页</Link> &gt; <Link href="/news">新闻中心</Link> &gt; 正文
          </div>

          <div className="content-card article">
            <h1>{article.title}</h1>
            <div className="meta">
              <span>公开报道时间：{article.date}</span>
              <span>资料来源：{article.source}</span>
              <span>整理：非官方网站</span>
            </div>

            <div className="body">
              {article.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {article.image && (
                <div className="pic">
                  <img src={article.image.src} alt={article.image.alt} />
                  <span>{article.image.caption}</span>
                </div>
              )}

              {article.sourceUrl && (
                <p className="source-note">
                  原文：
                  <a href={article.sourceUrl} target="_blank" rel="noreferrer">
                    {article.sourceTitle || article.sourceUrl}
                  </a>
                  。本文为摘要，图片为 AI 示意。
                </p>
              )}
            </div>

            <div className="pager">
              {prevArticle && (
                <p>
                  上一篇：<Link href={`/news/${prevArticle.id}`}>{prevArticle.title}</Link>
                </p>
              )}
              {nextArticle && (
                <p>
                  下一篇：<Link href={`/news/${nextArticle.id}`}>{nextArticle.title}</Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
