import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '校园文化 - 北京市第一六六中学（非正式网站）',
  description: '校史沿革、一训三风、校园风光与品牌文化活动。',
};

export default function CulturePage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h2>校园文化</h2>
          <p>CAMPUS CULTURE</p>
        </div>
      </div>

      <div className="main">
        <div className="wrap">
          <div className="crumb">
            当前位置：<Link href="/">首页</Link> &gt; 校园文化
          </div>

          <div className="page-cols">
            <div className="page-main">
              <h3 className="block-t">校史沿革</h3>
              <ul className="timeline">
                <li><strong>1864年</strong>学校前身贝满女塾创办，成为北京近代女子教育的重要起点。</li>
                <li><strong>1895年</strong>学校开设四年制女子中学，后逐步发展为完整的女子教育体系。</li>
                <li><strong>1952年</strong>学校更名为北京市第十二女子中学。</li>
                <li><strong>1968年</strong>北京市第十二女子中学更名为红卫中学。</li>
                <li><strong>1971年</strong>学校定名为北京市第一六六中学，校名沿用至今。</li>
                <li><strong>2003年</strong>东四六条校址的原128中学并入学校，成为东校区；学校形成多校址办学格局。</li>
                <li><strong>2022年</strong>学校开始使用在校生题写的校牌，并定期更换不同学生书写的校牌。</li>
                <li><strong>2024年</strong>学校迎来建校160周年，公开报道提到校庆视觉使用“一六六蓝”。</li>
              </ul>
              <p className="source-note">
                校史依据东教印象公开报道、北京市第一六六中学公开资料和公开百科的交叉核对；详情请以学校及东城区教育部门发布的正式校史资料为准。
              </p>

              <h3 className="block-t">一训三风</h3>
              <p><strong>校训：</strong>敬业乐群、求实进取——公开教育资料中反复出现的学校文化表述。</p>
              <p><strong>文化线索：</strong>百年校史、博雅教育、科技与人文融合。</p>
              <p><strong>公开报道中的实践：</strong>生命科学实验班、金鹏科技团、管乐与戏剧教育等。</p>
              <p><strong>使用边界：</strong>不将非官方整理页包装成学校官方宣传材料。</p>

              <h3 className="block-t">校园风光</h3>
              <div className="center-pic"><img src="/images/gate.jpg" alt="校门" /><span>灯市口大街校门</span></div>
              <div className="center-pic"><img src="/images/campus.jpg" alt="校园全景" /><span>明德楼与运动场</span></div>
              <div className="center-pic"><img src="/images/library.jpg" alt="图书馆" /><span>图书馆阅览室</span></div>

              <h3 className="block-t">品牌文化活动</h3>
              <p>
                公开报道呈现的校园文化活动包括生命科学实践、科技史探究、车辆模型竞赛、戏剧展演与高校通识课程等。它们共同指向“做中学”、跨学科实践和学生综合素养，而不是一份固定不变的活动清单。
              </p>
              <p>
                社团数量、活动安排和获奖情况会随学年变化，本页不自行填写未经核实的数字；需要报名或查询具体活动时，请以学校官方渠道发布的信息为准。
              </p>
            </div>

            <div className="page-side">
              <div className="side-box">
                <div className="hd">文化活动动态</div>
                <div className="bd">
                  <ul className="news-list">
                    <li className="top"><span className="t"><Link href="/news/6">戏剧艺术节展演</Link></span><span className="d">09-23</span></li>
                    <li><span className="t"><Link href="/news/2">车辆模型竞赛</Link></span><span className="d">08-19</span></li>
                    <li><span className="t"><Link href="/news/1">清华课堂与生命科学</Link></span><span className="d">09-18</span></li>
                    <li><span className="t"><Link href="/news/3">科技史探究实践</Link></span><span className="d">06-29</span></li>
                  </ul>
                </div>
              </div>
              <div className="side-box">
                <div className="hd">校训</div>
                <div className="bd" style={{ textAlign: 'center', padding: '18px 10px' }}>
                  <p style={{ fontFamily: '"KaiTi", "STKaiti", "楷体", serif', fontSize: '26px', color: '#155b96', letterSpacing: '6px', lineHeight: 2 }}>
                    敬业 乐群<br />求实 进取
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
