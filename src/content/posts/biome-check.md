---
title: Firefly 模版更新配置时可能出现的 CQ 审查不通过问题
published: 2026-07-20 16:04:28
description: 简要介绍 Firefly 模版在更新配置后 push 到远程仓库，部署时  Code Quality 检查不通过的问题和解决方案。
pinned: false
tags:
  - 博客
  - 模板
  - 部署
category: 博客指南
draft: false
author: molju
slug: biome-check
---
在使用 Firefly （或者其他Astro模版）部署个人博客时，为了追求高度个性化，我们时常会对配置文件作出大幅度修改。然而随之而来的问题便是提交推送后 Github 上 Code Quality 的 Action 常常会因不规范的更改而 Fail，尤其是 Run Biome 这一步。![image.png](https://img.molju.com/file/1784535491477_image.png)
此时我们当然可以点击右上角 `Fix with Copilot` ，然而 Github 实在抽风，Education 给的 Pro 优惠也越来越不够用，额度越来越少，因此学会自己解决是十分必要的。
## 最简单的办法
打开本地克隆的仓库，在终端运行以下两行代码即可：
```bash
npx @biomejs/biome format ./src --write
npx @biomejs/biome ci ./src
```

在一串长长的 Output 之后，代码就 fix 完毕了。此时再次推送：
```bash
git add .
git commit -m "fix: cq"
git push
```

再次检查 Action 运行情况，大概率可以正常通过。