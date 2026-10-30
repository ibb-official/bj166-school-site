# 校园网站（bj166-school-site）· 项目规范与架构守则

> 本文件是所有参与本仓库的协作者与 AI 智能体必须遵守的系统架构规范与操作纪律。
> 设备级通用 Git 规范见 `~/.qoder/coder-rules/global-rules.md`。

Collaboration: collaborative
Baseline: main
Default branch: main
Release: Docker / GitHub Packages (GHCR) -> sofia-vps 生产自动化部署
Validation: npm run build & Dockerfile 容器化检查
Worktree: `~/项目/.wt/校园网站/<slug>`

---

## ⚠️ 生产主机职责与边界规范（严禁混淆！）

本站点自 **2026-10-30** 起改为**单主机部署**：应用容器、反向代理与 TLS 终结全部落在同一台公网 VPS 上，不再经过内网穿透中转。

### 生产主机 `sofia-vps` (hostname `r-server89187-mls`，公网 IP: 108.165.233.143)
- **唯一角色**：**站点的运行服务器与流量入口**。
- **运行组件**：
  - `Docker` & `docker compose`：运行 Next.js 生产容器 `bj166-web`（绑定在 `127.0.0.1:3000`，固定网络 `bj166-site_default` / `172.20.1.0/24`）。
  - `edge-caddy`（Docker Caddy，监听 80/443）：负责 `bj166zx.cn` 与 `www.bj166zx.cn` 的反向代理与证书签发，规则为 `reverse_proxy 127.0.0.1:3000`。
- **应用部署目录**：`/opt/bj166-site/`（存放 `docker-compose.yml`；`docker-compose.yml.bak-pre-netfix` 是改网段前的留档）。
- **日常运维**：
  - 查看站点运行状态：`docker ps` / `docker logs -f bj166-web`
  - 检查本地健康响应：`curl -I http://127.0.0.1:3000`
  - 重载反向代理：`docker exec edge-caddy caddy reload --config /etc/caddy/Caddyfile`
- **【严禁操作】**：
  - ❌ **禁止把 `bj166-web` 的 3000 端口绑定到公网**，对外只能经 Caddy 的 443；容器端口映射必须保持 `127.0.0.1:3000:3000`。
  - ❌ **禁止把本站点的业务代码、构建产物放到其它主机上运行**；`los-vps2` 与其它 VPS 均不是部署目标。
  - ❌ **禁止改动 `sofia-vps` 上共用的 new-api / 账号池相关配置文件**。

### 历史拓扑（已废弃，2026-10-30 起不再适用）
- `debian-web2`（PVE VM 121，内网 IP 192.168.5.81）：已于 2026-10-30 在 pve1 上 `qm destroy 121 --purge` 销毁，VMID 与 IP 均不再存在，**不得再作为部署目标、不得复用 VMID 121**。销毁前该容器被 Next.js Server Actions 反序列化 RCE 植入过（`/var/tmp/.guard` 回连 `85.121.176.90`）。
- `los-vps2`（23.185.168.190）：曾承担 `frps` 中转与 `api-direct-caddy` 反代；本站点已退出该链路，其 `Caddyfile` 中残留的 `bj166zx.cn` → `172.18.0.1:13000` 规则属于待清理项。

---

## 网络链路与流量拓扑

```
[ 客户端浏览器 ]
       │
       ▼ (HTTPS 443 / 域名解析: bj166zx.cn & www.bj166zx.cn)
[ Cloudflare DNS ] (灰云 DNS-Only，指向 sofia-vps: 108.165.233.143)
       │
       ▼
[ sofia-vps (应用服务器 + 流量入口) ]
       │ 运行: edge-caddy (监听 80/443 / TLS 证书终结)
       │ Caddyfile 规则: reverse_proxy 127.0.0.1:3000
       │ 运行: Next.js Standalone 生产容器 bj166-web (127.0.0.1:3000)
```

---

## 团队自动化部署（GitHub Actions）

所有团队成员对 `main` 分支的提交或合并，均会自动触发部署流水线 `.github/workflows/deploy.yml`：
1. **GitHub Runner** 构建 Next.js Docker 镜像（多阶段构建，Standalone 运行时）。
2. 将最新镜像推送到 **GitHub Packages (ghcr.io/ibb-official/bj166-school-site:latest)**。
3. 通过预配置的 SSH Secret（`VM_SSH_HOST` / `VM_SSH_PORT` / `VM_SSH_USER` / `VM_SSH_KEY`）直连 `sofia-vps`。流水线会先校验目标机 `hostname` 是否为 `r-server89187-mls`，机器不对就直接失败，随后自动执行：
   ```bash
   cd /opt/bj166-site
   docker compose pull
   docker compose up -d --remove-orphans
   ```
4. 执行本地探针健康检查，状态码 200 判定部署成功。

---

## 本地开发与代码规范

- **框架**：Next.js (App Router) + TypeScript + 原生 CSS / Tailwind。
- **页面与数据分离**：文章数据位于 `src/data/news.ts`，方便快速增删公开报道。
- **静态资源规范**：所有图片放入 `public/images/`，不得提交超大未压缩原始文件。
- **合规说明**：本项目为非官方资料整理站点，内容均整理自公开资料，必须遵守法律法规及版权要求，不得假冒官方权威发布渠道。
