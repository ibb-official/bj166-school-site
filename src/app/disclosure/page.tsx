import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '信息公示 - 北京市第一六六中学（非正式网站）',
  description: '公开信息核验范围、招生与校务信息提示、公开资料目录。',
};

export default function DisclosurePage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h2>信息公示</h2>
          <p>INFORMATION DISCLOSURE</p>
        </div>
      </div>

      <div className="main">
        <div className="wrap">
          <div className="crumb">
            当前位置：<Link href="/">首页</Link> &gt; 信息公示
          </div>

          <div className="page-cols">
            <div className="page-main">
              <div className="source-note">
                本页是“信息公示”栏目，但本站没有权力发布学校收费、招生、作息或食谱。为避免误导，原压缩包中的虚构公示已删除，只保留公开资料索引和核验提示。
              </div>

              <h3 className="block-t">公开信息核验范围</h3>
              <p>
                北京市第一六六中学的收费项目、招生计划、校服采购、食堂安排和学生资助信息，都可能随学年、政策和校区变化。查询此类事项时，应直接使用学校及北京市、东城区教育部门的最新官方渠道。
              </p>
              <table className="pub">
                <tbody>
                  <tr><th>信息类型</th><th style={{ width: '28%' }}>本站处理</th><th style={{ width: '34%' }}>应查渠道</th></tr>
                  <tr><td>收费、资助</td><td>不填写金额</td><td>学校公示栏、东城区教育部门和财政/发改部门最新文件</td></tr>
                  <tr><td>招生、录取</td><td>不填写年度计划</td><td>北京教育考试院、东城区教育部门和学校最新公告</td></tr>
                  <tr><td>作息、放假、体测</td><td>不制作通知</td><td>学校向学生、家长发布的正式通知</td></tr>
                  <tr><td>食谱、校服、教辅</td><td>不填写虚构清单</td><td>校内公示及学校正式采购/选用信息</td></tr>
                </tbody>
              </table>
              <p className="noindent" style={{ textIndent: 0, color: '#999', fontSize: '12px' }}>
                本站不收集学生、家长或教师个人信息，也不提供报名入口。任何疑似仿冒学校的缴费、报名或问卷链接都应先通过官方渠道核验。
              </p>

              <h3 className="block-t">招生与校务信息提示</h3>
              <p>
                <strong>初中和高中招生：</strong>本站不发布招生范围、计划、录取分数或报名二维码；这些信息具有明确年度时效，必须以北京教育考试院、东城区教育部门和学校官方公告为准。
              </p>
              <p>
                <strong>当前可核对的基本信息：</strong>政务地图将学校标为完全中学，灯市口校区办公地址为东城区同福夹道3号，公开电话为010-65253226，邮编100006。
              </p>
              <p>
                <strong>账号线索：</strong>公开报道注明内容转自“北京市第一六六中学”微信公众号，但未给出可核验的账号主页链接；本站不制作二维码、不代办报名。
              </p>

              <h3 className="block-t">公开资料目录</h3>
              <table className="pub">
                <tbody>
                  <tr><th style={{ width: '6%' }}>序号</th><th style={{ width: '44%' }}>资料</th><th style={{ width: '25%' }}>来源</th><th>用途</th></tr>
                  <tr><td>1</td><td>地址、邮编、电话、创办日期</td><td>北京12345政务地图</td><td>核对基本信息</td></tr>
                  <tr><td>2</td><td>两个校址及年度统计</td><td>东城区政府决算说明</td><td>标注统计时点</td></tr>
                  <tr><td>3</td><td>校史、校训、办学特色</td><td>东教印象公开报道</td><td>文化资料摘要</td></tr>
                  <tr><td>4</td><td>科学、艺术、协同育人动态</td><td>东教印象/公开转载</td><td>新闻索引</td></tr>
                  <tr><td>5</td><td>政策文件名称</td><td>国家和北京市官方发布</td><td>学习指引</td></tr>
                </tbody>
              </table>

              <h3 className="block-t">近期公开报道索引</h3>
              <table className="pub">
                <tbody>
                  <tr><th style={{ width: '25%' }}>时间</th><th>报道主题</th></tr>
                  <tr><td>2026-09-23</td><td><Link href="/news/6">学生艺术节戏剧展演</Link></td></tr>
                  <tr><td>2026-09-07</td><td><Link href="/news/5">教育共同体成立</Link></td></tr>
                  <tr><td>2026-08-19</td><td><Link href="/news/2">车辆模型教育竞赛</Link></td></tr>
                  <tr><td>2026-07-07</td><td><Link href="/news/4">生命科学实验班实践</Link></td></tr>
                </tbody>
              </table>

              <h3 className="block-t">监督与反馈渠道</h3>
              <p className="noindent" style={{ textIndent: 0 }}>
                本站没有校长信箱、报名入口或在线投诉功能。涉及学校事务，请通过学校官方渠道或北京市、东城区政务服务平台核实；本站仅提供公开资料来源链接。
              </p>
            </div>

            <div className="page-side">
              <div className="side-box">
                <div className="hd">近期报道</div>
                <div className="bd">
                  <ul className="news-list">
                    <li className="top"><span className="t"><Link href="/news/6">学生艺术节戏剧展演</Link></span><span className="d">09-23</span></li>
                    <li><span className="t"><Link href="/news/5">教育共同体成立</Link></span><span className="d">09-07</span></li>
                    <li><span className="t"><Link href="/news/2">车辆模型教育竞赛</Link></span><span className="d">08-19</span></li>
                    <li><span className="t"><Link href="/news/4">生命科学实验班实践</Link></span><span className="d">07-07</span></li>
                  </ul>
                </div>
              </div>
              <div className="side-box">
                <div className="hd">阳光政务</div>
                <div className="bd quick-links">
                  <Link href="/contact">联系方式说明</Link>
                  <Link href="/about">机构设置</Link>
                  <Link href="/policy">政策文件</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
