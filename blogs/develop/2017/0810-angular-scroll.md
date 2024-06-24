---
title: 随笔：Angular实现文本框自动滚动显示最后一条
date: 2017-08-10
sidebar: 'auto'
tags:
 - angular
 - typeScript
categories: 
 - 软件开发
 - 随笔
---

:::tip
在文本框作为聊天框或者输出日志时，需求为在div中自动显示最后一条
:::

#### html代码：

```html​
<div class="logger" #scroll>
  <div *ngIf="messageService.messages.length">
    <h6>Log:</h6>
    <div *ngFor='let message of messageService.messages'>{{message}}</div>
  </div>
</div>​
```

#### component组件typescript代码：

```typescript
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'app/core/services/message.service';
import { AfterViewChecked, ViewChild} from '@angular/core';

@Component({
  selector: 'ow-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit, AfterViewChecked {

  @ViewChild('scroll') myScrollContainer;

  constructor(private messageService: MessageService) {
  }

  scrollToBottom() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnInit() {
  }
}
```
