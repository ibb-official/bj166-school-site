'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getNews } from '@/data/news';

const slides = [getNews(1)!, getNews(3)!, getNews(4)!];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setIndex((previous) => (previous + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="carousel" aria-label="图片报道" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      {slides.map((item, position) => (
        <div key={item.id} className={`slide ${position === index ? 'on' : ''}`} aria-hidden={position !== index}>
          <Link href={`/news/${item.id}`} tabIndex={position === index ? 0 : -1}>
            <img src={item.image!.src} alt={item.image!.alt} />
          </Link>
        </div>
      ))}
      <div className="caption">
        <Link href={`/news/${slides[index].id}`}>{slides[index].title}</Link>
        <span>{slides[index].image!.credit}</span>
      </div>
      <div className="dots">
        {slides.map((item, position) => (
          <button key={item.id} type="button" className={position === index ? 'on' : ''} onClick={() => setIndex(position)} aria-label={`显示第${position + 1}张：${item.title}`} aria-pressed={position === index}>{position + 1}</button>
        ))}
      </div>
    </section>
  );
}
