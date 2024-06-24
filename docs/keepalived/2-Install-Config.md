## 2. 安装与配置

### 2.1. 安装

1. CentOS的yum安装：

```
$ yum install keepalived
```

2. 基于Linux的源码安装：

[keepalived下载](https://www.keepalived.org/download.html)

```shell
# 依赖库：gcc、openssl-devel、libnl、libnl-devel、libnfnetlink-devel

$ ./configure
$ make
$ make install
```

### 2.2. 默认配置

安装完成后，在`/etc/keepalived`文件夹中，`keepalived.conf`是`keepalived`自动生成的默认配置文件，文件配置项说明如下：

```conf
! Configuration File for keepalived

global_defs {    # 全局参数定义
   notification_email {    # 定义通告邮件用户地址
     acassen@firewall.loc    #接收邮件地址
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc    # 定义发送邮件地址
   smtp_server 192.168.200.1  #邮件服务器
   smtp_connect_timeout 30    #连接超时
   router_id LVS_DEVEL    #当前路由设备ID
}

vrrp_script check_nginx {   # 脚本定义
    script "/etc/keepalived/check_keepalived.sh"   # 脚本位置
    interval 2  # 执行频率
    weight -5 # 根据脚本返回值调整priority
}

vrrp_instance VI_1 {    # 定义VRRP实例
    state MASTER    # 状态参数：MASTER/BACKUP(主/备)
    interface ens33    # 虚拟IP放置的的网卡接口
    virtual_router_id 51    #设置虚拟路由集群ID，同一个集群内的ID要一致
    priority 100    # 优先级设置，数值越大优先级越高
    advert_int 1    # 主备通讯时间间隔
    nopreempt    # 非抢占式
    authentication {    # 验证相关，同一组服务器配置需相同
        auth_type PASS    #PASS|AH
        auth_pass 1111
    }
    virtual_ipaddress {  # 虚拟IP地址
        192.168.200.16
        192.168.200.17
        192.168.200.18
    }
    track_script {
        check_nginx
    }
}

virtual_server 192.168.1.201 80 { #虚拟服务器配置块
	  delay_loop 3 #轮询健康检查时间间隔
	  lb_algo rr #负载均衡算法，rr,wrr,lc.wlc.lblc,sh,dh,默认wlc
    lb_kind DR #负载均衡模式，NAT,DR,TUN
	  protocol TCP #协议
	  sorry_server 127.0.0.1 8001 # 宕机反馈页，real_server宕机后跳转
	  real_server 192.168.1.107 80 { #真实服务器配置块
   	  weight 1 #权重
   	  HTTP_GET { #健康检测方式HTTP_GET,SSL_GET,TCP_CHECK,SMTP_CHECK,MISC_CHECK
   	    	url {
   	    		path / #请求主页信息，可以自定义一个页面，专用做健康检测
   	    		status_code 200	#判断健康反馈码
   	    	}
   	    	connect_timeout 3 #检测超时时长
   	    	nb_get_retry 3 #重试次数
   	    	delay_before_retry 3 #延时时间，三秒检测一次，失败后，延时三秒后再次检测，失败三次后，判断为下线状态
   		}
   	}
}
```

### 2.3. 抢占式与非抢占式

* 抢占式：`MASTER`从故障中恢复后，会将`VIP`从`BACKUP`节点中抢占过来。`keepalived`组中服务器将状态`state`分别配置为`MASTER`、`BACKUP`，但`keepalived`启动后，优先级`priority`配置高的先成为主服务器，拥有`VIP`。

* 非抢占式：之前的`MASTER`从故障中恢复后，不抢占由`BACKUP`升级为新的`MASTER`后的`VIP`。要设置非抢占式，除了增加`nopreempt`选项外，`keepalived`组中服务器要将状态`state`都配置为`BACKUP`，先启动`keepalived`的服务器最先成为主服务器，拥有`VIP`，与优先级`priority`配置无关。
