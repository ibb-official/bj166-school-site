import Link from 'next/link';
import { contentCheckedAt } from '@/data/news';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p><Link href="/about">学校概况</Link>｜<Link href="/news">新闻中心</Link>｜<Link href="/policy">教育方针</Link>｜<Link href="/disclosure">信息公示</Link>｜<Link href="/culture">校园文化</Link>｜<Link href="/contact">联系我们</Link>｜<Link href="/sources">资料来源</Link></p>
        <p>公开地址：北京市东城区同福夹道3号　邮编：100006　公开电话：010-65253226（政务地图2025-06-12）</p>
        <p>© 2026 同学共建 · 北京市第一六六中学非正式网站　资料核对：{contentCheckedAt}</p>
        <p className="disclaimer">本站由同学协作维护，不代表学校或教育行政部门。新闻为公开报道摘要，原文、图片权利归原权利人；配图来源见各文章及资料来源页。校务与招生事项请以官方最新发布为准。</p>
      </div>
    </footer>
  );
}
