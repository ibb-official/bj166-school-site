'use client';

import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import type { ComponentProps, MouseEvent, TouchEvent } from 'react';

/**
 * 站内链接：关闭“进入视口即预取”，改为悬停/触摸时才预取。
 * 首页一屏有四十多个站内链接，默认预取会同时发出几十个请求，
 * 在跨境线路上把真正的点击跳转排到后面（实测首页点“新闻中心”要等 6 秒）。
 */
export default function Link({ prefetch, onMouseEnter, onTouchStart, ...props }: ComponentProps<typeof NextLink>) {
  const router = useRouter();
  const warm = () => {
    if (prefetch === false) return;
    const href = typeof props.href === 'string' ? props.href : props.href.pathname;
    if (href && href.startsWith('/')) router.prefetch(href);
  };
  return (
    <NextLink
      {...props}
      prefetch={false}
      onMouseEnter={(event: MouseEvent<HTMLAnchorElement>) => { warm(); onMouseEnter?.(event); }}
      onTouchStart={(event: TouchEvent<HTMLAnchorElement>) => { warm(); onTouchStart?.(event); }}
    />
  );
}
