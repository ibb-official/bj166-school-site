import type { ReactNode } from 'react';
import Link from 'next/link';
import NewsLinks from '@/components/NewsLinks';

export default function PageLayout({ title, english, children, sidebar }: {
  title: string;
  english: string;
  children: ReactNode;
  sidebar?: ReactNode;
}) {
  return (
    <>
      <div className="page-head"><div className="wrap"><h2>{title}</h2><p>{english}</p></div></div>
      <main className="main">
        <div className="wrap">
          <div className="crumb">当前位置：<Link href="/">首页</Link> &gt; {title}</div>
          <div className="page-cols">
            <div className="page-main">{children}</div>
            <aside className="page-side">
              {sidebar}
              <div className="side-box">
                <div className="hd">近期公开报道</div>
                <div className="bd"><NewsLinks /></div>
              </div>
              <div className="side-box">
                <div className="hd">资料导航</div>
                <div className="bd quick-links">
                  <Link href="/wechat">学校公众号档案</Link>
                  <Link href="/disclosure">公开文件目录</Link>
                  <Link href="/sources">报道来源清单</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
