import Link from 'next/link';
import { accountMonths, accountUpdates, schoolAccount } from '@/data/sources';

export default function AccountUpdates({ compact = false }: { compact?: boolean }) {
  const entries = accountUpdates.slice(0, compact ? 4 : 8);
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
            <time className="account-date" dateTime={item.date}>{item.date}</time>
          </li>
        ))}
      </ul>
      <p className="account-note">
        {schoolAccount.checkedAt}核对公众号历史目录，收录{accountMonths.length}个月的推送标题，尚未核读完整正文。
        日期按核对时的微信显示整理。
      </p>
      {!compact && <p className="account-note"><Link href="/wechat">按月份查阅全部{accountUpdates.length}条标题 &gt;</Link></p>}
    </div>
  );
}
