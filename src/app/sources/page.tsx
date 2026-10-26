import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import AccountUpdates from '@/components/AccountUpdates';
import { contentCheckedAt, photoNews, sortedNews } from '@/data/news';
import { accountUpdates, policySources, schoolAccount, schoolMap } from '@/data/sources';

export const metadata = {
  title: '资料来源 - 北京市第一六六中学（非正式网站）',
  description: '公开报道原文、政府文件、真实配图出处及学校认证公众号近期推送标题。'
};

export default function SourcesPage() {
  return (
    <PageLayout title="资料来源" english="PUBLIC SOURCES">
      <p className="noindent">本次资料核对日期：<strong>{contentCheckedAt}</strong>。报道摘要保留原文标题、发布者、发布日期和来源链接；部分原文需在媒体客户端打开。</p>
      <h3 className="block-t">学校基本资料</h3>
      <ul className="source-directory">
        <li><a href={schoolMap.url} target="_blank" rel="noreferrer">{schoolMap.publisher}：{schoolMap.title} ↗</a><span>{schoolMap.date} · 名称、创办日期和学校类型。</span></li>
        <li><Link href="/news/12">东城区政府：学校2026年部门预算</Link><span>2026-02-12 · 单位职责、学校性质与机构情况。</span></li>
        <li><Link href="/news/13">东教印象：2026年“1+3”培养实验学校简介</Link><span>2026-07-20 · 创办年份、历史名称、校训及课程介绍。</span></li>
      </ul>

      <h3 className="block-t" id="wechat">学校微信公众号</h3>
      <AccountUpdates />
      <p className="noindent small-note">账号简介：{schoolAccount.introduction} 本次回溯至2026年1月1日，保留{accountUpdates.length}条历史推送标题。完整月份目录见<Link href="/wechat">公众号档案</Link>。这些条目未核读完整正文，不制作未经核验的文章链接或二维码。</p>
      <p className="noindent">另有可公开阅读的学校公众号转载：<Link href="/news/9">“美境行动”全国特等奖报道</Link>，可由转载页阅读相关信息。</p>

      <h3 className="block-t">报道与公开文件原文（{sortedNews.length}条）</h3>
      <ul className="source-directory">
        {sortedNews.map((item) => (
          <li key={item.id}>
            <a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceTitle} ↗</a>
            <span>{item.source} · {item.date} · {item.category}</span>
            <Link className="read-link" href={`/news/${item.id}`}>本站事实摘要</Link>
          </li>
        ))}
      </ul>

      <h3 className="block-t">教育政策文件</h3>
      <ul className="source-directory">
        {policySources.map((item) => <li key={item.url}><a href={item.url} target="_blank" rel="noreferrer">{item.title} ↗</a><span>{item.publisher} · {item.date}</span></li>)}
      </ul>

      <h3 className="block-t">图片来源</h3>
      <p>本次展示的{photoNews.length}张报道图片均取自对应原文，保留原始画幅。设计模型单独标注，避免与已建成校园景观混淆。</p>
      <ul className="source-directory">
        {photoNews.map((item) => <li key={item.id}><Link href={`/news/${item.id}`}>{item.image!.caption}</Link><span>{item.image!.credit}</span><a className="read-link" href={item.image!.originalUrl} target="_blank" rel="noreferrer">原图地址 ↗</a></li>)}
      </ul>
      <p className="noindent small-note">校徽使用既有项目图片，仅用于学校资料识别。本站为非正式网站，不代表学校授权发布；报道及图片版权归相应权利人。</p>
    </PageLayout>
  );
}
