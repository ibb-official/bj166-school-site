'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [dateText, setDateText] = useState('');
  useEffect(() => {
    setDateText(new Intl.DateTimeFormat('zh-CN', { dateStyle: 'full', timeZone: 'Asia/Shanghai' }).format(new Date()));
  }, []);

  const navItems = [
    { name: '首　页', path: '/' },
    { name: '学校概况', path: '/about' },
    { name: '新闻中心', path: '/news' },
    { name: '教育方针', path: '/policy' },
    { name: '信息公示', path: '/disclosure' },
    { name: '校园文化', path: '/culture' },
    { name: '关于本站', path: '/contact' },
    { name: '资料来源', path: '/sources' }
  ];

  return (
    <>
      <div className="topbar">
        <div className="wrap"><span>{dateText}</span><span><Link href="/sources">公开资料整理</Link><span className="sep">|</span><Link href="/contact">关于本站</Link></span></div>
      </div>
      <header className="header wrap">
        <div className="logo">
          <h1><Link href="/">北京市第一六六中学</Link><span className="badge">非正式网站</span></h1>
          <p>BEIJING NO.166 HIGH SCHOOL · 敬业 乐群 求实 进取</p>
        </div>
        <form className="search" action="/news" method="get" role="search">
          <label className="visually-hidden" htmlFor="site-search">搜索公开报道</label>
          <input id="site-search" name="q" type="search" maxLength={100} placeholder="搜索公开报道" />
          <button type="submit">搜索</button>
        </form>
      </header>
      <nav className="nav" aria-label="主导航">
        <ul className="wrap">
          {navItems.map((item) => {
            const active = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);
            return <li key={item.path} className={active ? 'on' : ''}><Link href={item.path} aria-current={active ? 'page' : undefined}>{item.name}</Link></li>;
          })}
        </ul>
      </nav>
    </>
  );
}
