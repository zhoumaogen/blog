---
title: 预研：Nginx实现反向代理
date: 2019-06-10
sidebar: 'auto'
tags:
 - nginx
categories: 
 - 部署运维
 - 技术预研
---

:::tip
反向代理一词是相对于正向代理而言的。正向代理是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。
:::

<!-- more -->

## 1 概念

反向代理一词是相对于正向代理而言的。正向代理是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端，如图。

![正向代理](../images/190610-1.png)

而反向代理是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器，如图。

![反向代理](../images/190610-2.png)

`Nginx`通过对其`http/server/location `模块配置实现反向代理，进而通过`upstream `模块配置实现负载均衡。

## 2 作用

* 保证内网的安全，可以使用反向代理提供WAF功能，阻止Web攻击，大型网站，通常将反向代理作为公网访问地址，Web服务器是内网。
* 负载均衡，通过反向代理服务器来优化网站的负载

## 3 在Linux中用Nginx实现反向代理

### 3.1 环境准备

操作系统：CentOS-7(x64)

### 3.2 安装

```shell
yum install nginx
```
### 3.3 配置

进入`/etc/nginx`文件夹，编辑`nginx.conf`文件：

```shell
http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    # 虚拟主机配置，一个http中可以配置多个server
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  server.nginx.com; # 指定ip地址或者域名，多个配置之间用空格分隔
        root         /usr/share/nginx/html; # 表示整个server虚拟主机内的根目录

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /40html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
}
```

### 3.4 运行

控制台输入`nginx`命令运行nginx服务，进入`http://server.nginx.com`可访问`nginx`默认主页，也就是`server`中`root`的配置项` /usr/share/nginx/html`对应的内容

### 3.5 配置一个tomcat服务的反向代理

在`http`模块中加入`upstream`模块并配置`tomcat`服务的地址：

```shell
http {
  upstream tomcat_server {
      server 192.168.47.128:8080; # tomcat服务器地址
  }
}
```

在`http`模块的`location`子模块配置`proxy_pass`属性，指定`upstream`：

```shell
http {
  location / {
    proxy_pass http://tomcat_server; # 此tomcat_server与上文中的tomcat_server对应
  }
}
```

控制台输入`nginx -s reload`重启`nginx`服务后，浏览器进入`server.nginx.com`将会跳转到`192.168.47.128:8080`所对应的`tomcat`服务。

## 查看更多

[预研：Nginx实现负载均衡](/blogs/operations/2019/0610-nginx-balance.html)
