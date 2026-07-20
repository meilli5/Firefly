---
title: 博客音乐播放器配置
published: 2026-07-20 21:19:17
description: 通过调用 Cookie 使 meting 可以播放 QQMusic 中的VIP 歌曲。
pinned: true
tags:
  - 博客
  - 音乐
  - 部署
category: 博客指南
draft: false
author: molju
slug: meting-config
---
## 问题背景
Firefly 作为一款强大的个人博客模版，赢得了许多人的青睐。然而本人在搭建个人博客时发现了一个问题：该模版能够调用 [meting](https://github.com/metowolf/meting) 的 API 框架实现众多平台歌曲的播放，但对于一些平台的 VIP 歌曲却无能为力。博客目前似乎能够通过配置 `auth` 解析网易云音乐的 VIP 歌曲，但作为一个使用 QQ音乐接近十年的忠实用户以及**没有音乐就会死**之人，不能解析 QQMusic 的 VIP 歌曲令人多么痛心疾首口牙！为了避免去死，我便借助 AI 之力开发了一套方案，聊供参考。

::github{repo="metowolf/Meting"}