'use client';

import React, { useState, useEffect } from 'react';

const slidesData = [
  {
    src: '/images/campus.jpg',
    alt: '校园风貌AI示意',
    caption: '校园风貌（AI生成示意图，非学校实景）'
  },
  {
    src: '/images/opening.jpg',
    alt: '开学典礼AI示意',
    caption: '开学典礼活动（AI生成示意图，非学校实景）'
  },
  {
    src: '/images/sports.jpg',
    alt: '秋季运动会AI示意',
    caption: '阳光体育与田径运动会（AI生成示意图）'
  },
  {
    src: '/images/teachers-day.jpg',
    alt: '教师节主题活动AI示意',
    caption: '教师节庆祝大会（AI生成示意图）'
  },
  {
    src: '/images/military-training.jpg',
    alt: '高一学农军训AI示意',
    caption: '高一年级国防教育实践活动（AI生成示意图）'
  }
];

export default function Carousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel" id="carousel">
      {slidesData.map((slide, i) => (
        <div key={slide.src} className={`slide ${i === idx ? 'on' : ''}`}>
          <img src={slide.src} alt={slide.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}
      <div className="caption">{slidesData[idx].caption}</div>
      <div className="dots">
        {slidesData.map((_, i) => (
          <span
            key={i}
            className={i === idx ? 'on' : ''}
            onClick={() => setIdx(i)}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
}
