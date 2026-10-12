import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '教育方针 - 北京市第一六六中学（非正式网站）',
  description: '全面贯彻党的教育方针，坚持五育并举，落实立德树人根本任务。',
};

export default function PolicyPage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h2>教育方针</h2>
          <p>EDUCATION POLICY</p>
        </div>
      </div>

      <div className="main">
        <div className="wrap">
          <div className="crumb">
            当前位置：<Link href="/">首页</Link> &gt; 教育方针
          </div>

          <div className="page-cols">
            <div className="page-main">
              <h3 className="block-t">党的教育方针</h3>
              <p style={{ fontSize: '16px', color: '#155b96', fontWeight: 'bold' }}>
                教育必须为社会主义现代化建设服务、为人民服务，必须与生产劳动和社会实践相结合，培养德智体美劳全面发展的社会主义建设者和接班人。
              </p>
              <p>
                学校全面贯彻党的教育方针，落实立德树人根本任务，把思想政治教育贯穿教育教学全过程，努力办好人民满意的教育。
              </p>

              <h3 className="block-t">坚持五育并举 促进学生全面发展</h3>
              <p>
                <strong>——以德为先。</strong>学校构建“课程育人、文化育人、活动育人、实践育人、管理育人、协同育人”六大育人体系，深入开展理想信念教育、社会主义核心价值观教育、中华优秀传统文化教育和心理健康教育。每学期举行开学典礼、升旗仪式、主题班会、成人仪式等仪式教育活动，让学生在庄严仪式中涵养品格。
              </p>
              <p>
                <strong>——以智启真。</strong>严格落实国家课程方案，开齐开足开好国家规定课程。深入推进课堂教学改革，倡导启发式、探究式、合作式教学，聚焦学科核心素养培育，切实提高课堂教学质量。
              </p>
              <p>
                <strong>——以体强身。</strong>坚持健康第一的教育理念，开足上好体育课，组织丰富的体育活动和实践，让学生在运动中形成健康习惯、规则意识与合作精神。
              </p>
              <p>
                <strong>——以美润心。</strong>开齐开足音乐、美术课程，组建合唱团、舞蹈团、书画社等艺术社团，每年举办校园艺术节、新年音乐会，提升学生审美和人文素养。
              </p>
              <p>
                <strong>——以劳立行。</strong>落实劳动教育必修课，建立校内劳动教育基地和班级劳动岗，组织学生参与校园保洁、绿化养护、社区志愿服务等劳动实践，引导学生树立正确的劳动观念。
              </p>

              <h3 className="block-t">落实“双减”政策 提升育人质量</h3>
              <p>
                “双减”涉及作业、课后服务、考试管理和睡眠、手机、读物、体质等多个方面。本站只提供政策名称和公开教育报道的索引，不填写学校具体作息、课程数量或班级执行方案；具体安排应以学校最新通知和东城区教育部门要求为准。
              </p>

              <h3 className="block-t">聚焦课程改革 培育核心素养</h3>
              <p>
                学校深入落实《义务教育课程方案和课程标准（2022年版）》及普通高中课程方案要求，构建“基础课程+拓展课程+实践课程”三级课程体系。基础课程对标国家课程标准，夯实学科基础；拓展课程开设人文、科技、艺术、体育四大门类校本选修课；实践课程依托研究性学习、社会实践、志愿服务等载体，培养学生创新精神和实践能力。
              </p>

              <h3 className="block-t">政策文件选编</h3>
              <table className="pub">
                <tbody>
                  <tr><th style={{ width: '70%' }}>文件名称</th><th>发布年份</th></tr>
                  <tr><td>《中华人民共和国教育法》（2021年修正）</td><td>2021</td></tr>
                  <tr><td>《中华人民共和国义务教育法》（2018年修正）</td><td>2018</td></tr>
                  <tr><td>《中华人民共和国未成年人保护法》（2020年修订）</td><td>2020</td></tr>
                  <tr><td>《中华人民共和国家庭教育促进法》</td><td>2021</td></tr>
                  <tr><td>《深化新时代教育评价改革总体方案》</td><td>2020</td></tr>
                  <tr><td>《关于进一步减轻义务教育阶段学生作业负担和校外培训负担的意见》</td><td>2021</td></tr>
                  <tr><td>《义务教育课程方案和课程标准（2022年版）》</td><td>2022</td></tr>
                  <tr><td>《教育强国建设规划纲要（2024—2035年）》</td><td>2025</td></tr>
                </tbody>
              </table>
              <p style={{ color: '#999', fontSize: '12px' }}>注：以上文件内容请以官方发布文本为准，本页仅作学习指引。</p>
            </div>

            <div className="page-side">
              <div className="side-box">
                <div className="hd">办学理念</div>
                <div className="bd contact-info">
                  <p><strong>校训：</strong>敬业乐群、求实进取</p>
                  <p><strong>公开报道线索：</strong>科技、人文、健康、艺术教育相互贯通</p>
                  <p><strong>页面边界：</strong>不代替学校发布招生、收费或作息通知</p>
                </div>
              </div>
              <div className="side-box">
                <div className="hd">相关栏目</div>
                <div className="bd">
                  <ul className="news-list">
                    <li><span className="t"><Link href="/news/3">“繁星计划”科技史探究实践</Link></span></li>
                    <li><span className="t"><Link href="/news/4">生命科学实验班实践</Link></span></li>
                    <li><span className="t"><Link href="/news/6">戏剧艺术节展演</Link></span></li>
                    <li><span className="t"><Link href="/news/7">国家安全教育校园实践</Link></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
