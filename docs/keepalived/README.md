---
title: Keepalived浅析
date: 2020-07-09
---

## Keepalived: 一种负载均衡高可用解决方案

- [1. 概览](1-Overview.html#_1-概览)
   - [1.1. `keepalived`是什么?](1-Overview.html#_1-1-keepalived是什么)
   - [1.2. `keepalived`解决了什么问题?](1-Overview.html#_1-2-keepalived解决了什么问题)
   - [1.3. `keepalived`是如何解决上述问题的？](1-Overview.html#_1-3-keepalived是如何解决上述问题的)
- [2. 安装与配置](2-Install-Config.html#_2-安装与配置)
   - [2.1. 安装](2-Install-Config.html#_2-1-安装)
   - [2.2. 默认配置](2-Install-Config.html#_2-2-默认配置)
   - [2.3. 抢占式与非抢占式](2-Install-Config.html#_2-3-抢占式与非抢占式)
- [3. 用例：keepalived高可用+nginx负载均衡](3-Case-Nginx.html#_3-用例keepalived高可用nginx负载均衡)
   - [3.1. 准备环境](3-Case-Nginx.html#_3-1-准备环境)
   - [3.2. 搭建静态页面和负载均衡器](3-Case-Nginx.html#_3-2-搭建静态页面和负载均衡器)
   - [3.3. 配置并启动keepalived](3-Case-Nginx.html#_3-3-配置并启动keepalived)
- [4. 用例：`keepalived`+`LVS`高可用负载均衡](4-Case-LVS.html#_4-用例keepalivedlvs高可用负载均衡)
   - [4.1. `LVS`简介](4-Case-LVS.html#_4-1-lvs简介)
     - [三种工作模式：](4-Case-LVS.html#三种工作模式)
     - [十种负载均衡调度算法：](4-Case-LVS.html#十种负载均衡调度算法)
   - [4.2. 准备环境](4-Case-LVS.html#_4-2-准备环境)
   - [4.3. 配置真实服务器(real server)的虚拟服务(virtual server)IP](4-Case-LVS.html#_4-3-配置真实服务器real-server的虚拟服务virtual-serverip)
   - [4.4. 配置主备服务器keepalived的LVS设置，测试：](4-Case-LVS.html#_4-4-配置主备服务器keepalived的lvs设置测试)
   - [4.5. `LVS`管理工具`ipvsadm`的使用：](4-Case-LVS.html#_4-5-lvs管理工具ipvsadm的使用)
- [5. 故障排查](5-Debug.html#_5-故障排查)
   - [5.1. 脑裂现象](5-Debug.html#_5-1-脑裂现象)
   - [5.2. 高可用服务只针对物理服务器的问题](5-Debug.html#_5-2-高可用服务只针对物理服务器的问题)
   - [5.3. 多组`keepalived`服务器在一个局域网的冲突问题](5-Debug.html#_5-3-多组keepalived服务器在一个局域网的冲突问题)
