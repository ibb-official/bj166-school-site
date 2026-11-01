import Link from '@/components/Link';
import PageLayout from '@/components/PageLayout';
import { alumni, bingxin, getHistorySource, historyCheckedAt, historyEras, historyPhotoCredit, historyPhotoLicense, historyPhotos, historySources, landmarks, tongfu } from '@/data/history';

export const metadata = {
  title: '校史沿革 - 北京市第一六六中学（非正式网站）',
  description: '从1864年的贝满女塾到北京市第一六六中学：沿革时间线、佟府与同福夹道、知名校友与校园地标，均附出处。'
};

function SourceRef({ id }: { id?: string }) {
  const source = id ? getHistorySource(id) : undefined;
  if (!source) return null;
  return source.url
    ? <a className="history-ref" href={source.url} target="_blank" rel="noreferrer">{source.publisher.split('（')[0].split(' · ')[0]}</a>
    : <span className="history-ref">{source.publisher.split('（')[0].split(' · ')[0]}</span>;
}

export default function HistoryPage() {
  const [lead, ...restPhotos] = historyPhotos;
  return (
    <PageLayout title="校史沿革" english="SCHOOL HISTORY · SINCE 1864">
      <p className="noindent">一六六中学的源头是1864年在灯市口创办的贝满女塾。一百六十多年间，学校经历贝满女中、北京市第十二女子中学等阶段，1971年定名北京市第一六六中学。本页按时期梳理沿革，每条事实都标出出处。</p>
      <figure className="report-photo">
        <a href={lead.fileUrl} target="_blank" rel="noreferrer" aria-label={`查看图片出处：${lead.alt}`}><img src={lead.src} alt={lead.alt} loading="lazy" decoding="async" /></a>
        <figcaption>{lead.caption}<br /><a href={lead.fileUrl} target="_blank" rel="noreferrer">{historyPhotoCredit.split('，')[0]}</a>，<a href={historyPhotoLicense} target="_blank" rel="noreferrer">CC BY-SA 4.0</a></figcaption>
      </figure>

      <h3 className="block-t" id="timeline">沿革时间线</h3>
      {historyEras.map((era) => (
        <section className="history-era" key={era.title}>
          <h4><span>{era.range}</span>{era.title}</h4>
          <ul className="timeline">
            {era.events.map((event) => (
              <li key={event.year + event.text}>
                <strong>{event.year}</strong>{event.text}
                {event.newsId ? <Link className="history-ref" href={`/news/${event.newsId}`}>相关报道</Link> : <SourceRef id={event.source} />}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h3 className="block-t" id="tongfu">佟府与同福夹道</h3>
      {tongfu.paragraphs.map((text) => <p key={text}>{text}</p>)}
      <table className="pub">
        <tbody>
          {tongfu.facts.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}
        </tbody>
      </table>
      <p className="noindent small-note">出处：{tongfu.sources.map((key, index) => <span key={key}>{index > 0 && '、'}<SourceRef id={key} /></span>)}。明代宅主与清初受赐者各资料说法不一，本页两说并列，不作取舍。</p>

      <h3 className="block-t" id="bingxin">冰心与贝满女中</h3>
      <p>{bingxin.text}</p>
      <p className="noindent small-note">出处：<SourceRef id={bingxin.sources[0]} />；校园景物见<Link href={`/news/${bingxin.newsId}`}>手绘明信片活动报道</Link>。</p>

      <h3 className="block-t" id="alumni">知名校友</h3>
      <p className="noindent small-note">按维基百科“知名校友”一节原顺序列出，只写一句话身份，不展开个人生平。</p>
      <ul className="alumni-grid">
        {alumni.map((person) => <li key={person.name}><strong>{person.name}</strong><span>{person.identity}</span></li>)}
      </ul>

      <h3 className="block-t" id="landmarks">校园地标</h3>
      <ul className="policy-list">
        {landmarks.map((item) => (
          <li key={item.name}>
            <h4>{item.name}</h4>
            <p>{item.text}{item.newsId ? <Link className="history-ref" href={`/news/${item.newsId}`}>相关报道</Link> : <SourceRef id={item.source} />}</p>
          </li>
        ))}
      </ul>

      <h3 className="block-t" id="photos">今日校门</h3>
      <div className="report-gallery">
        {restPhotos.map((photo) => (
          <figure className="report-photo" key={photo.src}>
            <a href={photo.fileUrl} target="_blank" rel="noreferrer" aria-label={`查看图片出处：${photo.alt}`}><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" /></a>
            <figcaption>{photo.caption}<br /><a href={photo.fileUrl} target="_blank" rel="noreferrer">{historyPhotoCredit.split('，')[0]}</a>，<a href={historyPhotoLicense} target="_blank" rel="noreferrer">CC BY-SA 4.0</a></figcaption>
          </figure>
        ))}
      </div>

      <h3 className="block-t" id="sources">本页资料来源</h3>
      <ul className="source-directory">
        {historySources.map((source) => (
          <li key={source.key}>
            {source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a> : <span>{source.title}</span>}
            <span>{source.publisher}{source.note ? ` · ${source.note}` : ''}</span>
          </li>
        ))}
      </ul>
      <p className="source-note">资料核对：{historyCheckedAt}。本页不写历任校长与教师姓名；仅有网络传闻、无可靠出处的说法（如胡同轶事、校园昵称）不收录。艺术团档案见<Link href="/culture#arts">校园文化</Link>。本站为同学共建的非正式网站。</p>
    </PageLayout>
  );
}
