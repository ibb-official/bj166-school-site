import Link from 'next/link';
import { accountUpdates, accountYears, schoolAccount } from '@/data/sources';

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
        收录{accountYears.length}个年份（{accountYears[accountYears.length - 1]}—{accountYears[0]}）共{accountUpdates.length}条推送标题；
        2026年条目据微信历史目录核对，历年条目标题与推送日期据公开索引补充，多数未核读正文。
      </p>
      {!compact && <p className="account-note"><Link href="/wechat">按年份与月份查阅全部{accountUpdates.length}条标题 &gt;</Link></p>}
    </div>
  );
}
