import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { sortedNews } from '@/data/news';
import { schoolAccount } from '@/data/sources';

export const metadata = {
  title: '信息公示 - 北京市第一六六中学（非正式网站）',
  description: '学校2026年部门预算、招生资格和“1+3”培养实验等公开文件的原文索引。'
};

export default function DisclosurePage() {
  const files = sortedNews.filter((item) => item.category === '信息公示');
  return (
    <PageLayout title="信息公示" english="PUBLIC INFORMATION">
      <h3 className="block-t">公开文件目录</h3>
      <p>本栏目整理政府及教育部门公开发布的学校相关文件。每条保留原发布年度，完整内容通过原文入口查阅。</p>
      <ul className="report-list">
        {files.map((item) => (
          <li key={item.id}>
            <div className="report-meta"><time dateTime={item.date}>{item.date}</time><span>{item.source}</span></div>
            <h3><Link href={`/news/${item.id}`}>{item.title}</Link></h3>
            <p>{item.summary}</p>
            <a className="read-link" href={item.sourceUrl} target="_blank" rel="noreferrer">查阅原始文件 ↗</a>
          </li>
        ))}
      </ul>

      <h3 className="block-t">阅读说明</h3>
      <table className="pub">
        <tbody>
          <tr><th scope="col">资料</th><th scope="col">需要区分的事项</th></tr>
          <tr><th scope="row">2026年部门预算</th><td>预算说明与财政表格不等于向学生收取的费用。</td></tr>
          <tr><th scope="row">2026年招生资格名单</th><td>名单确认学校招生资格；具体计划、报考要求与录取结果须另查当年公告。</td></tr>
          <tr><th scope="row">2026年“1+3”资料</th><td>本页保留历史年度说明，不能视为仍开放报名。</td></tr>
        </tbody>
      </table>

      <h3 className="block-t">官方信息查询</h3>
      <ul className="source-directory">
        <li><a href="https://www.bjeea.cn/" target="_blank" rel="noreferrer">北京教育考试院 ↗</a><span>中招政策、考试与录取相关信息。</span></li>
        <li><a href="https://jw.beijing.gov.cn/" target="_blank" rel="noreferrer">北京市教育委员会 ↗</a><span>教育政策、学校招生资格等正式发布。</span></li>
        <li><a href="https://www.bjdch.gov.cn/" target="_blank" rel="noreferrer">东城区人民政府 ↗</a><span>区级政务公开、部门预算与决算。</span></li>
      </ul>
      <p>学校公众号名称为“{schoolAccount.name}”，认证主体为“{schoolAccount.certifiedEntity}”。在微信搜索账号后核对主体，可查看学校近期推送。<Link href="/sources#wechat">查看已核对的账号资料</Link></p>
      <div className="source-note">本站为非正式资料整理页，不代学校办理报名、收费或信息登记。</div>
    </PageLayout>
  );
}
