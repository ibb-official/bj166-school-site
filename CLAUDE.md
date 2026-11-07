# CLAUDE.md — 交接说明（给 Claude 接手用）

> 本文件是本项目**当前状态与工作约定的唯一入口**。任何接手的人或 AI，先读完这一份再动手。
> 最后更新：2026-11-07 19:05（Asia/Shanghai）

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

## 二、当前状态（2026-11-07）

| 维度 | 数值 |
| --- | --- |
| 新闻中心 | **68 条**（2016—2026 共 11 个年份，2017 年已补入） |
| 公众号档案 | **124 条标题**（主校 111 + 附小 13），每条可点 |
| 页面 | 69 个（含 `/sitemap.xml` 57 条 URL、`/robots.txt`、自定义 404；新增 `/history` 校史沿革） |
| 配图 | 26 张报道配图 + 3 张校园实拍（`/images/history/`，CC BY-SA 4.0，须署名 N509FZ），全部有出处 |
| 构建 | `npm run build` / `npm run lint` 均通过 |

**年份覆盖**：2016—2026 每年都有条目；2017 年 3 条，均为公众号原文，媒体口径仍缺。

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
│   ├── history/page.tsx   校史沿革（时间线/佟府与同福夹道/冰心/校友/地标/校门实拍）
│   ├── about|culture|photos|policy|disclosure|sources|contact/
│   ├── sitemap.ts / robots.ts / not-found.tsx
│   └── globals.css        全站样式（含移动端打磨层，见文件末尾）
├── components/            Header / Footer / Carousel / PageLayout / ReportPhoto /
│                          NewsLinks / AccountUpdates
└── data/
    ├── news.ts            68 条报道（唯一内容源）
    ├── history.ts         校史沿革、佟府、校友、地标、实拍图及其来源（长期沿革事实，不放进 news.ts）
    ├── arts.ts            金帆管乐团 / 金帆话剧团 / 合唱团档案（/culture#arts）
    ├── sources.ts         账号信息、政策入口、档案聚合导出
    ├── archive-links.ts   档案标题 → 站内报道/搜狗检索 的映射
    ├── wechat-2026.json   主校 2026 年标题（84）
    ├── wechat-archive.json 主校 2016—2024 标题（27）
    └── wechat-attached.json 附小标题（13）
```

---

## 四、内容规则（硬性，不可违反）

1. **只写有出处的事实**。不补写活动过程、人物评价、获奖感言、学校承诺。
2. **不列不必要的师生姓名**。参赛学生一律写"一名学生"；**教师姓名一律不写**（含历任校长、
   指导教师、指挥、外聘导演、委约作曲者中的教师身份），按语境写"指导教师""常任指挥""外聘导演"等。
   维基百科"知名校友"一节的历史人物可写"姓名 + 一句话身份"。
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

- **推送方式：强制合并（用户 2026-11-07 明确要求）**
  PR #9 之后 `main` 已开启分支保护（提示 `Changes must be made through a pull request`）并加了 CODEOWNERS。
  仓库所有者账号直推仍可绕过，GitHub 会打印 `Bypassed rule violations for refs/heads/main` ——
  这是**预期行为，不是错误**。用户已确认继续用这种方式，**不需要开 PR、不需要等评审**。

  标准命令（PowerShell；密钥路径要用 `Join-Path`，反斜杠会被 PowerShell 吃掉导致 `Permission denied`）：

  ```powershell
  $k = Join-Path $env:USERPROFILE ".ssh/id_ed25519_bj166"
  $env:GIT_SSH_COMMAND = "ssh -i `"$k`""
  git fetch origin
  git rebase origin/main      # 远端可能有别人推的提交，先 rebase 再推
  git push origin HEAD:main
  ```

  若报 `! [rejected] ... (fetch first)`，说明远端又前进了，重新 `fetch` + `rebase` 再推即可。
  推送前仍须 `npm run build && npm run lint` 通过（注意本机 PowerShell 执行策略禁止 `npm.ps1`，要用 **`npm.cmd`**）。
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

