import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import ReportPhoto from '@/components/ReportPhoto';
import { getNews } from '@/data/news';

export const metadata = {
  title: '校园文化 - 北京市第一六六中学（非正式网站）',
  description: '校训、百年老校资料，以及阅读、戏剧与科学设计中的校园文化。'
};

export default function CulturePage() {
  return (
    <PageLayout title="校园文化" english="CAMPUS CULTURE">
      <h3 className="block-t">敬业乐群　求实进取</h3>
      <p className="school-motto noindent">敬业 · 乐群 · 求实 · 进取</p>
      <p>2026年东城区“1+3”培养实验学校简介，介绍了学校1864年的创办历史，以及贝满女中、北京市第十二女子中学等历史名称。东教印象“百年老校”专题则从博雅教育出发，呈现科技、人文、健康、艺术交融的校园文化。</p>
      <p className="source-note">校史与校训依据：<Link href="/news/13">2026年学校简介</Link>、<Link href="/news/8">2023年“百年老校”专题</Link>。更完整的沿革可查阅学校正式校史资料。</p>

      <h3 className="block-t">从近期报道走近校园</h3>
      <ul className="timeline">
        <li><strong>2025年4月</strong><Link href="/news/9">“美境行动”获奖报道</Link>：以碳中和主题花园设计，将生态知识转化为可展示的模型。</li>
        <li><strong>2026年6月</strong><Link href="/news/3">科技史探究实践交流</Link>：在科学发展的历史线索中，讨论智慧农业、医疗、通信和地球演化。</li>
        <li><strong>2026年9月</strong><Link href="/news/6">学生艺术节戏剧展演</Link>：剧目《高地前的抉择》登上东城区金帆专场舞台。</li>
        <li><strong>2026年10月</strong><Link href="/news/16">长征主题读书成果展演</Link>：学生分享经典作品的阅读体会。</li>
      </ul>

      <h3 className="block-t">设计里的生态思考</h3>
      <ReportPhoto article={getNews(9)!} />
      <p>上图是学生设计模型。相关报道介绍了水资源利用、藻类花园与碳循环展示等设计要素，将科学知识放进具体空间方案中。</p>

      <h3 className="block-t">公众号中的文化活动线索</h3>
      <p>本次核对的公众号推送标题还涉及星光男声合唱团展演、学生书画展、秋季运动会、国旗班交接和学生书写校牌等主题。标题列表与核对范围详见<Link href="/sources#wechat">学校公众号动态</Link>；活动详情请在微信中阅读学校原文。</p>
    </PageLayout>
  );
}
