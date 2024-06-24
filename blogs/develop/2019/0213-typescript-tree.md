---
title: 随笔：对象结构数据转树结构
date: 2019-02-13
sidebar: 'auto'
tags:
 - typescript
 - 算法
categories: 
 - 软件开发
 - 随笔
---

```javascript
/**
* 对象转为树结构
* @param list 结构列表
*/
setTreeData(list: any) {
    let temp: any = {};
    let tree = [];

    // 以对象id为序号储存到临时列表
    for (let j in list) {
      temp[list[j].structNodeId] = list[j];
      // temp[list[i].id].isLeaf = true; // 添加isLeaf属性，如果需要
    }

    // 遍历临时列表，根据需求转为树结构
    for (let i in temp) {
      // 过滤节点
      if (temp[i].type !== PERSON_NODE) {
        if (temp[temp[i].parentStructNodeId] && temp[i].structNodeId === ROOT_ID) {
          // 若该节点为根节点
          tree.push(temp[i]);
        } else {        
          // 若该节点为根节点
          // 若该节点的父节点无子节点集，为父节点添加子节点集
          if (!temp[temp[i].parentStructNodeId].children) {
            temp[temp[i].parentStructNodeId].children = [];
          }
          // 将该节点加入父节点的子节点集中
          // temp[temp[i].parentStructNodeId].isLeaf = false;      
          temp[temp[i].parentStructNodeId].children.push(temp[i]);
        }
      }
    }
    return tree;
}
```
