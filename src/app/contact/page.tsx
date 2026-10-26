import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: '关于本站 - 北京市第一六六中学（非正式网站）',
  description: '同学共建的学校公开报道资料站，介绍资料收录和维护方式。'
};

export default function SiteInfoPage() {
  return (
    <PageLayout title="关于本站" english="ABOUT THIS WEBSITE">
      <h3 className="block-t">同学共建的公开资料站</h3>
      <p>本站由同学协作建设，整理与北京市第一六六中学有关的公开报道、校园文化和教育资料。页面保留“非正式网站”标识，方便读者识别资料整理页与学校正式发布的区别。</p>
      <h3 className="block-t">资料如何收录</h3>
      <p>优先使用政府、教育科研机构及新闻媒体的公开原文，记录发布者、原文标题和报道日期。页面用简要摘要介绍事实，并提供原文入口；历史活动按当时的年度归档。</p>
      <p>仅核对到标题的公众号推送，单独保留在标题索引中。找不到可靠依据的描述会直接移除，不补写人物评价、活动细节或学校承诺。</p>
      <h3 className="block-t">信息展示范围</h3>
      <p>本站集中展示校园活动和公共报道。学校电话、个人联系方式、师资名录与个人介绍不在本站展示；需要办理具体校务时，请通过学校或主管部门的正式渠道核实。</p>
      <h3 className="block-t">查阅与协作</h3>
      <p>每篇摘要末尾可查看原文出处。完整目录见<Link href="/sources">资料来源</Link>，项目维护记录可在<a href="https://github.com/ibb-official/bj166-school-site" target="_blank" rel="noreferrer">协作仓库</a>中查阅。</p>
    </PageLayout>
  );
}
