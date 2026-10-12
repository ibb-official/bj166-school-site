import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '联系我们 - 北京市第一六六中学（非正式网站）',
  description: '公开联系方式、交通指引与使用边界说明。',
};

export default function ContactPage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h2>联系我们</h2>
          <p>CONTACT US</p>
        </div>
      </div>

      <div className="main">
        <div className="wrap">
          <div className="crumb">
            当前位置：<Link href="/">首页</Link> &gt; 联系我们
          </div>

          <div className="page-cols">
            <div className="page-main">
              <h3 className="block-t">联系方式</h3>
              <table className="pub">
                <tbody>
                  <tr><th style={{ width: '26%' }}>项目</th><th>内容</th></tr>
                  <tr><td>灯市口校区地址</td><td>北京市东城区同福夹道3号（市教委政务地图，2025-06-12）</td></tr>
                  <tr><td>邮政编码</td><td>100006</td></tr>
                  <tr><td>公开电话</td><td>010-65253226（市教委政务地图，2025-06-12）</td></tr>
                  <tr><td>其他校址</td><td>毕业校区位于东四六条（东城区政府决算说明）</td></tr>
                  <tr><td>校长信箱</td><td>本站不代收、不转发来信</td></tr>
                  <tr><td>邮箱、传真</td><td>未找到可确认的当前公开信息，不在本站填写</td></tr>
                </tbody>
              </table>

              <h3 className="block-t">交通指引</h3>
              <p><strong>位置：</strong>灯市口校区位于东城区灯市口—同福夹道片区，具体路线请使用实时地图导航。</p>
              <p><strong>温馨提示：</strong>本站不代表学校发布访客安排；来访、考试或活动期间的进校要求，请先向学校官方渠道核实。</p>

              <h3 className="block-t">来访接待</h3>
              <p>本站不发布家长接待日、寒暑假值班和校长信箱的具体安排；这些信息可能随学期调整，应以学校正式通知为准。</p>

              <h3 className="block-t">校长信箱使用说明</h3>
              <p>本站没有校长信箱功能，也不会收集姓名、电话、身份证号或学生信息。需要联系学校时，请以北京市政务地图、东城区教育部门或学校官方渠道公布的信息为准。</p>
              <p className="source-note">
                基本信息来源：<a href="https://map.beijing.gov.cn/place?categoryId=zx&amp;placeId=684a86b0f8f52a79c0ac892c" target="_blank" rel="noreferrer">北京12345服务导图</a>；校区信息参见 <Link href="/sources">资料来源清单</Link>。
              </p>
            </div>

            <div className="page-side">
              <div className="side-box">
                <div className="hd">快速通道</div>
                <div className="bd quick-links">
                  <Link href="/disclosure">联系边界与核验说明</Link>
                  <Link href="/disclosure">校务公开</Link>
                  <Link href="/about">学校概况</Link>
                </div>
              </div>
              <div className="side-box">
                <div className="hd">校园一景</div>
                <div className="bd">
                  <Link href="/culture"><img src="/images/campus.jpg" alt="校园" style={{ border: '1px solid #ddd', padding: '3px' }} /></Link>
                  <p style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '6px' }}>明德楼与运动场</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
