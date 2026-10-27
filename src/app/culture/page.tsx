import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import ReportPhoto from '@/components/ReportPhoto';
import { getNews } from '@/data/news';

export const metadata = {
  title: '校园文化 - 北京市第一六六中学（非正式网站）',
  description: '从有出处的报道中了解学校阅读、书法、管乐、合唱、戏剧与校史活动。'
};

export default function CulturePage() {
  return (
    <PageLayout title="校园文化" english="CAMPUS CULTURE">
      <h3 className="block-t">敬业乐群　求实进取</h3>
      <p className="school-motto noindent">敬业 · 乐群 · 求实 · 进取</p>
      <p>学校创办于1864年。2024年的160周年校庆报道，回顾了贝满女中、女十二中及一六六中学等历史阶段，也记录了学生通过校史讲解和校友访谈参与校庆的经历。</p>
      <p className="source-note">校史资料见<Link href="/news/20">160周年校庆报道</Link>与<Link href="/news/8">“百年老校”专题</Link>。本栏目记录报道当年的活动，不列现任教师、校友个人介绍或联络信息。</p>
      <ReportPhoto article={getNews(20)!} photo={getNews(20)!.gallery![0]} />

      <h3 className="block-t">书写校牌，让作品进入校园</h3>
      <p>2022年春季，学校首次换上由在校学生书写的校牌。此后，这项活动持续开展；北京青年报2024年9月的报道记录了第10次换新，新一版作品采用魏碑体。书法学习由练习纸走向校门，也让学生参与校园公共空间的建设。</p>
      <p className="noindent"><Link href="/news/17">2022年首次学生题写校牌</Link>　｜　<Link href="/news/25">2024年校牌第10次换新</Link></p>

      <h3 className="block-t">从好书小报到校园书市</h3>
      <p>2024年世界读书日前后，学校举办英文原版好书推荐小报大赛，学生将阅读理解与英文表达、图文设计结合。第二届博雅书市邀请书店走进校园；各学科的主题阅读任务，则把阅读放入日常学习。</p>
      <p className="noindent"><Link href="/news/19">查看校园阅读活动</Link>　｜　<Link href="/news/16">长征主题读书分享</Link></p>

      <h3 className="block-t">管乐与合唱，走上音乐厅舞台</h3>
      <p>2023年11月，金帆管乐团在北京音乐厅举行专场音乐会，首演《缤纷幻想曲》。2024年5月，星光高中男声合唱团携手一贯制及高中女子合唱团，在中山公园音乐堂举办“青春之歌，唱给你听”音乐会。</p>
      <ReportPhoto article={getNews(18)!} />
      <p className="noindent"><Link href="/news/18">管乐专场报道</Link>　｜　<Link href="/news/21">合唱专场报道</Link></p>

      <h3 className="block-t">用戏剧理解故事与历史</h3>
      <p>2023年上演的原创话剧《百合花颂》，从学校历史中取材，将不同年代的故事搬上舞台。2026年，《高地前的抉择》参加东城区第二十九届学生艺术节金帆专场。两则报道分别记录了原创校史剧与艺术节演出的不同实践。</p>
      <p className="noindent"><Link href="/news/22">《百合花颂》原创话剧</Link>　｜　<Link href="/news/6">《高地前的抉择》展演</Link></p>

      <h3 className="block-t">校史学习的两种记录方式</h3>
      <p>2024年的女性校友事迹专题展，以展板呈现学校历史中的成长故事。同年校庆期间，学生分组采访校友并形成访谈记录。这里保留活动经过，个人事迹与完整访谈请查阅原报道。</p>
      <p className="noindent"><Link href="/news/23">女性校友事迹专题展</Link>　｜　<Link href="/news/20">校庆与访谈活动</Link></p>

      <h3 className="block-t">知识、游戏与动手设计</h3>
      <p>首届数学节将魔方、数独、折纸和数学史展板带入校园；碳中和主题花园设计则把生态知识转化为模型。这些报道提供了观察学科活动与校园文化的不同角度。</p>
      <p className="noindent"><Link href="/news/24">首届数学节</Link>　｜　<Link href="/news/9">碳中和主题花园设计</Link></p>
      <p className="source-note">更多近期线索见<Link href="/sources#wechat">学校公众号标题索引</Link>。未核读正文的推送仅列标题，不据此补写活动详情。</p>
    </PageLayout>
  );
}
