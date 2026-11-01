import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: '页面未找到 - 北京市第一六六中学（非正式网站）'
};

export default function NotFound() {
  return (
    <PageLayout title="页面未找到" english="PAGE NOT FOUND">
      <p>这个地址下没有对应内容。本站按「栏目 + 编号」组织页面，报道路径形如 <code>/news/12</code>；如果是从旧链接或转发消息进来的，可能已经不再收录。</p>
      <ul className="news-list">
        <li><span className="t"><Link href="/">返回首页</Link></span></li>
        <li><span className="t"><Link href="/news">新闻中心：46条有来源的报道与文件</Link></span></li>
        <li><span className="t"><Link href="/wechat">公众号档案：按年份与月份查阅历史推送标题</Link></span></li>
        <li><span className="t"><Link href="/sources">资料来源：每条报道的原文入口与核验说明</Link></span></li>
        <li><span className="t"><Link href="/contact">关于本站：站点性质与资料维护说明</Link></span></li>
      </ul>
      <p className="source-note">本站为同学维护的非正式资料站，不代表学校官方发布。</p>
    </PageLayout>
  );
}
