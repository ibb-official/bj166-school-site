import Link from 'next/link';
import { sortedNews, type NewsItem } from '@/data/news';

export default function NewsLinks({ items = sortedNews.slice(0, 5) }: { items?: NewsItem[] }) {
  return (
    <ul className="news-list">
      {items.map((item, index) => (
        <li key={item.id} className={index === 0 ? 'top' : undefined}>
          <span className="t"><Link href={`/news/${item.id}`} title={item.title}>{item.title}</Link></span>
          <time className="d" dateTime={item.date}>{item.date.slice(5)}</time>
        </li>
      ))}
    </ul>
  );
}
