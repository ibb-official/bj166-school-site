# CLAUDE.md — 交接说明（给 Claude 接手用）

> 本文件是本项目**当前状态与工作约定的唯一入口**。任何接手的人或 AI，先读完这一份再动手。
> 最后更新：2026-11-01 17:50（Asia/Shanghai）

---

## 一、这是什么

北京市第一六六中学**非官方**资料整理站。Next.js App Router + TypeScript，静态内容为主。

| 项 | 值 |
| --- | --- |
| 线上 | https://bj166zx.cn |
| 仓库 | https://github.com/ibb-official/bj166-school-site |
| 本机工作目录 | `D:\DeepSeekHarness\ibb官网` |
| 本地预览 | `npx next start -p 3000` → http://127.0.0.1:3000 |
| 生产机 | `sofia-vps`（108.165.233.143，hostname `r-server89187-mls`），Docker + Caddy |

**定位红线**：本站是非官方整理站，不代表学校授权发布。页面必须保留"非正式网站"标识。

---

## 二、当前状态（2026-11-01）

| 维度 | 数值 |
| --- | --- |
| 新闻中心 | **53 条**（2016、2018—2020、2022—2026，共 9 个年份） |
| 公众号档案 | **124 条标题**（主校 111 + 附小 13），每条可点 |
| 页面 | 68 个（含 `/sitemap.xml` 56 条 URL、`/robots.txt`、自定义 404） |
| 配图 | 26 张，全部有出处，合计 3.32 MB |
| 构建 | `npm run build` / `npm run lint` 均通过 |

**唯一空缺**：2017 年（无可用公开来源，不做补写）。

---

## 三、代码结构

```
src/
├── app/
│   ├── layout.tsx         全局布局 + metadataBase + OG 默认值
│   ├── page.tsx           首页（轮播/头条/三栏/专题/公众号/图片报道）
│   ├── news/page.tsx      新闻列表（搜索、分类、年份筛选、年份索引）
│   ├── news/[id]/page.tsx 详情（同类报道推荐、原文入口、失效指引）
│   ├── wechat/page.tsx    公众号档案（按年份+月份分组，条目可点）
│   ├── about|culture|photos|policy|disclosure|sources|contact/
│   ├── sitemap.ts / robots.ts / not-found.tsx
│   └── globals.css        全站样式（含移动端打磨层，见文件末尾）
├── components/            Header / Footer / Carousel / PageLayout / ReportPhoto /
│                          NewsLinks / AccountUpdates
└── data/
    ├── news.ts            53 条报道（唯一内容源）
    ├── sources.ts         账号信息、政策入口、档案聚合导出
    ├── archive-links.ts   档案标题 → 站内报道/搜狗检索 的映射
    ├── wechat-2026.json   主校 2026 年标题（84）
    ├── wechat-archive.json 主校 2016—2024 标题（27）
    └── wechat-attached.json 附小标题（13）
```

---

## 四、内容规则（硬性，不可违反）

1. **只写有出处的事实**。不补写活动过程、人物评价、获奖感言、学校承诺。
2. **不列不必要的师生姓名**。参赛学生、校内教师、校友一律写"一名学生""学校教师"；
   外聘专家、院士等公众人物可保留姓名。
3. **不发布联系方式**：电话、邮箱、个人手机号、具体地址、师资名录、校友个人介绍一律不收。
   （招聘公告里带"石老师 65250497 / renshi166@126.com"，**不得**写进站。）
4. **含学生正面肖像且画面出现姓名的照片不用**。这是既定取舍。
5. **附属校尉胡同小学的活动**可成条，但必须写明"主体为附属小学"，分类用「集团动态」。
6. **招生、招聘、个人表彰、升学成绩类推送不收录**。
7. 只有标题、没读到正文的推送**只进档案，不写成报道**。
8. 公众号分享链接会过期。失效时：`news.ts` 加 `"sourceOffline": true`，
   页面会自动改成"账号+标题+推送日期"的检索指引，**不删条目**。

---

## 五、数据模型（`src/data/news.ts`）

```ts
{
  id: number;              // 唯一递增；1—8 号保持历史编号不变
  title: string;
  date: string;            // 原文发布日期
  eventDate?: string;      // 活动发生日（与发布日不同时才填）
  category: NewsCategory;  // 9 类之一
  source: string;          // 发布方
  sourceUrl: string;
  sourceTitle: string;
  sourceOffline?: boolean; // 原文链接已失效
  summary: string;
  paragraphs: string[];
  image?: ReportImage;     // { src, alt, caption, credit, originalUrl, sourceUrl? }
  gallery?: ReportImage[];
  relatedSources?: { title: string; url: string }[];
}
```

分类：科学教育、校园文化、协同育人、思政教育、信息公示、学校历史、阅读活动、集团动态、周边环境。

---

## 六、加一条报道的流程

1. 找到**可核验**的公开来源（优先政府/学校/正规媒体）。
2. 读正文，按第四节规则写摘要。
3. 写入 `news.ts`，`id` = 当前最大值 + 1。
4. **同步更新三处计数**：`SOURCES.md`（条数 + 表格加一行）、`README.md`、必要时 `/sources` 文案。
5. `npm run build && npm run lint`，本地 `next start` 抽查 `/news/<id>`。
6. 提交并推送（见第七节）。

