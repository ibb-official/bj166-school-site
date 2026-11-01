import Link from '@/components/Link';
import PageLayout from '@/components/PageLayout';
import ReportPhoto from '@/components/ReportPhoto';
import { getNews } from '@/data/news';
import { artsGroups } from '@/data/arts';
import { getHistorySource } from '@/data/history';

export const metadata = {
  title: '校园文化 - 北京市第一六六中学（非正式网站）',
  description: '从有出处的报道中了解学校阅读、书法活动，以及金帆管乐团、金帆话剧团与合唱团档案。'
};

export default function CulturePage() {
  return (
    <PageLayout title="校园文化" english="CAMPUS CULTURE">
      <h3 className="block-t">敬业乐群　求实进取</h3>
      <p className="school-motto noindent">敬业 · 乐群 · 求实 · 进取</p>
      <p>学校创办于1864年。2024年的160周年校庆报道，回顾了贝满女中、女十二中及一六六中学等历史阶段，也记录了学生通过校史讲解和校友访谈参与校庆的经历。</p>
      <p className="source-note">完整沿革见<Link href="/history">校史沿革</Link>；另见<Link href="/news/20">160周年校庆报道</Link>与<Link href="/news/8">“百年老校”专题</Link>。本栏目记录报道当年的活动，不列现任教师、校友个人介绍或联络信息。</p>
      <ReportPhoto article={getNews(20)!} photo={getNews(20)!.gallery![0]} />

      <h3 className="block-t">书写校牌，让作品进入校园</h3>
      <p>2022年春季，学校首次换上由在校学生书写的校牌。此后，这项活动持续开展；北京青年报2024年9月的报道记录了第10次换新，新一版作品采用魏碑体。书法学习由练习纸走向校门，也让学生参与校园公共空间的建设。</p>
      <p className="noindent"><Link href="/news/17">2022年首次学生题写校牌</Link>　｜　<Link href="/news/25">2024年校牌第10次换新</Link></p>

      <h3 className="block-t">从好书小报到校园书市</h3>
      <p>2024年世界读书日前后，学校举办英文原版好书推荐小报大赛，学生将阅读理解与英文表达、图文设计结合。第二届博雅书市邀请书店走进校园；各学科的主题阅读任务，则把阅读放入日常学习。</p>
      <p className="noindent"><Link href="/news/19">查看校园阅读活动</Link>　｜　<Link href="/news/16">长征主题读书分享</Link></p>
      <ReportPhoto article={getNews(19)!} />

      <h3 className="block-t" id="arts">艺术团档案</h3>
      <p className="noindent small-note">按团体整理演出与作品，条目链接到站内报道或注明出处。不列指导教师、指挥与学生姓名。</p>
      {artsGroups.map((group) => {
        const photoNews = group.photo ? getNews(group.photo.newsId) : undefined;
        return (
          <section className="arts-group" key={group.key} id={`arts-${group.key}`}>
            <h4>{group.name}{group.badge && <span className="source-tag">{group.badge}</span>}</h4>
            <p>{group.intro}</p>
            <ul className="timeline">
              {group.items.map((item) => {
                const source = item.source ? getHistorySource(item.source) : undefined;
                return (
                  <li key={item.year + item.text}>
                    <strong>{item.year}</strong>{item.text}
                    {item.newsId && <Link className="history-ref" href={`/news/${item.newsId}`}>相关报道</Link>}
                    {!item.newsId && source && <span className="history-ref" title={source.title}>{source.publisher}</span>}
                  </li>
                );
              })}
            </ul>
            {photoNews && <ReportPhoto article={photoNews} />}
          </section>
        );
      })}

      <h3 className="block-t">年级课程与成长仪式</h3>
      <p>学校在不同年级安排综合实践活动、军训与毕业年级活动。2022年6月，2022届高三年级举行“青春如歌·逐梦未来”盛典，设三个篇章并向学生赠送宪法、博雅风华系列丛书、校名与校训印章等毕业礼物。开学典礼也固定设置假期实践分享、学生演讲与教师寄语等环节：2025年2月的开学典礼在两校区同步举行，同期更新了学生书写的校牌与选用维瓦尔第《春》的校铃。这类活动与日常课程、校训一起构成校园生活的仪式感。</p>
      <p className="noindent"><Link href="/news/29">2022届高三年级盛典</Link>　｜　<Link href="/news/37">2025年春季开学典礼</Link></p>

      <h3 className="block-t">校史学习的两种记录方式</h3>
      <p>2024年的女性校友事迹专题展，以展板呈现学校历史中的成长故事。同年校庆期间，学生分组采访校友并形成访谈记录。这里保留活动经过，个人事迹与完整访谈请查阅原报道。</p>
      <p className="noindent"><Link href="/news/23">女性校友事迹专题展</Link>　｜　<Link href="/news/20">校庆与访谈活动</Link></p>

      <h3 className="block-t">知识、游戏与动手设计</h3>
      <p>首届数学节将魔方、数独、折纸和数学史展板带入校园；碳中和主题花园设计则把生态知识转化为模型。这些报道提供了观察学科活动与校园文化的不同角度。</p>
      <p className="noindent"><Link href="/news/24">首届数学节</Link>　｜　<Link href="/news/9">碳中和主题花园设计</Link></p>
      <p>校园里的一草一木也进入学生的画面：2023年美术书法工作室的手绘明信片活动，让学生以慎独石、冰心像、玉兰花、教学楼与百草园为题材作画并写下祝福。<Link href="/news/43">手绘明信片活动</Link></p>
      <ReportPhoto article={getNews(24)!} />

      <h3 className="block-t">校史时间轴</h3>
      <p>从1864年的贝满女塾、1926年迁入佟府，到1971年定名北京市第一六六中学，完整沿革已整理为独立页面，并补充了佟府与同福夹道、冰心与贝满女中、知名校友和校园地标。</p>
      <p className="noindent"><Link href="/history">查看校史沿革 &gt;</Link></p>

      <p className="source-note">更多近期线索见<Link href="/sources#wechat">学校公众号标题索引</Link>。未核读正文的推送仅列标题，不据此补写活动详情。</p>
    </PageLayout>
  );
}
