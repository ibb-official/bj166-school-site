import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '资料来源 - 北京市第一六六中学（非正式网站）',
  description: '页面资料公开来源、核验日期与使用边界说明。',
};

export default function SourcesPage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h2>资料来源</h2>
          <p>SOURCES &amp; BOUNDARIES</p>
        </div>
      </div>

      <div className="main">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">首页</Link> &gt; 资料来源
          </div>
          <div className="content-card">
            <div className="source-note">
              本页列出页面整理时访问的公开来源。链接内容的发布日期、文字和可访问性可能变化；本站只做摘要，不代表任何来源的官方发布。
            </div>

            <h3 className="block-t">学校基本信息</h3>
            <ul>
              <li style={{ padding: '6px 0', borderBottom: '1px dashed #eee' }}>
                <a href="https://map.beijing.gov.cn/place?categoryId=zx&amp;placeId=684a86b0f8f52a79c0ac892c" target="_blank" rel="noreferrer" style={{ color: '#155b96', fontWeight: 'bold' }}>
                  北京市政务地图：北京市第一六六中学（灯市口校区）
                </a>
                ：用于核对学校正式名称、公开地址、邮编、电话、完全中学类型和 1864 年创办日期。
              </li>
              <li style={{ padding: '6px 0', borderBottom: '1px dashed #eee' }}>
                <a href="https://www.bjdch.gov.cn/ztzl/bmyjsgkzl/bmjsgkzl/2024njs/qzf2024js/202507/P020250724571914169011.pdf" target="_blank" rel="noreferrer" style={{ color: '#155b96', fontWeight: 'bold' }}>
                  东城区人民政府 2024 年度决算说明
                </a>
                ：用于核对学校性质、两个校址、2024 年末学生人数和教职工编制口径。
              </li>
            </ul>

            <h3 className="block-t">校史与文化</h3>
            <ul>
              <li style={{ padding: '6px 0', borderBottom: '1px dashed #eee' }}>
                <a href="https://m.bjnews.com.cn/detail/168450907614302.html" target="_blank" rel="noreferrer" style={{ color: '#155b96', fontWeight: 'bold' }}>
                  东教印象《跨越三个世纪的北京市第一六六中学》
                </a>
                ：用于校史时间线、贝满女塾前身和“跨越三个世纪”的公开叙述。
              </li>
              <li style={{ padding: '6px 0', borderBottom: '1px dashed #eee' }}>
                <a href="https://www.sohu.com/a/799656239_163278" target="_blank" rel="noreferrer" style={{ color: '#155b96', fontWeight: 'bold' }}>
                  北京日报相关报道转载
                </a>
                ：用于“一六六蓝”作为校庆视觉辅助色的公开线索；本站据此调整色系，不把它当作完整视觉识别规范。
              </li>
            </ul>

            <h3 className="block-t">近期公开报道</h3>
            <ul>
              <li style={{ padding: '4px 0' }}><a href="https://www.cspa-bs.com/nd.jsp?_ngc=-1&amp;fromColId=-1&amp;id=3731" target="_blank" rel="noreferrer" style={{ color: '#155b96' }}>首都教育转载：中小学生走进清华课堂</a></li>
              <li style={{ padding: '4px 0' }}><a href="https://www.bjnews.com.cn/detail/1787108610019978.html" target="_blank" rel="noreferrer" style={{ color: '#155b96' }}>车辆模型教育竞赛报道</a></li>
              <li style={{ padding: '4px 0' }}><a href="https://www.bjnews.com.cn/detail/1782725964019667.html" target="_blank" rel="noreferrer" style={{ color: '#155b96' }}>“繁星计划”科技史探究实践交流活动</a></li>
              <li style={{ padding: '4px 0' }}><a href="https://www.bjnews.com.cn/detail/1783433554019999.html" target="_blank" rel="noreferrer" style={{ color: '#155b96' }}>生命科学实验班公开报道</a></li>
              <li style={{ padding: '4px 0' }}><a href="https://www.bjnews.com.cn/detail/1788789665019559.html" target="_blank" rel="noreferrer" style={{ color: '#155b96' }}>教育共同体成立相关报道</a></li>
              <li style={{ padding: '4px 0' }}><a href="https://www.bjnews.com.cn/detail/1790085938019654.html" target="_blank" rel="noreferrer" style={{ color: '#155b96' }}>东城区学生艺术节戏剧展演报道</a></li>
              <li style={{ padding: '4px 0' }}><a href="https://www.bjnews.com.cn/detail/1776259162019623.html" target="_blank" rel="noreferrer" style={{ color: '#155b96' }}>国家安全教育主题报道</a></li>
            </ul>

            <h3 className="block-t">公众号与校徽说明</h3>
            <p>
              公开转载文章注明内容转自“北京市第一六六中学”微信公众号，但本次整理没有找到可核验的公众号主页 URL、账号 ID 或官方二维码，因此页面不放未经确认的二维码或账号信息。
            </p>
            <p>
              百度百科关联的百度图片结果中可见蓝银色圆形校徽图样，本站已将公开图片作为页首图样。它仅用于非官方网站的资料展示，不代表学校授权；如用于正式校务、招生或品牌宣传，应先取得学校授权的高清原图。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
