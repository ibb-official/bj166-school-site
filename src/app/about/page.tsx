import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import ReportPhoto from '@/components/ReportPhoto';
import { getNews } from '@/data/news';
import { schoolMap } from '@/data/sources';

export const metadata = {
  title: '学校概况 - 北京市第一六六中学（非正式网站）',
  description: '据政务地图、学校部门预算与东城教育公开资料整理的学校概况。'
};

export default function AboutPage() {
  return (
    <PageLayout title="学校概况" english="ABOUT THE SCHOOL">
      <h3 className="block-t">学校简介</h3>
      <p>北京市第一六六中学位于北京市东城区，是一所完全中学。学校创办于1864年，办学历史中曾使用贝满女中、北京市第十二女子中学等名称。学校校训为“敬业乐群、求实进取”。</p>
      <p>学校2026年部门预算说明，其为东城区教育委员会所属全额拨款事业单位。市教委政务地图列出的灯市口校区地址为同福夹道3号。历史与学校类型信息可结合下列原始资料查阅。</p>
      <p className="source-note">资料依据：<a href={schoolMap.url} target="_blank" rel="noreferrer">市教委政务地图</a>、<Link href="/news/12">2026年部门预算</Link>及<Link href="/news/13">2026年“1+3”学校简介</Link>。</p>

      <h3 className="block-t">基本情况</h3>
      <table className="pub">
        <tbody>
          <tr><th scope="col">项目</th><th scope="col">公开资料记载</th></tr>
          <tr><th scope="row">正式名称</th><td>北京市第一六六中学</td></tr>
          <tr><th scope="row">创办年份</th><td>1864年（政务地图与2026年学校简介）</td></tr>
          <tr><th scope="row">学校类型</th><td>完全中学</td></tr>
          <tr><th scope="row">主管部门</th><td>北京市东城区教育委员会</td></tr>
          <tr><th scope="row">灯市口校区地址</th><td>{schoolMap.address}</td></tr>
          <tr><th scope="row">公开电话／邮编</th><td>{schoolMap.telephone} ／ {schoolMap.postcode}（政务地图{schoolMap.date}）</td></tr>
        </tbody>
      </table>

      <h3 className="block-t">公开报道中的课程与实践</h3>
      <p><strong>生命科学：</strong>生科班专题记录了大学通识课、实验室学习、湿地调查等实践。2026年9月，又有部分初三学生走进清华大学学习《疫苗的力量》。<Link href="/news/1">查看报道</Link></p>
      <ReportPhoto article={getNews(4)!} />
      <p><strong>科技探究：</strong>“繁星计划”交流课例、车辆模型竞赛与碳中和花园设计，呈现了从动手实验到工程设计的多种学习场景。<Link href="/news?category=科学教育">科学教育报道</Link></p>
      <p><strong>人文与艺术：</strong>学校学生参加戏剧展演、主题阅读等活动。“1+3”培养实验的公开简介介绍了博雅“人文+X”课程。<Link href="/culture">校园文化资料</Link></p>

      <h3 className="block-t">关于本网站</h3>
      <p>本站由同学协作建设，整理学校相关公开资料。新闻有原文入口，照片有出处；学校现行课程、招生和校务安排，以学校及教育部门最新发布为准。</p>
    </PageLayout>
  );
}
