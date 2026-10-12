# 校园网站（bj166-school-site）· 项目规范与架构守则

> 本文件是所有参与本仓库的协作者与 AI 智能体必须遵守的系统架构规范与操作纪律。
> 设备级通用 Git 规范见 `~/.qoder/coder-rules/global-rules.md`。

Collaboration: collaborative
Baseline: main
Default branch: main
Release: Docker / GitHub Packages (GHCR) -> debian-web2 生产自动化部署
Validation: npm run build & Dockerfile 容器化检查
Worktree: `~/项目/.wt/校园网站/<slug>`

---

## ⚠️ 核心服务器职责与边界规范（严禁混淆！）

本站点采用**内网安全托管 + 边缘网关中转穿透**的生产拓扑。所有协作者及 AI 必须彻底理清两台服务器的分工：

### 1. 边缘节点 `los-vps2` (公网 IP: 23.185.168.190)
- **唯一角色**：**内网穿透中转站与反向代理网关**。
- **运行组件**：`frps`（监听 7000 服务端端口，接收 debian-web2 连接）+ `api-direct-caddy`（Docker Caddy，监听 80/443，负责 `bj166zx.cn` 的反向代理与 TLS 终结）。
- **【严禁操作】**：
  - ❌ **绝对禁止在 `los-vps2` 上运行 Next.js 站点、Node.js 运行时或前端应用服务！**
  - ❌ **绝对禁止将本站点的业务代码、构建产物、Node 依赖放置在 `los-vps2` 上！**
  - ❌ **绝对禁止改动 `los-vps2` 上共用的 new-api / 账号池相关配置文件！**
  - `los-vps2` 上的 `Caddyfile` 仅允许添加/修改 `bj166zx.cn` 的 `reverse_proxy` 转发规则（指向内网穿透映射端口 `172.18.0.1:13000`）。

### 2. 实际业务主机 `debian-web2` (PVE VM 121, 内网 IP: 192.168.5.81)
- **唯一角色**：**站点的真正运行服务器**。
- **运行组件**：
  - `Docker` & `docker compose`：运行 Next.js 生产容器 `bj166-web`（绑定在 `127.0.0.1:3000`）。
  - `frpc`（systemd 守护进程）：通过 TLS 穿透连接到 `los-vps2:7000`，并将 `127.0.0.1:3000` 映射至 `los-vps2` 的 `13000` 端口。
- **应用部署目录**：`/opt/bj166-site/`（存放 `docker-compose.yml`）。
- **日常运维**：
  - 查看站点运行状态：`docker ps` / `docker logs -f bj166-web`
  - 检查本地健康响应：`curl -I http://127.0.0.1:3000`
  - 重启穿透服务：`systemctl restart frpc`

---

## 网络链路与流量拓扑

```
[ 客户端浏览器 ]
       │
       ▼ (HTTPS 443 / 域名解析: bj166zx.cn)
[ Cloudflare DNS ] (灰云 DNS-Only，指向 los-vps2: 23.185.168.190)
       │
       ▼
[ los-vps2 (中转站) ]
       │ 运行: Docker Caddy (监听 443 / SSL 证书终结)
       │ Caddyfile 规则: reverse_proxy 172.18.0.1:13000
       ▼ (通过 FRP 安全隧道加密传输)
[ debian-web2 (应用服务器) ]
       │ 运行: frpc (localPort: 3000 <-> remotePort: 13000)
       │ 运行: Next.js Standalone 生产容器 (127.0.0.1:3000)
```

---

## 团队自动化部署（GitHub Actions）

所有团队成员对 `main` 分支的提交或合并，均会自动触发部署流水线 `.github/workflows/deploy.yml`：
1. **GitHub Runner** 构建 Next.js Docker 镜像（多阶段构建，Standalone 运行时）。
2. 将最新镜像推送到 **GitHub Packages (ghcr.io/ibb-official/bj166-school-site:latest)**。
3. 通过预配置的 SSH Secret 连接到 `debian-web2`，自动执行：
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
