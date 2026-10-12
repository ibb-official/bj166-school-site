import React from 'react';
import Link from 'next/link';
import Carousel from '@/components/Carousel';

export default function HomePage() {
  return (
    <>
      <div className="notice-bar">
        <span className="label">公开资料</span>
        <div style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap', verticalAlign: 'middle', width: '920px' }}>
          <Link href="/news/1" style={{ marginRight: '30px', color: '#155b96' }}>公开报道：走进清华课堂，贯通生命赋能育人</Link>
          <Link href="/news/6" style={{ marginRight: '30px', color: '#155b96' }}>公开报道：一六六中学剧目参加东城区学生艺术节展演</Link>
          <Link href="/news/2" style={{ marginRight: '30px', color: '#155b96' }}>公开报道：一六六中学学子在车辆模型竞赛中获奖</Link>
        </div>
      </div>

      <div className="main">
        <div className="wrap">
          {/* 轮播 + 头条 */}
          <div className="focus-row">
            <Carousel />

            <div className="headline">
              <h2>
                <Link href="/news/1">走进清华课堂<br />贯通生命赋能育人</Link>
              </h2>
              <p className="sub">
                公开报道显示，一六六中学部分初三学生在新学期走进清华大学，旁听《疫苗的力量》通识课，并在真实科学场景中拓展学习……
                <Link href="/news/1">[详细]</Link>
              </p>
              <ul className="news-list">
                <li className="top">
                  <span className="t">
                    <Link href="/news/6">一六六中学剧目参加东城区学生艺术节戏剧展演</Link>
                  </span>
                  <span className="d">09-23</span>
                </li>
                <li>
                  <span className="t">
                    <Link href="/news/5">公开报道：北京市第一六六中学教育共同体成立</Link>
                  </span>
                  <span className="d">09-07</span>
                </li>
                <li>
                  <span className="t">
                    <Link href="/news/2">车辆模型竞赛：在动手实践中提升科学素养</Link>
                  </span>
                  <span className="d">08-19</span>
                </li>
                <li>
                  <span className="t">
                    <Link href="/news/3">繁星计划：科技史融入前沿科技探究实践</Link>
                  </span>
                  <span className="d">06-29</span>
                </li>
                <li>
                  <span className="t">
                    <Link href="/news/4">生命科学实验班：从课堂走向真实科学现场</Link>
                  </span>
                  <span className="d">07-07</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 三栏 */}
          <div className="cols">
            {/* 资料索引 */}
            <div className="col col-notice">
              <div className="sec-title">
                <h3>资料索引</h3>
                <Link className="more" href="/disclosure">说明&gt;&gt;</Link>
              </div>
              <ul className="news-list">
                <li className="top"><span className="t"><Link href="/about">学校地址、校区与公开统计口径</Link></span><span className="d">2025-06</span></li>
                <li><span className="t"><Link href="/culture">校史沿革与公开校训资料</Link></span><span className="d">长期</span></li>
                <li><span className="t"><Link href="/policy">党的教育方针与政策索引</Link></span><span className="d">长期</span></li>
                <li><span className="t"><Link href="/news">近期公开报道索引</Link></span><span className="d">2026</span></li>
                <li><span className="t"><Link href="/disclosure">数据来源、核验日期与使用边界</Link></span><span className="d">说明</span></li>
                <li><span className="t"><Link href="/contact">公开地址与政务地图电话</Link></span><span className="d">2025-06</span></li>
                <li><span className="t"><Link href="/sources">资料来源与核验边界</Link></span><span className="d">公开链接</span></li>
                <li><span className="t"><Link href="/news/8">校园文化与历史报道</Link></span><span className="d">2023</span></li>
              </ul>
            </div>

            {/* 学校动态 */}
            <div className="col col-news">
              <div className="sec-title">
                <h3>学校动态</h3>
                <Link className="more" href="/news">更多&gt;&gt;</Link>
              </div>
              <div className="pic-news">
                <Link href="/news/4"><img src="/images/research.jpg" alt="生命科学教育配图（示意）" /></Link>
                <div className="txt">
                  <h4><Link href="/news/4">从科学现场走向卓越成长：生命科学实验班</Link></h4>
                  <p>公开报道介绍，学校将清华大学课堂、实验室参访、湿地探究和校内科技俱乐部等实践串联起来，帮助学生把兴趣推进为能力。</p>
                </div>
              </div>
              <ul className="news-list">
                <li><span className="t"><Link href="/news/6">【艺术教育】剧目参加东城区学生艺术节戏剧展演</Link></span><span className="d">09-23</span></li>
                <li><span className="t"><Link href="/news/1">【科学教育】部分初三学生走进清华课堂</Link></span><span className="d">09-18</span></li>
                <li><span className="t"><Link href="/news/5">【协同育人】教育共同体成立</Link></span><span className="d">09-07</span></li>
                <li><span className="t"><Link href="/news/2">【科技体育】车辆模型竞赛取得成绩</Link></span><span className="d">08-19</span></li>
                <li><span className="t"><Link href="/news/3">【科学探究】“繁星计划”交流活动</Link></span><span className="d">06-29</span></li>
                <li><span className="t"><Link href="/news/4">【生命教育】生命科学实验班实践</Link></span><span className="d">07-07</span></li>
              </ul>
            </div>

            {/* 右侧栏 */}
            <div className="col-side">
              <div className="side-box">
                <div className="hd">快速通道</div>
                <div className="bd quick-links">
                  <Link href="/contact">联系方式说明</Link>
                  <Link href="/disclosure">校务公开</Link>
                  <Link href="/disclosure">招生信息</Link>
                  <Link href="/policy">政策法规</Link>
                </div>
              </div>
              <div className="side-box">
                <div className="hd">联系方式</div>
                <div className="bd contact-info">
                  <p><strong>地址：</strong>北京市东城区同福夹道3号（政务地图公开地址）</p>
                  <p><strong>电话：</strong>010-65253226（政务地图公开）</p>
                  <p><strong>邮编：</strong>100006</p>
                </div>
              </div>
              <div className="side-box">
                <div className="hd">办学理念</div>
                <div className="bd contact-info">
                  <p><strong>校训：</strong>敬业乐群、求实进取</p>
                  <p><strong>办学类型：</strong>完全中学</p>
                  <p><strong>创办日期：</strong>1864年（政务地图口径）</p>
                  <p><strong>身份说明：</strong>本站为同学协作的非官方网站</p>
                </div>
              </div>
            </div>
          </div>

          <div className="source-note">
            资料说明：站内配图来自压缩包原始素材，原 README 标注为 AI 生成示意图；新闻文字为公开报道摘要。请通过“资料来源”页访问原文，不要把本站视作学校官方账号。
          </div>

          {/* 图片新闻 */}
          <div className="pic-row">
            <div className="sec-title">
              <h3>图片新闻</h3>
              <Link className="more" href="/news">更多&gt;&gt;</Link>
            </div>
            <div className="items">
              <div className="item"><Link href="/news/1"><img src="/images/research.jpg" alt="" /><p>走进清华课堂（示意）</p></Link></div>
              <div className="item"><Link href="/news/2"><img src="/images/classroom.jpg" alt="" /><p>车辆模型竞赛（示意）</p></Link></div>
              <div className="item"><Link href="/news/3"><img src="/images/library.jpg" alt="" /><p>科技探究活动（示意）</p></Link></div>
              <div className="item"><Link href="/news/6"><img src="/images/teachers-day.jpg" alt="" /><p>戏剧艺术节展演（示意）</p></Link></div>
              <div className="item"><Link href="/news/8"><img src="/images/gate.jpg" alt="" /><p>百年校史与校园文化</p></Link></div>
            </div>
          </div>

          {/* 友情链接 */}
          <div className="friendlinks">
            <strong>友情链接</strong>
            <a href="https://jw.beijing.gov.cn/" target="_blank" rel="noreferrer">北京市教育委员会</a>
            <a href="https://www.bjdch.gov.cn/" target="_blank" rel="noreferrer">东城区人民政府</a>
            <a href="https://jw.beijing.gov.cn/" target="_blank" rel="noreferrer">东城区教育部门入口</a>
            <a href="https://basic.smartedu.cn/" target="_blank" rel="noreferrer">国家中小学智慧教育平台</a>
            <a href="https://www.neea.edu.cn/" target="_blank" rel="noreferrer">中国教育考试网</a>
            <a href="https://www.bjeea.cn/" target="_blank" rel="noreferrer">北京教育考试院</a>
          </div>
        </div>
      </div>
    </>
  );
}
