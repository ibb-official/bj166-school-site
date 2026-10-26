import { accountUpdates, schoolAccount } from '@/data/sources';

export default function AccountUpdates({ compact = false }: { compact?: boolean }) {
  const entries = compact ? accountUpdates.slice(0, 4) : accountUpdates;
  return (
    <div className="account-updates">
      <div className="account-name">{schoolAccount.name}<span className="source-tag">已核对认证主体</span></div>
      <p className="account-description">
        认证主体：{schoolAccount.certifiedEntity}。在微信中搜索上方账号名称可查看原文。
      </p>
      <ul className="account-list">
        {entries.map((item) => (
          <li key={item.title}>
            <span>{item.title}</span>
            <span className="account-date">{item.displayDate}</span>
          </li>
        ))}
      </ul>
      <p className="account-note">
        {schoolAccount.checkedAt}核对可见推送列表，仅收录标题，尚未核读正文。
        时间保留微信当时显示；“今天”指10月26日，星期显示也以该日为参照。
      </p>
    </div>
  );
}
