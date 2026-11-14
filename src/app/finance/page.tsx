import type { Metadata } from 'next';
import Link from '@/components/Link';
import PageLayout from '@/components/PageLayout';
import { financeBudgetUnit, financeBudgets, financeCheckedAt, financeEntity, financeFinals, financeNotes, financePdfUrl, financePortal, financeSources, financeUnit, formatFinanceAmount } from '@/data/finance';

export const metadata: Metadata = {
  title: '财政数据',
  description: '北京市第一六六中学2022—2026年初预算、2021—2025年度决算与政府采购分类数据，保留原值、口径及政府公开原文入口。',
  alternates: { canonical: '/finance' }
};

function Amount({ value }: { value: string }) {
  return <span style={{ whiteSpace: 'nowrap' }} title={`完整精度：${value}${financeUnit}`}>{formatFinanceAmount(value)}</span>;
}

function Original({ sourceId, page, label }: { sourceId: string; page?: number; label?: string }) {
  return <a className="read-link" style={{ whiteSpace: 'nowrap' }} href={financePdfUrl(sourceId, page)} target="_blank" rel="noreferrer">{label ?? `${sourceId}${page ? ` · p${page}` : ''}`} ↗</a>;
}

export default function FinancePage() {
  return (
    <PageLayout title="财政数据" english="PUBLIC FINANCE DATA">
      <p className="noindent">本页整理<strong>{financeEntity}</strong>（预算单位{financeBudgetUnit}）公开的年初预算和年度决算。资料来自东城区人民政府，核对至<time dateTime={financeCheckedAt}>{financeCheckedAt}</time>；附属校尉胡同小学另属单位，未合并。</p>
      <nav className="archive-month-links" aria-label="财政数据栏目">
        <Link href="#budgets">年初预算</Link><Link href="#finals">年度决算</Link><Link href="#fiscal">财政拨款口径</Link><Link href="#procurement">政府采购</Link><Link href="#sangong">三公经费</Link><Link href="#notes">原文差异</Link><Link href="#raw-values">原值查阅</Link><Link href="#sources">官方来源</Link>
      </nav>
      <div className="source-note">金额单位统一为{financeUnit}，主表展示两位小数，未将舍入尾差修平；完整精度见“原值查阅”。年初预算不是调整后预算，决算本年收支不含结转总计，采购额也不应再次加到本年支出上。本页是公开资料整理，不是学校正式发布或审计结论。</div>

      <h3 className="block-t" id="budgets">年初预算 · 2022—2026</h3>
      <p className="noindent small-note" id="budget-caption">全口径支出预算（含结转安排），单位：{financeUnit}。总额见原件p4，基本／项目见p6；2026年数据为年初安排，不代表全年实际支出。</p>
      <table className="pub" aria-describedby="budget-caption">
        <tbody>
          <tr><th scope="col">年度</th><th scope="col">支出总预算</th><th scope="col">基本支出</th><th scope="col">项目支出</th><th scope="col">官方原表</th></tr>
          {financeBudgets.map((item) => <tr key={item.year}><th scope="row" style={{ width: 'auto', whiteSpace: 'nowrap' }}>{item.year}</th><td><Amount value={item.total} /></td><td><Amount value={item.basic} /></td><td><Amount value={item.project} /></td><td><Original sourceId={item.sourceId} page={item.total_page} label="收支总表" /> / <Original sourceId={item.sourceId} page={item.expend_page} label="支出表" /></td></tr>)}
        </tbody>
      </table>
      <p className="noindent small-note">2021年独立预算在本次定位的发布页未找到，未记为0；这不等于当年未编制或从未公开。2022、2023、2024年分项与总额存在0.01万元级列示尾差，按原值保留。</p>

      <h3 className="block-t" id="finals">年度决算 · 2021—2025</h3>
      <p className="noindent small-note" id="final-caption">全口径本年收支，单位：{financeUnit}。本年收入不等于含年初结转的收入总计；基本／项目为本年支出的分类。</p>
      <table className="pub" aria-describedby="final-caption">
        <tbody>
          <tr><th scope="col">年度</th><th scope="col">本年收入</th><th scope="col">本年支出</th><th scope="col">基本支出</th><th scope="col">项目支出</th><th scope="col">官方原表</th></tr>
          {financeFinals.map((item) => <tr key={item.year}><th scope="row" style={{ width: 'auto', whiteSpace: 'nowrap' }}>{item.year}</th><td><Amount value={item.income} /></td><td><Amount value={item.expend} /></td><td><Amount value={item.basic} /></td><td><Amount value={item.project} /></td><td><Original sourceId={item.sourceId} page={item.total_page} label="总表" /> / <Original sourceId={item.sourceId} page={item.expend_page} label="支出表" /></td></tr>)}
        </tbody>
      </table>
      <p className="noindent small-note">2023年基本与项目分项加总比总表多0.01万元，未据此改写披露值。2026年度尚未结束，本页不列2026全年决算，也不将不同年度预算与决算相除作为执行率。</p>

      <h3 className="block-t" id="fiscal">财政拨款口径 · 单独列示</h3>
      <p className="noindent small-note" id="fiscal-caption">一般公共预算财政拨款支出，单位：{financeUnit}。与上方全口径支出不是同一个范围；年初财政支出预算可能含财政结转，不能当作当年财政收入。</p>
      <table className="pub" aria-describedby="fiscal-caption">
        <tbody>
          <tr><th scope="col">年度／类型</th><th scope="col">财政支出</th><th scope="col">财政基本</th><th scope="col">财政项目</th><th scope="col">官方原表</th></tr>
          {financeBudgets.map((item) => <tr key={item.sourceId}><th scope="row" style={{ width: 'auto', whiteSpace: 'nowrap' }}>{item.year}预算</th><td><Amount value={item.fiscal_total} /></td><td><Amount value={item.fiscal_basic} /></td><td><Amount value={item.fiscal_project} /></td><td><Original sourceId={item.sourceId} page={item.fiscal_page} /></td></tr>)}
          {financeFinals.map((item) => <tr key={item.sourceId}><th scope="row" style={{ width: 'auto', whiteSpace: 'nowrap' }}>{item.year}决算</th><td><Amount value={item.fiscal_expend} /></td><td><Amount value={item.fiscal_basic} /></td><td><Amount value={item.fiscal_project} /></td><td><Original sourceId={item.sourceId} page={item.fiscal_page} /></td></tr>)}
        </tbody>
      </table>
      <p className="noindent small-note">2022财政基本支出采用专表11,861.17万元，不采用说明段中与财政总支出相同的12,561.13万元；两侧原文见下方差异说明。</p>

      <h3 className="block-t" id="procurement">政府采购 · 预算与决算分列</h3>
      <p className="noindent small-note" id="proc-caption">政府采购预算及决算统计，单位：{financeUnit}。合同签订、公告发布与实际支付可能跨年；采购统计不是可与支出总额叠加的“额外支出”。</p>
      <table className="pub" aria-describedby="proc-caption">
        <tbody>
          <tr><th scope="col">年度</th><th scope="col">年初采购预算</th><th scope="col">采购决算总额</th><th scope="col">货物</th><th scope="col">工程</th><th scope="col">服务</th></tr>
          {[2021, 2022, 2023, 2024, 2025, 2026].map((year) => {
            const budget = financeBudgets.find((item) => item.year === year);
            const final = financeFinals.find((item) => item.year === year);
            return <tr key={year}><th scope="row" style={{ width: 'auto', whiteSpace: 'nowrap' }}>{year}</th><td>{budget ? <a href={financePdfUrl(budget.sourceId, budget.proc_page)} target="_blank" rel="noreferrer" aria-label={`${year}年初政府采购预算${budget.proc}万元，查看官方原文`}><Amount value={budget.proc} /></a> : '未取得'}</td><td>{final ? <a href={financePdfUrl(final.sourceId, final.proc_page)} target="_blank" rel="noreferrer" aria-label={`${year}政府采购决算${final.proc}万元，查看官方原表`}><Amount value={final.proc} /></a> : '年度未结束'}</td><td>{final ? <Amount value={final.goods} /> : '—'}</td><td>{final ? <Amount value={final.works} /> : '—'}</td><td>{final ? <Amount value={final.services} /> : '—'}</td></tr>;
          })}
        </tbody>
      </table>
      <p className="noindent small-note">点击预算或决算总额可查看对应采购原页。2022预算表内空白，0.00依据同文件p23文字说明；2023采购表注与有数表格冲突，采用表格并由正文交叉支持，未按表注记为0。</p>

      <h3 className="block-t" id="sangong">三公经费 · 财政拨款专表</h3>
      <p className="noindent small-note" id="three-caption">单位：{financeUnit}。年初预算与实际决算分别取独立预算文件和决算专表，未采用互相矛盾的说明段替换专表。</p>
      <table className="pub" aria-describedby="three-caption">
        <tbody>
          <tr><th scope="col">年度</th><th scope="col">年初预算</th><th scope="col">决算支出</th><th scope="col">官方原表</th></tr>
          {[2021, 2022, 2023, 2024, 2025, 2026].map((year) => {
            const budget = financeBudgets.find((item) => item.year === year);
            const final = financeFinals.find((item) => item.year === year);
            return <tr key={year}><th scope="row" style={{ width: 'auto', whiteSpace: 'nowrap' }}>{year}</th><td>{budget ? <Amount value={budget.sangong} /> : '未取得'}</td><td>{final ? <Amount value={final.sangong} /> : '年度未结束'}</td><td>{budget && <Original sourceId={budget.sourceId} page={budget.three_page} label="预算" />}{budget && final && ' / '}{final && <Original sourceId={final.sourceId} page={final.three_page} label="决算" />}</td></tr>;
          })}
        </tbody>
      </table>
      <p className="noindent small-note">2025预算专表原单位为元，54,000.00元换算为5.40万元。2023决算表内“预算0.70”与独立年初预算5.40不一致，不能擅称为已批准调整预算。</p>

      <h3 className="block-t" id="notes">原文差异与采用依据</h3>
      <p className="noindent">下列记录保留表格与说明两侧证据，不替原发布方修正，也不据此作违法、资金流失或舞弊认定。页码均为PDF物理页，从1开始，可能与印刷页号不同。</p>
      <ul className="policy-list">
        {financeNotes.map((note) => <li key={note.id}>
          <h4>{note.title}</h4>
          <p><strong>一侧：</strong>{note.side_a}<br /><strong>另一侧：</strong>{note.side_b}</p>
          <p><strong>整理处理：</strong>{note.assessment}<br /><strong>仍需材料：</strong>{note.needed}</p>
          <div>{note.refs.map((ref, index) => <span key={`${ref.source_id}-${ref.physical_page}`}>{index > 0 && ' / '}<Original sourceId={ref.source_id} page={ref.physical_page} /></span>)}</div>
        </li>)}
      </ul>

      <h3 className="block-t" id="raw-values">原值查阅 · 保留披露精度</h3>
      <p className="noindent small-note">上方主表仅作阅读性舍入，以下展开项按原始小数位列示；2025三公预算单独注明元到万元的换算。原始表与正文冲突处仍须一并阅读上方差异说明。</p>
      <ul className="source-directory">
        {financeBudgets.map((item) => <li key={item.sourceId}><details>
          <summary>{item.year}年初预算 · 展开原值</summary>
          <p className="noindent small-note">单位：{financeUnit}。全口径支出{item.total}；基本{item.basic}；项目{item.project}。财政支出{item.fiscal_total}；财政基本{item.fiscal_basic}；财政项目{item.fiscal_project}。政府采购{item.proc}；三公{item.sangong}{item.year === 2025 ? '（原表54,000.00元，除以10,000）' : ''}。</p>
          <Original sourceId={item.sourceId} label="查阅官方PDF" />
        </details></li>)}
        {financeFinals.map((item) => <li key={item.sourceId}><details>
          <summary>{item.year}年度决算 · 展开原值</summary>
          <p className="noindent small-note">单位：{financeUnit}。本年收入{item.income}；本年支出{item.expend}；基本{item.basic}；项目{item.project}。财政支出{item.fiscal_expend}；财政基本{item.fiscal_basic}；财政项目{item.fiscal_project}。政府采购{item.proc}（货物{item.goods}、工程{item.works}、服务{item.services}）；三公{item.sangong}。</p>
          <Original sourceId={item.sourceId} label="查阅官方PDF" />
        </details></li>)}
      </ul>

      <h3 className="block-t" id="sources">官方原始来源 · 10份文件</h3>
      <p className="noindent small-note">发布方：东城区人民政府／东城区教育委员会预算决算公开栏目。下列日期为栏目发布页所示日期，不是预算或决算所属年度；同一部门发布页可能包含多个单位附件，请核对学校全称。</p>
      <ul className="source-directory">
        {financeSources.map((source) => <li key={source.id}>
          <a href={source.pdfUrl} target="_blank" rel="noreferrer">{source.year}年{source.kind === 'budget' ? '预算' : '决算'}：{source.title} ↗</a>
          <span>发布页日期：<time dateTime={source.publishedAt}>{source.publishedAt}</time> · {source.pages}页 · {source.id}</span>
          <a className="read-link" href={source.publicationUrl} target="_blank" rel="noreferrer">政府发布页 ↗</a>
        </li>)}
      </ul>
      <p className="noindent"><a className="read-link" href={financePortal} target="_blank" rel="noreferrer">东城区部门预决算公开总入口 ↗</a> · <Link className="read-link" href="/disclosure">信息公示目录</Link></p>
      <div className="source-note">核对日期：{financeCheckedAt}。本页未取得最终调整预算、支付流水、验收台账或完整学校财务报告，不提供正式预算执行率或审计结论；年中可能有追加与调整，完整信息以政府原文和后续勘误为准。</div>
    </PageLayout>
  );
}
