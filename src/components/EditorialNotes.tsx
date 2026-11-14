import Link from '@/components/Link';
import { contentCheckedAt } from '@/data/news';

/** 右侧栏「收录与编辑说明」：把站点的内容规则压缩成四条，供读者自查 */
export default function EditorialNotes() {
  return (
    <div className="side-box">
      <div className="hd">收录与编辑说明</div>
      <div className="bd">
        <ul className="rule-list">
          <li>只整理有出处的事实，不补写活动过程、人物评价与获奖感言。</li>
          <li>不收录招生、招聘、个人表彰与升学成绩类推送。</li>
          <li>不列师生姓名、联系方式与具体地址。</li>
          <li>公众号链接失效后，改为“账号＋标题＋推送日期”检索指引。</li>
        </ul>
        <p className="small-note">
          资料核对至 {contentCheckedAt} · 详见<Link href="/sources">报道来源清单</Link>
        </p>
      </div>
    </div>
  );
}
