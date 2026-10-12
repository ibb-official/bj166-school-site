import React from 'react';
import Link from 'next/link';
import { newsList } from '@/data/news';

export const metadata = {
  title: '新闻中心 - 北京市第一六六中学（非正式网站）',
  description: '北京市第一六六中学公开报道、科学教育与校园文化活动。',
};

export default function NewsPage() {
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
            当前位置：<Link href="/">首页</Link> &gt; 新闻中心
          </div>

          <div className="content-card">
            <div className="source-note" style={{ marginBottom: '20px' }}>
              说明：本栏目收录东教印象、首都教育等公开媒体关于北京市第一六六中学的公开报道摘要与学习资料整理。
            </div>

            <ul className="news-list" style={{ fontSize: '15px', lineHeight: '2.4' }}>
              {newsList.map((item) => (
                <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e0e0e0', padding: '6px 0' }}>
                  <span className="t">
                    <Link href={`/news/${item.id}`} style={{ color: '#222' }}>
                      【{item.source}】{item.title}
                    </Link>
                  </span>
                  <span className="d" style={{ color: '#888' }}>{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