- 新闻中心 25 → **53 条**（2026-11-07 再增至 **68 条**），来源覆盖学校公众号、新京报、京报网、新华网、北京考试报、北京时间、东教印象
- 公众号档案 84 → **124 条**，新增附小分区，条目全部可点（站内摘要 / 搜狗搜原文）
- 删除 10 张零引用大图，`public/images` 25MB → 3.8MB
- 新增：年份索引、同类报道推荐、OG 分享卡片、sitemap/robots/自定义 404、`MAINTENANCE.md`
- 处理 3 条失效的公众号链接（31/32/35）
- **移动端适配与视觉打磨**：正文 15.5px、导航吸顶 46px 触控区、输入框 16px 防 iOS 缩放、
  轮播 aspect-ratio 自适应、表格横向滚动、卡片圆角与悬停、180ms 缓动、
  `prefers-reduced-motion` 降级、刘海屏安全区、≤380px 单独收紧
- **流动性打磨**（`globals.css` 末尾“视觉与动效层”，已合并上一条的移动端层）：正文改系统黑体；
  面板统一 8px 圆角 + 细边 + 轻阴影；点线改实线；栏目标题底线渐隐；导航桌面端也吸顶、白色指示条；
  站头通栏白底；轮播加模糊底图、缓慢推近、胶囊进度指示、手机左右滑动（修复手机端按钮压标题）；
  上一篇/下一篇改卡片；进场淡入 + 滚动浮现（仅支持 `animation-timeline` 的浏览器，打印时关闭）
- **校史沿革与艺术团档案**：新增 `/history`（据维基百科、百度百科同福夹道词条、维基共享资源实拍），
  `/culture` 的管乐/戏剧/合唱合并为"艺术团档案"（据音乐周报 2023-12-05、学校公众号 2017-11-21 等），
  旧"校史时间轴"表格改为指向 `/history`；顶栏、侧栏资料导航、首页资料索引、`/sources`、sitemap 均已接入
- **跳转卡顿修复**：站内链接统一用 `@/components/Link`（关闭视口预取、悬停时才预取）。原先首页一屏 40 多个
  链接同时预取，跨境线路下点"新闻中心"要等约 6 秒；`/news`、`/wechat` 加了 `loading.tsx` 占位。
  **新增链接请从 `@/components/Link` 引入，不要直接用 `next/link`。** 列表圆点悬停改为 transform，避免挤动侧栏宽度

---

## 十、待办（按优先级）

1. ~~**2017 年缺口**~~：已于 2026-11-07 补入 3 条（编号 55 京景课程、56 教育年会、57 机器人智能大赛），来源均为公众号原文。2017 年上半年的媒体报道仍无可用来源。
2. **公众号正文还差约 117 篇**：标题已有，正文没吃下。用 `sogou_wap.py` 可继续采集。
3. **教职工信息（待用户拍板，尚未实施）**：
   - 可入站（机构性）：学校定位表述、2026 年招聘 17 人的学科清单、"双师双导"机制
   - 存疑：知乎称"近 50 名市区级骨干、2 名特级、1 名正高"——**无官方出处，未采用**
   - 教师个人（秦悦/全莹/赵盈/关伟）：按站点原则**未收录**
4. 首页专题卡片、`/about`、`/culture` 可继续接入新增报道。
5. 校史/艺术团未收录项：
   - **已解决（2026-11-07）**：慎独石寓意（编号67，校方团课释义：表里如一、心口如一、始终如一）、
     "中华杯"奖项等级（全国"示范乐团"，编号64，另见东城区政府供稿）、
     话剧团成立年份（2005年；2008年获评首个中学生金帆话剧团，与校方2017年"2007年"一说并存标注）
   - **仍缺来源**：校猫（多轮检索零命中，确认无公开记载）、《武林外传》同福客栈轶事、
     佟府观音碑的立碑年代与碑文、校史馆建成/开放年份

---

## 十一、常用命令

```bash
npm run dev                    # 开发（PowerShell 下用 npm.cmd run dev）
npm run build && npm run lint  # 提交前必跑
npx next start -p 3000         # 本地预览

# 推送（强制合并，见第七节；PowerShell 用 Join-Path 拼密钥路径）
$k = Join-Path $env:USERPROFILE ".ssh/id_ed25519_bj166"
$env:GIT_SSH_COMMAND = "ssh -i `"$k`""
git fetch origin && git rebase origin/main && git push origin HEAD:main

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
