---
title: "纪念第一次成功的给kubernetes提pr"
date: 2019-11-07T23:07:11+08:00
lastmod: 2019-11-07T23:07:11+08:00
draft: true
keywords: ["kubernetes", "pull reqeust"]
description: ""
tags: ["kubernetes"]
categories: ["pull request"]
author: "Kaku Li"
---

前段时间在排查一个线上服务被限流的问题时，发下了一个k8s的bug，可以参考[这篇](http://likakuli.com/post/2019/08/21/apiserver_connectionrefused/)内容，后给社区提了一个pull request来修复这个问题，已经被采纳，随着1.16正式发布。这里来记录一下当时遇到的问题，避免后续再次不知所措。

### 问题

问题一：提交pr后提示我需要先签证书，但是我是已经签过的，最后看其他人的记录对比差异发现是我提交代码时用的username和签证书用的不一样，后修改git提交时的用户名，保持一致，最后通过。

问题二：在提了pr之后大概率会有人来反馈代码需要修改或优化的地方，这时候就需要自己修改完再重新提交，为了保持提交记录只有一条，我做了合并，但是提交时提示本地落后远程分支需要先拉去远程代码，后操作无效就把原pr close，然后开了新的pr，后来被告知可以强推，不必重新另起pr，这也反映出我对于git操作不熟

问题三：由于提交的内容是client-go中的，但是client-go是在vendor里的，client-go项目也有提示，不接受直接在此项目中提pr，需要在k8s项目中提，这里需要注意一下，k8s项目中既有vendor也有staging文件夹，其实staging就是做了一个软连，直接修改vendor里的client-go的代码即可，k8s会自动把staging对应的文件夹更新到各自应对应的项目中，如client-go

问题四：提pr时可能不止需要改代码，还需要修改代码无关的文件，这些文件在编译、测试时会用到，如果没有改的话，在最后的check中可能会失败，失败了再改也来得及

问题五：当所有的check都过了之后，你可能看到自己的pr还是没有被合进去，不要着急，因为可能是在排队，和pr的创建时间，优先级有关，所以尽早提尽早被合进去，可以通过[这里](https://prow.k8s.io/tide)查看当前进度，我的pr就是排了两天队才合进去的

### 总结

第一次提pr被接受，当时还有一些小兴奋，也能感觉出来其中的不易，只是修改一个这么简单的功能就这么麻烦的流程，也需要自己投入很多精力，不过还是很有成就感的，虽然提的很简单。后续还是需要多投入一点，之前一味地索取，现在有能力了也该回馈一下社区了
