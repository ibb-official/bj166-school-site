import type { NewsItem } from '@/data/news';

export default function ReportPhoto({ article }: { article: NewsItem }) {
  if (!article.image) return null;
  const photo = article.image;
  return (
    <figure className="report-photo">
      {/* 保留原始画幅与水印；不把报道配图裁成虚构的校园实景。 */}
      <img src={photo.src} alt={photo.alt} loading="lazy" />
      <figcaption>
        {photo.caption}<br />
        图片来源：<a href={article.sourceUrl} target="_blank" rel="noreferrer">{photo.credit}</a>
      </figcaption>
    </figure>
  );
}
