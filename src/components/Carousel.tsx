'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from '@/components/Link';
import { getNews } from '@/data/news';

const slides = [getNews(20)!, getNews(1)!, getNews(3)!, getNews(4)!];
const INTERVAL = 7000;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // 每次恢复播放都重新计时，进度条随之重置，保证与实际切换节奏一致。
  const [cycle, setCycle] = useState(0);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setTimeout(() => setIndex((previous) => (previous + 1) % slides.length), INTERVAL);
    return () => clearTimeout(timer);
  }, [index, paused, cycle]);

  const go = (step: number) => setIndex((previous) => (previous + step + slides.length) % slides.length);
  const pause = () => setPaused(true);
  const resume = () => { setPaused(false); setCycle((value) => value + 1); };

  return (
    <section
      className={`carousel${paused ? ' is-paused' : ''}`}
      aria-label="图片报道"
      style={{ '--carousel-interval': `${INTERVAL}ms` } as CSSProperties}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      onTouchStart={(event) => { touchX.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(distance) > 40) { go(distance < 0 ? 1 : -1); setCycle((value) => value + 1); }
      }}
    >
      {slides.map((item, position) => (
        <div key={item.id} className={`slide ${position === index ? 'on' : ''}`} aria-hidden={position !== index}>
          <Link href={`/news/${item.id}`} tabIndex={position === index ? 0 : -1} style={{ '--slide-bg': `url("${item.image!.src}")` } as CSSProperties}>
            <img src={item.image!.src} alt={item.image!.alt} fetchPriority={position === 0 ? 'high' : 'auto'} decoding="async" />
          </Link>
        </div>
      ))}
      <div className="caption">
        <div className="caption-text" key={index}>
          <Link href={`/news/${slides[index].id}`}>{slides[index].title}</Link>
          <span>{slides[index].date} · {slides[index].image!.credit}</span>
        </div>
      </div>
      <div className="dots">
        {slides.map((item, position) => (
          <button key={item.id} type="button" className={position === index ? 'on' : ''} onClick={() => { setIndex(position); setCycle((value) => value + 1); }} aria-label={`显示第${position + 1}张：${item.title}`} aria-pressed={position === index}>
            <span className="visually-hidden">{position + 1}</span>
            {position === index && <i className="progress" key={`${index}-${cycle}`} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </section>
  );
}
