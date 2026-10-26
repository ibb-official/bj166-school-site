import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import AccountUpdates from '@/components/AccountUpdates';
import { contentCheckedAt, photoNews, sortedNews } from '@/data/news';
import { policySources, schoolAccount, schoolMap } from '@/data/sources';

export const metadata = {
  title: '资料来源 - 北京市第一六六中学（非正式网站）',
  description: '公开报道原文、政府文件、真实配图出处及学校认证公众号近期推送标题。'
};

export default function SourcesPage() {
  return (
    <PageLayout title="资料来源" english="PUBLIC SOURCES">
      <p className="noindent">本次资料核对日期：<strong>{contentCheckedAt}</strong>。报道摘要保留原文标题、发布者、发布日期和可访问的来源链接。</p>
      <h3 className="block-t">学校基本资料</h3>
      <ul className="source-directory">
        <li><a href={schoolMap.url} target="_blank" rel="noreferrer">{schoolMap.publisher}：{schoolMap.title} ↗</a><span>{schoolMap.date} · 名称、创办日期、学校类型、地址、电话和邮编。</span></li>
        <li><Link href="/news/12">东城区政府：学校2026年部门预算</Link><span>2026-02-12 · 单位职责、学校性质与机构情况。</span></li>
        <li><Link href="/news/13">东教印象：2026年“1+3”培养实验学校简介</Link><span>2026-07-20 · 创办年份、历史名称、校训及课程介绍。</span></li>
      </ul>

      <h3 className="block-t" id="wechat">学校微信公众号</h3>
      <AccountUpdates />
      <p className="noindent small-note">账号简介：{schoolAccount.introduction} 核对范围为认证资料和当时可见的10条推送标题，未取得全部历史文章正文。没有可核验的文章链接时，仅展示标题，不制作替代链接或二维码。</p>
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
      <p>本次展示的四张报道图片均取自对应原文，保留原始画幅。设计模型单独标注，避免与已建成校园景观混淆。</p>
      <ul className="source-directory">
        {photoNews.map((item) => <li key={item.id}><Link href={`/news/${item.id}`}>{item.image!.caption}</Link><span>{item.image!.credit}</span><a className="read-link" href={item.image!.originalUrl} target="_blank" rel="noreferrer">原图地址 ↗</a></li>)}
      </ul>
      <p className="noindent small-note">校徽使用既有项目图片，仅用于学校资料识别。本站为非正式网站，不代表学校授权发布；报道及图片版权归相应权利人。</p>
    </PageLayout>
  );
}
