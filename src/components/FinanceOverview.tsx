import Link from '@/components/Link';
import { financeCheckedAt, financeUnit, formatFinanceAmount, latestFinanceBudget, latestFinanceFinal } from '@/data/finance';

export default function FinanceOverview() {
  const budget = latestFinanceBudget;
  const final = latestFinanceFinal;
  const cards = [
    {
      title: `${budget.year}年初预算`,
      href: '/finance#budgets',
      rows: [['支出总预算', budget.total], ['基本支出', budget.basic], ['项目支出', budget.project]]
    },
    {
      title: `${final.year}年度决算`,
      href: '/finance#finals',
      rows: [['本年支出', final.expend], ['基本支出', final.basic], ['项目支出', final.project]]
    },
    {
      title: `${final.year}政府采购决算`,
      href: '/finance#procurement',
      rows: [['货物采购', final.goods], ['工程采购', final.works], ['服务采购', final.services]]
    }
  ];

  return (
    <section className="topic-section" id="finance" aria-labelledby="finance-heading">
      <div className="sec-title"><h3 id="finance-heading">财政数据</h3><Link className="more" href="/finance">年度数据与原文&gt;&gt;</Link></div>
      <div className="topic-grid">
        {cards.map((card) => (
          <div className="topic-card" key={card.title}>
            <h4><Link href={card.href}>{card.title}</Link></h4>
            <ul>{card.rows.map(([label, value]) => <li key={label}><Link href={card.href}>{label}：<span style={{ whiteSpace: 'nowrap' }}>{formatFinanceAmount(value)}{financeUnit}</span></Link></li>)}</ul>
          </div>
        ))}
        <div className="topic-card">
          <h4><Link href="/finance#sources">历年公开资料</Link></h4>
          <ul>
            <li><Link href="/finance#budgets">2022—2026年初预算</Link></li>
            <li><Link href="/finance#finals">2021—2025年度决算</Link></li>
            <li><Link href="/finance#notes">原文差异与阅读口径</Link></li>
          </ul>
        </div>
      </div>
      <p className="small-note">单位：{financeUnit}；展示保留两位小数，原值见详情。预算与决算分年、分口径列示，采购不与本年支出重复相加。资料核对：{financeCheckedAt}。</p>
    </section>
  );
}
