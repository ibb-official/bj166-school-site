import { newsList } from './news';

const PUNCT = /[\s，。！？、；：“”‘’（）()［］【】\[\]｜|·．.,!?;:'"“”‘’—\-…~～《》<>]/g;

export function normalizeTitle(value: string) {
  return value.replace(PUNCT, '').toLowerCase();
}

const normalizedNews = newsList.map((item) => ({
  id: item.id,
  key: normalizeTitle(`${item.sourceTitle}${item.title}`)
}));

/**
 * 公众号标题 -> 本站报道 id（若该推送已核读并整理成报道）。
 * 用去掉标点后的包含关系匹配，避免全角/半角与感叹号差异导致漏配。
 */
export function findNewsIdByArchiveTitle(title: string): number | undefined {
  const key = normalizeTitle(title);
  if (key.length < 8) return undefined;
  const hit = normalizedNews.find(
    (item) => item.key.includes(key) || key.includes(normalizeTitle(key).slice(0, 24)) && item.key.includes(key.slice(0, 24))
  );
  return hit?.id;
}

/** 搜狗微信公开检索入口：按标题找原文（用户侧浏览器可访问）。 */
export function sogouSearchUrl(title: string) {
  return `https://weixin.sogou.com/weixin?type=2&query=${encodeURIComponent(title)}`;
}
