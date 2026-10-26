import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { schoolAccount, schoolMap } from '@/data/sources';

export const metadata = {
  title: '联系信息 - 北京市第一六六中学（非正式网站）',
  description: '政务地图公开地址、电话与经核对的学校微信公众号名称。'
};

export default function ContactPage() {
  return (
    <PageLayout title="联系信息" english="PUBLIC CONTACT INFORMATION">
      <h3 className="block-t">政务地图公开信息</h3>
      <table className="pub">
        <tbody>
          <tr><th scope="row">学校名称</th><td>北京市第一六六中学（灯市口校区）</td></tr>
          <tr><th scope="row">地址</th><td>{schoolMap.address}</td></tr>
          <tr><th scope="row">公开电话</th><td>{schoolMap.telephone}</td></tr>
          <tr><th scope="row">邮政编码</th><td>{schoolMap.postcode}</td></tr>
          <tr><th scope="row">资料时点</th><td>{schoolMap.date}（市教委数据）</td></tr>
        </tbody>
      </table>
      <p className="source-note">原始资料：<a href={schoolMap.url} target="_blank" rel="noreferrer">{schoolMap.publisher} ↗</a>。地址与电话属于该页面的公开记录，来访前请核实当期安排。</p>

      <h3 className="block-t">学校微信公众号</h3>
      <p><strong>搜索名称：</strong>{schoolAccount.name}</p>
      <p><strong>认证主体：</strong>{schoolAccount.certifiedEntity}</p>
      <p><strong>账号简介：</strong>{schoolAccount.introduction}</p>
      <p>以上账号资料于{schoolAccount.checkedAt}通过微信桌面版核对。近期可见推送标题已整理在<Link href="/sources#wechat">公众号动态索引</Link>。</p>

      <h3 className="block-t">来访与校务咨询</h3>
      <p>灯市口校区位于东城区同福夹道。路线可通过政务地图或实时导航查询；考试、活动和家长来访的进校要求，应先向学校核实。</p>
      <p>本站由同学维护，只提供公开资料，不是学校来信受理、报名或投诉渠道。联系学校请使用学校正式公布的方式。</p>
    </PageLayout>
  );
}
