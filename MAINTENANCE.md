# 内容维护手册

本文件记录**怎么给这个站点加内容**、**资料来源从哪来**、以及**已经踩过的坑**。
面向后来接手的人（或 AI 协作者），不涉及站点运行与部署（见 `README.md`、`AGENTS.md`）。

最后更新：2026-11-01

---

## 一、内容存在哪

| 文件 | 内容 | 条数（2026-11-01） |
| --- | --- | --- |
| `src/data/news.ts` | 新闻中心的报道（标题、日期、分类、来源、摘要、正文段落、配图） | 46 |
| `src/data/wechat-2026.json` | 主校公众号 2026 年推送标题 | 84 |
| `src/data/wechat-archive.json` | 主校公众号 2016—2024 年推送标题 | 27 |
| `src/data/wechat-attached.json` | 附属校尉胡同小学公众号推送标题 | 13 |
| `src/data/sources.ts` | 账号信息、政策文件入口、档案聚合导出 | — |
| `SOURCES.md` | 每条报道的来源与核验说明（对外，读者可见） | — |

`news.ts` 里每条记录的字段：

```ts
{
  id: number;            // 唯一，递增；1—8 号保持历史编号不变
  title: string;
  date: string;          // 原文发布日期 YYYY-MM-DD
  eventDate?: string;    // 活动发生日期（与发布日不同时填）
  category: NewsCategory;
  source: string;        // 发布方
  sourceUrl: string;
  sourceTitle: string;   // 原文标题
  sourceOffline?: boolean; // 原文分享链接已失效时置 true
  summary: string;
  paragraphs: string[];  // 只写原文支持的事实
  image?: ReportImage;
  gallery?: ReportImage[];
  relatedSources?: { title: string; url: string }[];
}
```

---

## 二、加一条报道的流程

1. **找到原文**（渠道见第三节），确认是**可核验的公开来源**。
2. **读正文**，只摘录原文明确写出的事实；不补写过程、评价、感言、承诺。
3. **不写不必要的师生姓名**。参赛学生、校内教师、校友一律用「一名学生」「学校教师」等替代；
   外聘专家、院士等公众人物可保留姓名。
4. 写入 `news.ts`，`id` 取当前最大值 +1。
5. 更新三处计数：`SOURCES.md`（收录条数 + 表格新增一行）、`README.md`（增补说明）、必要时 `/sources` 页面文案。
6. **跑验证**：`npm run build && npm run lint`，并在本地 `next start` 抽查 `/news/<id>`。
7. 提交。**每个来源都要在 SOURCES.md 里能对上号。**

---

## 三、资料来源渠道（按可用性排序）

### 1. 新京报站内搜索接口（最稳，但会限流）

新京报搜索页是 JS 渲染，但接口是明文的：

```
https://s.bjnews.com.cn/bjnews/getlist?from=bw&page=1&orderby=1&bwsk=<关键词>&ft=0
```

- `bwsk` 关键词，`ft=0` 标题搜索，`ft=1` 全文搜索，`page` 从 1 起。
- 返回 JSON：`data.data[]._source` 里有 `title`、`publish_time`、`uuid`、`source`。
- 详情页：`https://www.bjnews.com.cn/detail/<uuid>.html`（服务端渲染，curl 可直接抓正文）。
- **限制**：接口在阿里云 WAF 后面，**一波约 15 次请求后会返回 405 阻断页**，冷却约 30—60 分钟。
  冷却期内换 UA、加 Cookie、加浏览器指纹头均无效（已验证）。

### 2. 搜狗微信搜索（能拿公众号正文，但封得最狠）

```
https://weixin.sogou.com/weixin?type=2&query=<关键词>&page=<n>
```

- **必须同一会话内「搜索 → 解析 /link?url= → 抓正文」**；跨会话的链接 token 会失效。
- 搜狗按**查询次数**封本机 IP，触发后返回 `antispider` 验证页，冷却 1 小时以上仍可能不解封。
- 正文页里有 `id="js_content"` 即为有效；没有则是「系统出错 / 参数错误」的失效页。
- 抓到的 `mp.weixin.qq.com/s?src=11&timestamp=...&signature=...` 是**分享链接，会过期**；
  页面内不含 `__biz/mid/sn`，**无法换算成永久链接**。

### 3. 已失效/不可用的通道（别再试）

| 通道 | 现状 |
| --- | --- |
| 百度 / 360 / 搜狗网页搜索 | 安全验证页或纯 JS 渲染 |
| 必应 HTML / 必应 RSS | HTML 与 RSS 都返回与查询无关的缓存结果 |
| DuckDuckGo html / lite / POST | 软封锁：返回搜索壳、零结果 |
| Google | 需 JS，返回重定向页 |
| 公共 SearXNG 实例 | 5 个实例全部空壳/验证页 |
| wxredian.com（公众号聚合） | 「验证访问」页 |
| 新京报站内搜索页 HTML | JS 渲染，必须走上面的接口 |
| 首都之窗 `search.json` | 返回「系统维护中」 |

> 经验：**能用的是"接口级"的通道**（新京报 API、搜狗 /link），"页面级"的搜索基本都被 JS 或 WAF 挡死。

---

## 四、链接失效的处理规则

公众号分享链接会过期。已建立的处理方式：

1. 定期检查：对每条 `sourceUrl` 取一次页面，确认 **HTTP 200 且页面含正文标记**（微信看 `id="js_content"`）。
2. 失效的条目**不删**（事实本身已核读），而是：
   - `news.ts` 里加 `"sourceOffline": true`
   - `/news/[id]` 与 `/sources` 会自动把死链换成「账号＋标题＋推送日期」的检索指引
3. 在 `SOURCES.md` 记录本次核查结论。

---

## 五、图片规则

- 只使用**原文中真实存在**的配图，保留原画幅，不裁水印。
- **含学生正面肖像、且画面里出现姓名的照片一律不用**——这是本项目一贯的取舍。
- 图片放 `public/images/reports/`，统一转 WebP，图注写清拍摄/发布信息与来源。

---

## 六、常见判断

| 情况 | 处理 |
| --- | --- |
| 只拿到公众号标题、没有正文 | 只进 `wechat-*.json` 标题档案，**不写成报道** |
| 附属校尉胡同小学（附小）的活动 | 可成条，但必须写明"主体为附属小学"，分类用「集团动态」 |
| 招生、招聘、个人表彰、升学成绩类推送 | **不收录** |
| 同一事件有多个来源 | 主条用最权威的一个，其余放 `relatedSources` |
| 区级/全市项目里的 166 片段 | 只写 166 相关部分，不把别的主体成绩算到本校头上 |
