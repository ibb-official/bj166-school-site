import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrap">
        <p>
          <Link href="/about">学校概况</Link>|
          <Link href="/news">新闻中心</Link>|
          <Link href="/policy">教育方针</Link>|
          <Link href="/disclosure">信息公示</Link>|
          <Link href="/culture">校园文化</Link>|
          <Link href="/contact">联系我们</Link>|
          <Link href="/sources">资料来源</Link>
        </p>
        <p>公开地址：北京市东城区同福夹道3号　邮编：100006　公开电话：010-65253226</p>
        <p>版权所有 © 2026 北京市第一六六中学（非正式网站）　非官方资料整理站点</p>
        <p className="disclaimer">
          本站为非官方网站，与北京市第一六六中学及相关机构无任何隶属关系。页面内容为公开资料摘要，联系方式和统计数据均标注来源与时点；图片为随压缩包提供的AI示意图，不代表学校官方摄影或官方立场。
        </p>
      </div>
    </div>
  );
}
