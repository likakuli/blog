---
title: "调度器性能调优系列 - scheduler cache"
date: 2024-09-14T17:37:24+08:00
lastmod: 2024-09-14T17:37:24+08:00
draft: true
keywords: ["kube-scheduler","performace","throughput"]
description: ""
tags: ["kubernetes"]
categories: ["源码分析"]
author: "Kaku Li"
---

前一篇[调度器性能优化](https://mp.weixin.qq.com/s/Ae4EZc7M2nEgO5_WZAXUiw)做了汇总，本篇具体介绍 scheduler cache 的优化。

# 背景

调度器在每个调度周期开始时会对其 cache 生成 snapshot，以便在整个周期内拥有对集群的持久视图。CPU 性能分析结果显示，调度器在调度周期中根据 cache 生成 snapshot 的过程占用了相当大的一部分时间。

# 优化

cache 保存了集群中所有和调度相关的资源的信息，尤其是 Node，Pod

