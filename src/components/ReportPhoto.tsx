import type { NewsItem, ReportImage } from '@/data/news';

export default function ReportPhoto({ article, photo = article.image }: { article: NewsItem; photo?: ReportImage }) {
  if (!photo) return null;
  return (
    <figure className="report-photo">
      {/* 保留原始画幅与水印；不把报道配图裁成虚构的校园实景。 */}
      <a href={photo.src} target="_blank" rel="noreferrer" aria-label={`查看大图：${photo.alt}`}><img src={photo.src} alt={photo.alt} loading="lazy" /></a>
      <figcaption>
        {photo.caption}<br />
        图片来源：<a href={article.sourceUrl} target="_blank" rel="noreferrer">{photo.credit}</a>
      </figcaption>
    </figure>
  );
}