---

## 七、部署与提交流程

**当前链路**：推 `main` → GitHub Actions 构建 Docker 镜像推 GHCR → SSH 到 sofia-vps →
执行受控部署脚本 → 健康检查 200 → 上线。

- 本机推送用 **SSH key**：`GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519_bj166" git push origin main`
- 部署约 2—3 分钟，可用公开 API 查状态：
  `https://api.github.com/repos/ibb-official/bj166-school-site/actions/runs?per_page=1`
- **协作者 IGNGserver 维护生产机**。他明确的边界（勿再提议）：
  - 不给协作者分发服务器公钥，不开放 root
  - 不解除部署密钥的命令限制（最小权限设计）
  - 排查部署问题时不要再往 `deploy.yml` 里塞临时诊断步骤（曾塞过 7 个，已被 PR #6 清理）

**已知坑（已由协作者修复，勿重蹈）**：GHCR 镜像是 Private，生产机需长期拉取凭据；
部署脚本曾把输出重定向到本地日志导致 Actions 只看到空输出 + exit 1，
一度被误判为"sshd 限制命令执行"。现在脚本用 `tee` 双写 + 健康检查。

---

## 八、内容来源渠道（实测结论）

| 渠道 | 状态 |
| --- | --- |
| **搜狗微信移动端** `weixin.sogou.com/weixinwap?type=2&query=X` | ✅ **可用**（桌面端 `/weixin` 会封 IP） |
| 搜狗微信桌面端 `/weixin` | ❌ 按查询次数封 IP，冷却 1 小时以上 |
| 新京报站内搜索 API `s.bjnews.com.cn/bjnews/getlist` | ⚠️ 可用但**阿里云 WAF 一波约 15 次请求后 405**，冷却 30—60 分钟 |
| 北京市教委 `/tzgg/` 通知公告 | ✅ 可爬（586 篇已扫，**0 命中**，市教委层面无该校信息） |
| 《新东城报》PDF | ✅ 有文字层可提取，但命中率极低 |
| 百度 / 必应 / 360 / Google / DDG / SearXNG | ❌ 均不可用（JS 渲染或封锁） |
| `mp.weixin.qq.com` 文章正文 | ✅ 可打开（分享链接约 7 天失效） |

**采集脚本**（在 `~/.dsh/skills/offensive-toolkit/scripts/`）：
`sogou_wap.py`（移动端采集，主力）、`bjnews_search.py`、`scan_jw_notices.py`、
`check_source_links.py`、`check_wechat_links.py`。

---

## 九、已经做完的事

- 新闻中心 25 → **53 条**，来源覆盖学校公众号、新京报、京报网、新华网、北京考试报、北京时间、东教印象
- 公众号档案 84 → **124 条**，新增附小分区，条目全部可点（站内摘要 / 搜狗搜原文）
- 删除 10 张零引用大图，`public/images` 25MB → 3.8MB
- 新增：年份索引、同类报道推荐、OG 分享卡片、sitemap/robots/自定义 404、`MAINTENANCE.md`
- 处理 3 条失效的公众号链接（31/32/35）
- **移动端适配与视觉打磨**：正文 15.5px、导航吸顶 46px 触控区、输入框 16px 防 iOS 缩放、
  轮播 aspect-ratio 自适应、表格横向滚动、卡片圆角与悬停、180ms 缓动、
  `prefers-reduced-motion` 降级、刘海屏安全区、≤380px 单独收紧

---

## 十、待办（按优先级）

1. **2017 年缺口**：目前没有可核验来源，宁缺勿造。
2. **公众号正文还差约 117 篇**：标题已有，正文没吃下。用 `sogou_wap.py` 可继续采集。
3. **教职工信息（待用户拍板，尚未实施）**：
   - 可入站（机构性）：学校定位表述、2026 年招聘 17 人的学科清单、"双师双导"机制
   - 存疑：知乎称"近 50 名市区级骨干、2 名特级、1 名正高"——**无官方出处，未采用**
   - 教师个人（秦悦/全莹/赵盈/关伟）：按站点原则**未收录**
4. 首页专题卡片、`/about`、`/culture` 可继续接入新增报道。

---

## 十一、常用命令

```bash
npm run dev                    # 开发
npm run build && npm run lint  # 提交前必跑
npx next start -p 3000         # 本地预览

# 推送
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519_bj166" git push origin main

# 查部署
curl -s "https://api.github.com/repos/ibb-official/bj166-school-site/actions/runs?per_page=1"
```

---

## 十二、与用户协作的偏好

- 结论、路径、结果、下一步**直接写在回复里**，不要只放在折叠的工具输出中。
- 解释和方案对比用**表格**，中文讲解要直观。
- 有界请求只交付点名的那一项，不擅自扩大范围。
- **多汇报**：每完成一个有意义的步骤就说明在做什么、得到什么、下一步。
- 能让用户看见的，给**可打开的 URL**，而不是只描述。
- 同一通道连续失败 2—3 次就换路子并汇报，不要死磕。
