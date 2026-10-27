# 北京市第一六六中学（非正式网站）

基于 **Next.js (App Router) + TypeScript** 构建的北京市第一六六中学非官方资料整理站点。

站点运行在私有云虚拟机 `debian-web2`，通过 FRP 加密穿透隧道至边缘中转网关 `los-vps2`，配合 Cloudflare 灰云解析与 Let's Encrypt / ZeroSSL 自动化证书管理，由 GitHub Actions 驱动全自动 CI/CD 生产发布。

> **免责声明**：本站为非官方网站，不代表北京市第一六六中学或任何教育行政部门。页面内容仅整理自公开资料，发布日期和来源均已明确标注；不得将本站当作校务通知、招生公告或联系方式的官方发布渠道。

---

## 架构与基础设施拓扑

```
       [ 公网访客浏览器 ]
               │
               ▼ (HTTPS 443 / 域名: bj166zx.cn & www.bj166zx.cn)
     [ Cloudflare DNS ] (灰云 DNS-Only，指向 los-vps2: 23.185.168.190)
               │
               ▼
    [ 边缘网关: los-vps2 ] ─── 仅作【内网穿透中转】与【反向代理】
               │ 运行: Docker Caddy (监听 80/443 管理证书) + frps (端口 7000/22222)
               │ 严禁在此运行网站业务、Node 运行时或代码！
               ▼ (FRP 安全加密隧道穿透)
  [ 核心服务节点: debian-web2 ] ─── 真正的【网站运行主机】(PVE VM 121, 192.168.5.81)
               │ 运行: frpc (localPort: 3000 <-> remotePort: 13000)
               │ 运行: Next.js Standalone 生产容器 (127.0.0.1:3000)
               │ 目录: /opt/bj166-site/ (docker-compose.yml 托管)
```

---

## 2026-10-26 内容核对

- 新闻中心收录25条报道与文件摘要，另列84条学校认证公众号历史推送标题。
- 修正旧文中的学生姓名、竞赛项目、活动地点和艺术节届次，移除无来源扩写与假微信短链。
- 真实报道配图保留原画幅与出处，旧AI场景素材不再出现在页面中。
- 完整来源与核对边界见 [SOURCES.md](SOURCES.md)；新闻正文位于 `src/data/news.ts`，公众号标题及政策入口位于 `src/data/sources.ts`。
- 新闻列表支持关键词搜索、类别和年份筛选；原编号1—8保持稳定。
- 新增 `/wechat` 公众号档案：回溯2026年1月至10月，收录84条标题，可按月份、关键词查找。数据集中维护在 `src/data/wechat-2026.json`；本轮未取得完整文章正文。

## 展示范围更新

- 2026-10-27新增8幅原报道配图，现共13幅，涵盖校园校庆、科学交流、课程实践及艺术舞台；新增 `/photos` 校园影像。
- 学校公众号图片经“东教印象”公开转载核对出处，未批量抓取微信历史文章；图片保持原画幅，另存轻量WebP，不裁切水印。校庆照片注明2024年，未确认拍摄日期的图片只标报道日期。

- 按维护要求移除学校电话、具体地址、师资或校友个人介绍及不必要的师生姓名。
- 原联络栏目改为“关于本站”，历史路径兼容保留。
- 增补校牌、阅读、数学节、管乐、合唱、话剧和校庆报道；年份与活动时点按原文记录。

## 项目结构

```
├── .github/workflows/
│   └── deploy.yml              GitHub Actions 全自动构建、推送 GHCR 与远程部署流水线
├── src/
│   ├── app/
│   │   ├── layout.tsx          全局布局（含页眉、页脚及全局样式注入）
│   │   ├── page.tsx            首页（头条新闻、轮播图、三栏索引、图片新闻、友情链接）
│   │   ├── globals.css         全站蓝白政企风格样式
│   │   ├── about/              学校概况
│   │   ├── news/               新闻中心列表页
│   │   │   └── [id]/           新闻详情页（支持静态动态路由渲染与上一篇/下一篇）
│   │   ├── policy/             教育方针与政策索引
│   │   ├── disclosure/         信息公示与公开范围
│   │   ├── culture/            校园文化与校史时间轴
│   │   ├── photos/             校园影像与图片出处
│   │   ├── wechat/             按月检索公众号历史推送标题
│   │   ├── contact/            关于本站与资料维护说明
│   │   └── sources/            资料公开来源清单与核验边界
│   ├── components/
│   │   ├── Header.tsx          顶部工具条、校徽站头与主导航
│   │   ├── Footer.tsx          底部版权声明与栏目快速通道
│   │   └── Carousel.tsx        首页大图轮播组件
│   └── data/
│       └── news.ts             25条有来源的公开报道与文件摘要
├── public/
│   └── images/                 公开校徽、真实报道配图及未引用的旧示意素材
├── Dockerfile                  Next.js Standalone 多阶段轻量镜像构建定义
├── docker-compose.yml          生产容器编排文件
├── next.config.mjs             Next.js 运行时配置
├── tsconfig.json               TypeScript 配置
└── AGENTS.md                   服务器职责边界与团队规范（AI 必读）
```

---

## 本地开发

1. **安装依赖**：
   ```bash
   npm ci
   ```

2. **启动本地开发服务器**：
   ```bash
   npm run dev
   ```
   浏览器打开 [http://localhost:3000](http://localhost:3000) 即可实时预览。

3. **生产构建与验证**：
   ```bash
   npm run build
   ```

---

## 团队自动化部署（CI/CD）

本项目配置了完整的 GitHub Actions 流水线（`.github/workflows/deploy.yml`）：
- 只要将代码合并至 `main` 分支，GitHub Actions 将会自动：
  1. 通过 Docker Buildx 进行跨平台多阶段构建；
  2. 推送容器镜像到 GitHub Packages：`ghcr.io/ibb-official/bj166-school-site:latest`；
  3. 经由安全 SSH 隧道连接至 `debian-web2`，自动执行 `docker compose pull && docker compose up -d` 滚动更新；
  4. 触发本地健康检查探针，验证响应码 `200` 完成上线。
