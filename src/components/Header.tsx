'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const d = new Date();
    const week = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
    setDateStr(`今天是 ${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 星期${week}`);
  }, []);

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('演示站点，该功能未启用');
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input') as HTMLInputElement;
    const kw = input ? input.value.trim() : '';
    alert(kw ? `演示站点暂不提供检索服务，关键词：${kw}` : '请输入关键词');
  };

  const navItems = [
    { name: '首　页', path: '/' },
    { name: '学校概况', path: '/about' },
    { name: '新闻中心', path: '/news' },
    { name: '教育方针', path: '/policy' },
    { name: '信息公示', path: '/disclosure' },
    { name: '校园文化', path: '/culture' },
    { name: '联系我们', path: '/contact' },
    { name: '资料来源', path: '/sources' },
  ];

  return (
    <>
      {/* 顶部工具条 */}
      <div className="topbar">
        <div className="wrap">
          <span id="today">{dateStr}</span>
          <span>
            <a href="#" onClick={handleDemoClick}>设为首页</a>
            <span className="sep">|</span>
            <a href="#" onClick={handleDemoClick}>加入收藏</a>
            <span className="sep">|</span>
            <Link href="/contact">联系方式说明</Link>
          </span>
        </div>
      </div>

      {/* 站头 */}
      <div className="header wrap">
        <div className="logo">
          <h1>
            北京市第一六六中学<span className="badge">非正式网站</span>
          </h1>
          <p>BEIJING NO.166 MIDDLE SCHOOL &nbsp;·&nbsp; 敬业 乐群 求实 进取</p>
        </div>
        <form className="search" id="search-form" onSubmit={handleSearchSubmit}>
          <input type="text" placeholder="请输入关键词" />
          <button type="submit">搜索</button>
        </form>
      </div>

      {/* 主导航 */}
      <div className="nav">
        <ul className="wrap">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? pathname === '/'
                : pathname.startsWith(item.path);
            return (
              <li key={item.path} className={isActive ? 'on' : ''}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
