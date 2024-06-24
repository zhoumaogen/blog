---
title: 随笔：在Vue中使用HTML原生组件audio的API时报错
date: 2018-07-25
sidebar: 'auto'
tags:
 - vue
 - typeScript
categories: 
 - 软件开发
 - 随笔
---

:::tip
在Vue中使用HTML原生组件audio时，用`this.$refs.audio`调用`play`方法时报错，`Property 'play' does not exist on type 'Vue[] | Element[]'.`。
:::

<!-- more -->

解决方法：

```typescript
// 获取当前录音组件实例前先判断
getAudioInstance(): HTMLAudioElement {
    if (this.$refs.audio instanceof Array) {
        return this.$refs.audio[0] as HTMLAudioElement;
    } else {
        return this.$refs.audio as HTMLAudioElement;
    }
}

// 调用audio相应API
const audio = this.getAudioInstance();
audio.play();
```
