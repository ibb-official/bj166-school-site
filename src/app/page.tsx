import Link from 'next/link';
import Carousel from '@/components/Carousel';
import NewsLinks from '@/components/NewsLinks';
import AccountUpdates from '@/components/AccountUpdates';
import { contentCheckedAt, getNews, photoNews, sortedNews } from '@/data/news';
import { accountUpdates, schoolMap } from '@/data/sources';

export default function HomePage() {
  const lead = sortedNews[0];
  const biology = getNews(4)!;
  const publicFiles = sortedNews.filter((item) => item.category === '信息公示');
  const featuredPhotos = [...photoNews].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8);
  return (
    <>
      <div className="notice-bar">
        <span className="label">资料更新</span>
        <div className="notice-links"><Link href="/sources">公开资料核对至 {contentCheckedAt}</Link><Link href="/wechat">学校公众号历史推送目录已更新</Link></div>
      </div>
      <main className="main">
        <div className="wrap">
          <div className="focus-row">
            <Carousel />
            <section className="headline">
              <div className="eyebrow">近期报道 · {lead.date}</div>
              <h2><Link href={`/news/${lead.id}`}>{lead.title}</Link></h2>
              <p className="sub">{lead.summary} <Link href={`/news/${lead.id}`}>[查看摘要]</Link></p>
              <NewsLinks items={sortedNews.slice(1, 6)} />
            </section>
          </div>

          <div className="cols">
            <section className="col col-notice">
              <div className="sec-title"><h3>公开文件</h3><Link className="more" href="/disclosure">目录&gt;&gt;</Link></div>
              <NewsLinks items={publicFiles} />
              <div className="sec-title section-gap"><h3>资料索引</h3></div>
              <ul className="news-list">
                <li><span className="t"><Link href="/about">学校基本情况与办学特色</Link></span></li>
                <li><span className="t"><Link href="/culture">校史、校训与校园文化</Link></span></li>
                <li><span className="t"><Link href="/policy">教育方针与课程政策</Link></span></li>
                <li><span className="t"><Link href="/contact">本站说明与资料维护</Link></span></li>
              </ul>
              <p className="small-note">文件按原发布年度归档。招生安排请查当年官方公告。</p>
            </section>

            <section className="col col-news">
              <div className="sec-title"><h3>学校动态</h3><Link className="more" href="/news">更多&gt;&gt;</Link></div>
              <div className="pic-news">
                <Link href="/news/4">
                  <img src={biology.image!.src} alt={biology.image!.alt} />
                </Link>
                <div className="txt"><h4><Link href="/news/4">生命科学实验班的学习现场</Link></h4><p>大学课堂、实验操作与湿地调查，走近一届生科班的学习经历。</p></div>
              </div>
              <NewsLinks items={sortedNews.filter((item) => item.category !== '信息公示').slice(0, 6)} />
              <p className="small-note">上图来源：东教印象毕业班级专题。</p>
            </section>

            <aside className="col-side">
              <div className="side-box">
                <div className="hd">快速通道</div>
                <div className="bd quick-links"><Link href="/photos">校园影像</Link><Link href="/wechat">学校公众号档案</Link><Link href="/news?category=科学教育">科学教育报道</Link><Link href="/news?category=校园文化">文化艺术活动</Link><Link href="/policy">政策文件选读</Link></div>
              </div>
              <div className="side-box">
                <div className="hd">学校信息</div>
                <div className="bd contact-info">
                  <p><strong>校训：</strong>敬业乐群、求实进取</p>
                  <p><strong>类型：</strong>完全中学</p>
                  <p><strong>创办：</strong>1864年</p>
                  <a className="small-note" href={schoolMap.url} target="_blank" rel="noreferrer">学校基本类型据政务地图（2025-06-12）</a>
                </div>
              </div>
            </aside>
          </div>

          <section className="topic-section">
            <div className="sec-title"><h3>专题资料</h3><Link className="more" href="/news">全部报道&gt;&gt;</Link></div>
            <div className="topic-grid">
              {[
                { title: '书香与学科', ids: [19, 24, 16] },
                { title: '音乐与舞台', ids: [18, 21, 22] },
                { title: '校史与校牌', ids: [20, 17, 25] },
                { title: '科学与实践', ids: [1, 3, 9] }
              ].map((topic) => (
                <div className="topic-card" key={topic.title}>
                  <h4>{topic.title}</h4>
                  <ul>{topic.ids.map((id) => {
                    const item = getNews(id)!;
                    return <li key={id}><Link href={`/news/${id}`}>{item.title}</Link><time dateTime={item.date}>{item.date}</time></li>;
                  })}</ul>
                </div>
              ))}
            </div>
          </section>

          <section className="account-section" id="wechat">
            <div className="sec-title"><h3>公众号动态</h3><Link className="more" href="/wechat">按月查阅{accountUpdates.length}条标题&gt;&gt;</Link></div>
            <AccountUpdates compact />
          </section>

          <section className="pic-row">
            <div className="sec-title"><h3>图片报道</h3><Link className="more" href="/photos">校园影像&gt;&gt;</Link></div>
            <div className="items">
              {featuredPhotos.map((item) => (
                <div className="item" key={item.id}>
                  <Link href={`/news/${item.id}`}>
                    <img src={item.image!.src} alt={item.image!.alt} loading="lazy" />
                    <p>{item.title}</p>
                  </Link>
                  <div className="photo-credit">{item.date} · {item.image!.credit}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="friendlinks">
            <strong>公共服务</strong>
            <a href="https://jw.beijing.gov.cn/" target="_blank" rel="noreferrer">北京市教育委员会</a>
            <a href="https://www.bjdch.gov.cn/" target="_blank" rel="noreferrer">东城区人民政府</a>
            <a href="https://basic.smartedu.cn/" target="_blank" rel="noreferrer">国家中小学智慧教育平台</a>
            <a href="https://www.bjeea.cn/" target="_blank" rel="noreferrer">北京教育考试院</a>
          </div>
        </div>
      </main>
    </>
  );
}
