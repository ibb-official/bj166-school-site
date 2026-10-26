import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { policySources } from '@/data/sources';

export const metadata = {
  title: '教育方针 - 北京市第一六六中学（非正式网站）',
  description: '教育强国、课程标准和科学教育政策原文入口，以及学校育人实践的公开报道。'
};

export default function PolicyPage() {
  return (
    <PageLayout title="教育方针" english="EDUCATION POLICY">
      <h3 className="block-t">落实立德树人，关注全面发展</h3>
      <p>《教育强国建设规划纲要（2024—2035年）》对立德树人、基础教育和教育改革等作出总体部署。了解学校课程与活动，可以把国家教育政策与有出处的校园实践结合起来阅读。</p>
      <p>本页汇集政策文件入口与相关报道，分别标明发布机关和时间。具体教学、作息及学生管理安排，应查阅学校正式通知。</p>

      <h3 className="block-t">政策文件选读</h3>
      <p className="small-note noindent">以下包括国家、北京市及东城区的政策背景，学校具体实践另见下方报道。</p>
      <ul className="policy-list">
        {policySources.map((item) => (
          <li key={item.url}>
            <h4><a href={item.url} target="_blank" rel="noreferrer">{item.title} ↗</a></h4>
            <div className="small-note">{item.publisher} · {item.date}</div>
            <p>{item.summary}</p>
          </li>
        ))}
      </ul>

      <h3 className="block-t">从公开报道看育人实践</h3>
      <p><strong>科学探究：</strong><Link href="/news/3">“繁星计划”交流活动</Link>展示科技史与前沿技术探究课例；<Link href="/news/1">清华大学通识课</Link>为中学生提供接触生命科学研究的机会。</p>
      <p><strong>思政实践：</strong><Link href="/news/10">走进北京大学</Link>的主题学习与<Link href="/news/7">国家安全教育日宣讲</Link>，见于东城教育专题和记者报道。</p>
      <p><strong>阅读与学科：</strong><Link href="/news/19">校园读书日</Link>将书籍推荐和图文表达相结合，<Link href="/news/24">数学节</Link>通过游戏与展板呈现学科知识。</p>
      <p><strong>人文美育：</strong><Link href="/news/6">戏剧展演</Link>与<Link href="/news/16">经典阅读分享</Link>，提供了课堂之外的学习场景。</p>
      <p><strong>生态与实践：</strong><Link href="/news/9">碳中和主题花园设计</Link>将环保议题与模型制作相结合。</p>
      <div className="source-note">以上为公开报道所载的具体活动。政策文件与学校新闻分别列出，便于查看各自的适用范围和发布背景。</div>
    </PageLayout>
  );
}
