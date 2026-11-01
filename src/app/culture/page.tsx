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
      <ReportPhoto article={getNews(19)!} />

      <h3 className="block-t">管乐与合唱，走上音乐厅舞台</h3>
      <p>2023年11月，金帆管乐团在北京音乐厅举行专场音乐会，首演《缤纷幻想曲》。2024年5月，星光高中男声合唱团携手一贯制及高中女子合唱团，在中山公园音乐堂举办“青春之歌，唱给你听”音乐会。</p>
      <ReportPhoto article={getNews(18)!} />
      <ReportPhoto article={getNews(21)!} />
      <p className="noindent"><Link href="/news/18">管乐专场报道</Link>　｜　<Link href="/news/21">合唱专场报道</Link>　｜　<Link href="/news/32">2026年市艺术节合唱展演</Link></p>

      <h3 className="block-t">年级课程与成长仪式</h3>
      <p>学校在不同年级安排综合实践活动、军训与毕业年级活动。2022年6月，2022届高三年级举行“青春如歌·逐梦未来”盛典，设三个篇章并向学生赠送宪法、博雅风华系列丛书、校名与校训印章等毕业礼物。开学典礼也固定设置假期实践分享、学生演讲与教师寄语等环节：2025年2月的开学典礼在两校区同步举行，同期更新了学生书写的校牌与选用维瓦尔第《春》的校铃。这类活动与日常课程、校训一起构成校园生活的仪式感。</p>
      <p className="noindent"><Link href="/news/29">2022届高三年级盛典</Link>　｜　<Link href="/news/37">2025年春季开学典礼</Link></p>

      <h3 className="block-t">用戏剧理解故事与历史</h3>
      <p>2023年上演的原创话剧《百合花颂》，从学校历史中取材，将不同年代的故事搬上舞台。2026年，《高地前的抉择》参加东城区第二十九届学生艺术节金帆专场。两则报道分别记录了原创校史剧与艺术节演出的不同实践。</p>
      <p className="noindent"><Link href="/news/22">《百合花颂》原创话剧</Link>　｜　<Link href="/news/6">《高地前的抉择》展演</Link></p>
      <ReportPhoto article={getNews(6)!} />

      <h3 className="block-t">校史学习的两种记录方式</h3>
      <p>2024年的女性校友事迹专题展，以展板呈现学校历史中的成长故事。同年校庆期间，学生分组采访校友并形成访谈记录。这里保留活动经过，个人事迹与完整访谈请查阅原报道。</p>
      <p className="noindent"><Link href="/news/23">女性校友事迹专题展</Link>　｜　<Link href="/news/20">校庆与访谈活动</Link></p>

      <h3 className="block-t">知识、游戏与动手设计</h3>
      <p>首届数学节将魔方、数独、折纸和数学史展板带入校园；碳中和主题花园设计则把生态知识转化为模型。这些报道提供了观察学科活动与校园文化的不同角度。</p>
      <p className="noindent"><Link href="/news/24">首届数学节</Link>　｜　<Link href="/news/9">碳中和主题花园设计</Link></p>
      <ReportPhoto article={getNews(24)!} />

      <h3 className="block-t">校史时间轴</h3>
      <p className="noindent small-note">下列节点均取自已核验的公开报道或政务公开资料，年份与事件按原文记载，不推断未载明的细节。</p>
      <table className="pub timeline">
        <tbody>
          <tr><th scope="col">时间</th><th scope="col">已核验的节点</th><th scope="col">出处</th></tr>
          <tr><th scope="row">1864年</th><td>学校创办；办学历史中曾使用贝满女中、北京市第十二女子中学等名称。</td><td><Link href="/news/13">2026年学校简介</Link></td></tr>
          <tr><th scope="row">2018年11月</th><td>与加拿大普林斯顿中学签约建立友好校关系，交流方向包括师生健康素养。</td><td><Link href="/news/30">学校公众号推送</Link></td></tr>
          <tr><th scope="row">2022年春季</th><td>首次换上由在校学生书写的校牌。</td><td><Link href="/news/17">北京日报报道</Link></td></tr>
          <tr><th scope="row">2023年5月</th><td>“百年老校”专题报道梳理学校三个世纪的办学历程。</td><td><Link href="/news/8">东教印象专题</Link></td></tr>
          <tr><th scope="row">2023年11月</th><td>金帆话剧团首部原创校史话剧《百合花颂》上演，献礼160周年校庆。</td><td><Link href="/news/22">北京青年报报道</Link></td></tr>
          <tr><th scope="row">2024年9月</th><td>学生题写校牌活动延续，校牌第10次换新。</td><td><Link href="/news/25">北京青年报报道</Link></td></tr>
          <tr><th scope="row">2024年10月</th><td>建校160周年校庆，校友返校参加活动。</td><td><Link href="/news/20">校庆报道</Link></td></tr>
          <tr><th scope="row">2025年2月</th><td>新学期开学典礼在两校区同步举行，校牌由学生以欧体楷书书写，校铃选用维瓦尔第《四季》之《春》。</td><td><Link href="/news/37">北京时间报道</Link></td></tr>
          <tr><th scope="row">2025年3月</th><td>教育集团第二届数学节举办，持续两周。</td><td><Link href="/news/38">新华网报道</Link></td></tr>
        </tbody>
      </table>

      <p className="source-note">更多近期线索见<Link href="/sources#wechat">学校公众号标题索引</Link>。未核读正文的推送仅列标题，不据此补写活动详情。</p>
    </PageLayout>
  );
}
