---
title: 随笔：在Vue中用v-show显示某个组件时，将其滚动到div底部不生效
date: 2019-01-28
sidebar: 'auto'
tags:
 - vue
 - typescript
categories: 
 - 软件开发
 - 随笔
---

:::tip
在`Vue`中用`v-show`显示某个组件时，用`scrollTop = scrollHeight`的方法企图滚动到`div`底部,可是第一次显示不能滚动，第二次就可以。
:::

<!-- more -->

解决方法：

```typescript
// 在执行v-show=true之后执行滚动底部操作时，设置一个延迟，达到异步等待的效果
onMessageShow() {
    this.showMessage = true;
    setTimeout(() => {
      const infoBox = document.getElementsByClassName('message-container');
      infoBox[0].scrollTop = infoBox[0].scrollHeight;
    }, 100);// 这个延迟是0都可以
}
```

HTML代码结构：

```html
<template>
  <div class="message-container">
    <button @click="onMessageShow">ShowComponent</button>
    <component v-show="showMessage"></component>
  </div>
</template>
```
