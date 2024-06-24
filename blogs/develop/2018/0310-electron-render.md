---
title: 随笔：Typescript渲染进程使用Electron报错的问题
date: 2018-03-10
sidebar: 'auto'
tags:
 - electron
 - typeScript
categories: 
 - 软件开发
 - 随笔
---

:::tip
`typescript`在渲染进程中调用`electron`的`API`，报错`xxx is not a function`或`electron is undefined`。
:::

<!-- more -->

解决办法：

```typescript
// 在调用electron相关函数之前加上环境判断
if (typeof window !== 'undefined' && typeof (window as any)['electron'] !== 'undefined') {
    (window as any)['electron'].ipcRenderer.on(channel, callback);
}
```
