# 校园网站（bj166-school-site）· 项目 Agent 规范

> 只写本仓库与设备级规范的差异。Git 纪律、worktree、冲突处理见 `~/.qoder/coder-rules/global-rules.md`。

Collaboration: collaborative
Baseline: main
Default branch: main
Release: GitHub Pages（main 分支根目录自动化部署）
Validation: 纯静态资源完整性检查（无死链、图片与脚本引用正确、凭据泄漏扫描）
Worktree: `~/项目/.wt/校园网站/<slug>`

## 这是什么

北京市第一六六中学非官方静态资料整理站点（HTML + CSS + 原生 JS），无构建步骤，通过 GitHub Pages 根目录直接部署展示。

## 页面与资源结构

```
├── index.html                  首页（轮播、公告跑马灯、三栏、图片新闻）
├── about.html                  学校概况（简介、办学情况、领导班子、机构设置）
├── news.html                   新闻中心（列表页）
├── news-1.html ~ news-8.html   8 篇新闻详情页
├── policy.html                 教育方针
├── disclosure.html             信息公示（收费、招生、校务公开、食谱）
├── culture.html                校园文化（校史、一训三风、校园风光）
├── contact.html                联系我们
├── sources.html / SOURCES.md   页面资料公开来源、核验日期与使用边界说明
├── styles.css                  全站主样式表（蓝白主题）
├── main.js                     轮播 / 日期 / 搜索演示脚本
└── images/                     图片静态资源
```

## 验证与检查说明

- **静态无编译**：本项目无 Node/Rust 构建流水线。提交前需确保所有 HTML/JS/CSS 语法正确，没有无效的相对路径死链。
- **改动范围校验**：提交前核对 `git status` 与 `git diff`，严禁将操作系统临时文件、编辑器配置或个人凭据加入版本控制。
- **凭据扫描**：确保无私钥、Token 或敏感 API Key 泄漏。

## 项目特殊限制

- 本项目为非官方资料整理站点，内容均整理自公开资料，必须遵守法律法规及版权要求，不得假冒官方权威发布渠道。
- 静态资源控制体积，图片素材注意压缩与格式规范，禁止提交无意义的超大未压缩原始文件。
- **主目录不存代码**：主目录（`~/项目/校园网站`）仅作 `.git` 元数据锚点（停留在 `_anchor` 分支），日常开发一律走 `wt new 校园网站 <slug>` 在 `~/项目/.wt/校园网站/<slug>` 中进行。

## 集成流程

- 严格遵守 `collaborative` 协作出口：所有改动走 PR（Pull Request），不得直推受保护的 `main` 分支（受设备级 pre-push 守卫保护）。
- 新任务开工前基线对齐：`git fetch origin --prune`，分支从最新的 `origin/main` 切出。
- PR 创建后按规定流程进行代码 review 与合并。
