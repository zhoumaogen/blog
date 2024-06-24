(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{629:function(s,e,a){s.exports=a.p+"assets/img/4-01.a84ce9de.png"},630:function(s,e,a){s.exports=a.p+"assets/img/arp.eae9d929.png"},631:function(s,e,a){s.exports=a.p+"assets/img/4-1.6136f28c.png"},685:function(s,e,a){"use strict";a.r(e);var t=a(16),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_4-用例-keepalived-lvs高可用负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-用例-keepalived-lvs高可用负载均衡"}},[s._v("#")]),s._v(" 4. 用例："),t("code",[s._v("keepalived")]),s._v("+"),t("code",[s._v("LVS")]),s._v("高可用负载均衡")]),s._v(" "),t("h3",{attrs:{id:"_4-1-lvs简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-lvs简介"}},[s._v("#")]),s._v(" 4.1. "),t("code",[s._v("LVS")]),s._v("简介")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("LVS")]),s._v("部分术语定义：")]),s._v(" "),t("p",[s._v("Real server: A real server hosts the application accessed by client requests.")]),s._v(" "),t("p",[s._v("Server pool: A farm of real servers.")]),s._v(" "),t("p",[s._v("Virtual server: The access point to a Server pool.")]),s._v(" "),t("p",[s._v("Virtual Service: A TCP/UDP service associated with the VIP.")]),s._v(" "),t("p",[s._v("VIP: The Virtual IP is the IP address that will be accessed by all the clients. The clients only access this IP address.")]),s._v(" "),t("p",[s._v("RIP: The IP address of real server.")])]),s._v(" "),t("p",[t("code",[s._v("Linux虚拟服务器(LVS, Linux Virtual Server)")]),s._v("是由章文嵩博士主导的开源Linux服务器集群系统，是中国国内最早出现的自由软件项目之一，目前"),t("code",[s._v("LVS")]),s._v("已经被集成到Linux内核模块中。")]),s._v(" "),t("p",[t("code",[s._v("keepalived")]),s._v("依靠"),t("code",[s._v("Linux虚拟服务器")]),s._v("的核心模块实现了"),t("code",[s._v("OSI（Open System Interconnection，开放系统互联）模型")]),s._v("传输层的负载均衡能力。")]),s._v(" "),t("h4",{attrs:{id:"三种工作模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三种工作模式"}},[s._v("#")]),s._v(" 三种工作模式：")]),s._v(" "),t("ol",[t("li",[s._v("基于"),t("code",[s._v("NAT")]),s._v("的LVS模式负载均衡：NAT（Network Address Translation）即网络地址转换，其作用是通过数据报头的修改，使得位于企业内部的私有IP地址可以访问外网，以及外部用用户可以访问位于公司内部的私有IP主机。")]),s._v(" "),t("li",[s._v("基于"),t("code",[s._v("TUN")]),s._v("的LVS负载均衡：我们知道，数据请求包往往远小于响应数据包的大小。因为响应数据包中包含有客户需要的具体数据，所以LVS（TUN）的思路就是将请求与响应数据分离，让调度器仅处理数据请求，而让真实服务器响应数据包直接返回给客户端。")]),s._v(" "),t("li",[s._v("基于"),t("code",[s._v("DR")]),s._v("的LVS负载均衡：DR（Dirct Routing）模式也叫直接路由模式，该模式中LVS依然仅承担数据的入站请求以及根据算法选出合理的真实服务器，最终由后端真实服务器负责将响应数据包发送返回给客户端。与隧道模式不同的是，DR模式要求调度器与后端服务器必须在同一个局域网内，这样客户端访问的是调度器的VIP地址，回应的源地址也依然是该VIP地址。")])]),s._v(" "),t("h4",{attrs:{id:"十种负载均衡调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十种负载均衡调度算法"}},[s._v("#")]),s._v(" 十种负载均衡调度算法：")]),s._v(" "),t("ul",[t("li",[s._v("轮询调度（Round Robin 简称'RR'）")]),s._v(" "),t("li",[s._v("加权轮询调度（Weight Round Robin 简称'WRR'）")]),s._v(" "),t("li",[s._v("最小连接调度（Least Connections 简称'LC'）")]),s._v(" "),t("li",[s._v("加权最少连接（Weight Least Connections 简称'WLC'）")]),s._v(" "),t("li",[s._v("基于局部的最少连接（Locality-Based Least Connections 简称'LBLC'）")]),s._v(" "),t("li",[s._v("带复制的基于局部性的最少连接（Locality-Based Least Connections with Replication  简称'LBLCR'）")]),s._v(" "),t("li",[s._v("目标地址散列调度（Destination Hashing 简称'DH'）")]),s._v(" "),t("li",[s._v("源地址散列调度（Source Hashing  简称'SH'）")]),s._v(" "),t("li",[s._v("最短的期望的延迟（Shortest Expected Delay 简称'SED'）")]),s._v(" "),t("li",[s._v("最少队列调度（Never Queue 简称'NQ'）")])]),s._v(" "),t("h3",{attrs:{id:"_4-2-准备环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-准备环境"}},[s._v("#")]),s._v(" 4.2. 准备环境")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("4 * 虚拟机：")]),s._v(" "),t("ul",[t("li",[s._v("内存：1GB")]),s._v(" "),t("li",[s._v("处理器：1 * 2 Core")]),s._v(" "),t("li",[s._v("存储：20GB")]),s._v(" "),t("li",[s._v("操作系统：CentOS 7")])])]),s._v(" "),t("li",[t("p",[s._v("虚拟机IP地址分配和作用如下表：")])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("名称")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("IP地址")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("作用")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("ka1")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("192.168.248.128")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("基于"),t("code",[s._v("nginx")]),s._v("静态资源托管的静态页面1（效果展示用）")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("ka2")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("192.168.248.129")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("基于"),t("code",[s._v("nginx")]),s._v("静态资源托管的静态页面2（效果展示用）")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("ka3")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("192.168.248.130")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("基于"),t("code",[s._v("LVS")]),s._v("负载均衡配置的"),t("code",[s._v("keepalived")]),s._v("主服务器")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("ka4")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("192.168.248.131")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("基于"),t("code",[s._v("LVS")]),s._v("负载均衡配置的"),t("code",[s._v("keepalived")]),s._v("备服务器")])])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(629),alt:"/images/4-01.png"}})]),s._v(" "),t("ul",[t("li",[s._v("注意事项：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\n$ systemctl stop firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭selinux，重启生效")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^SELINUX=.*/SELINUX=disabled/'")]),s._v(" /etc/sysconfig/selinux\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时间同步")]),s._v("\n$ ntpdate "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".centos.pool.ntp.org\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许组播")]),s._v("\n$ iptables -A INPUT -d "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224.0")]),s._v(".0.18 -j ACCEPT\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_4-3-配置真实服务器-real-server-的虚拟ip-vip-和arp规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-配置真实服务器-real-server-的虚拟ip-vip-和arp规则"}},[s._v("#")]),s._v(" 4.3. 配置真实服务器(Real Server)的虚拟IP(VIP)和ARP规则")]),s._v(" "),t("ol",[t("li",[s._v("命令行输入"),t("code",[s._v("ip a")]),s._v("查看IP初始信息：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ka2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v(" qdisc noqueue state UNKNOWN qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/8 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" \n       valid_lft forever preferred_lft forever\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": ens33: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc pfifo_fast state UP qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:0c:29:22:d1:3d brd ff:ff:ff:ff:ff:ff\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".248.129/24 brd "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".248.255 scope global dynamic ens33\n       valid_lft 1297sec preferred_lft 1297sec\n    inet6 fe80::dc21:6770:bc26:68ad/64 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" \n       valid_lft forever preferred_lft forever\n    inet6 fe80::41d7:702a:97de:24a1/64 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" tentative dadfailed \n       valid_lft forever preferred_lft forever\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("输入以下命令增加虚拟"),t("code",[s._v("IP")]),s._v("和路由：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" lo:0 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".248.200 netmask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.255\n$ route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -host "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".248.200 dev lo:0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("修改"),t("code",[s._v("ARP")]),s._v("设置：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("net.ipv4.conf.all.arp_ignore "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅当ARP目标IP地址是传入接口上配置的本地地址时才回复")]),s._v("\nnet.ipv4.conf.all.arp_announce "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 始终为此ARP目标使用最佳的本地地址。 在这种模式下，我们将忽略IP数据包中的源地址，并尝试选择我们希望与目标主机进行对话的本地地址")]),s._v("\nnet.ipv4.conf.default.arp_ignore "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nnet.ipv4.conf.default.arp_announce "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nnet.ipv4.conf.lo.arp_ignore "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nnet.ipv4.conf.lo.arp_announce "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("blockquote",[t("p",[s._v("ARP：Address Resolution Protocol，地址解析协议，是根据IP地址获取物理地址的一个TCP/IP协议。\narp_ignore:  INTEGER Define different modes for sending replies in response to received ARP requests that resolve local target IP addresses\narp_announce:  INTEGER Define different restriction levels for announcing the local source IP address from IP packets in ARP requests sent on interface")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(630),alt:"/images/arp.png"}})]),s._v(" "),t("ol",[t("li",[s._v("命令行输入"),t("code",[s._v("ip a")]),s._v("查看修改后的IP信息：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@ka2 ~]# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet 192.168.248.200/32 scope global lo:0\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host \n       valid_lft forever preferred_lft forever\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000\n    link/ether 00:0c:29:22:d1:3d brd ff:ff:ff:ff:ff:ff\n    inet 192.168.248.129/24 brd 192.168.248.255 scope global dynamic ens33\n       valid_lft 1096sec preferred_lft 1096sec\n    inet6 fe80::dc21:6770:bc26:68ad/64 scope link \n       valid_lft forever preferred_lft forever\n    inet6 fe80::41d7:702a:97de:24a1/64 scope link tentative dadfailed \n       valid_lft forever preferred_lft forever\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"_4-4-配置主备服务器keepalived的lvs设置-测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-配置主备服务器keepalived的lvs设置-测试"}},[s._v("#")]),s._v(" 4.4. 配置主备服务器keepalived的LVS设置，测试：")]),s._v(" "),t("ol",[t("li",[s._v("命令行输入"),t("code",[s._v("vi /etc/keepalived/keepalived.conf")]),s._v("修改配置如下：")])]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("! Configuration File for keepalived\n# ka3的state配置为MASTER，ka4配置为BACKUP\n\nglobal_defs {\n   router_id LVS_DEVEL\n}\n\nvrrp_instance VI_1 {\n    state BACKUP\n    interface ens33\n    virtual_router_id 51\n    priority 100\n    advert_int 1\n    authentication {\n        auth_type PASS\n        auth_pass 1111\n    }\n    virtual_ipaddress {\n        192.168.248.200/24 dev ens33 label ens33:1\n    }\n}\n# 定义对外提供服务的LVS的VIP以及port\nvirtual_server 192.168.248.200 80 {\n    delay_loop 6 # 设置健康检查时间，单位是秒\n    lb_algo rr # 设置负载调度的算法为rr,可选参数有wrr,lc.wlc.lblc,sh,dh,默认wlc\n    lb_kind DR # 设置LVS实现负载的机制，有NAT、TUN、DR三个模式\n    nat_mask 255.255.255.0\n    persistence_timeout 3 #指定时间内，同ip的请求会转发到同一个服务\n    protocol TCP\n    real_server 192.168.248.128 80 {  # 指定real server1的IP地址\n        weight 3   # 配置节点权值，数字越大权重越高\n        TCP_CHECK {\n          connect_timeout 10\n          nb_get_retry 3\n          delay_before_retry 3\n          connect_port 80\n        }\n    }\n    real_server 192.168.248.129 80 {  # 指定real server2的IP地址\n        weight 3  # 配置节点权值，数字越大权重越高\n        TCP_CHECK {\n          connect_timeout 10\n          nb_get_retry 3\n          delay_before_retry 3\n          connect_port 80\n        }\n     }\n}\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("启动"),t("code",[s._v("ka1")]),s._v("、"),t("code",[s._v("ka2")]),s._v("的"),t("code",[s._v("nginx")]),s._v("，以显示静态页面：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ systemctl start nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("启动"),t("code",[s._v("ka3")]),s._v("、"),t("code",[s._v("ka4")]),s._v("的"),t("code",[s._v("keepalieved")]),s._v("，以启动高可用负载均衡：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ systemctl start keepalived\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("查看主服务器的"),t("code",[s._v("IP")]),s._v("信息，虚拟IP地址"),t("code",[s._v("192.168.248.200")]),s._v("已"),t("code",[s._v("漂移")]),s._v("到该服务器：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@ka3 ~]# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host \n       valid_lft forever preferred_lft forever\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000\n    link/ether 00:0c:29:20:5b:61 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.248.130/24 brd 192.168.248.255 scope global dynamic ens33\n       valid_lft 1044sec preferred_lft 1044sec\n    inet 192.168.248.200/24 scope global secondary ens33:1\n       valid_lft forever preferred_lft forever\n    inet6 fe80::b5bd:569f:3e1a:b773/64 scope link tentative dadfailed \n       valid_lft forever preferred_lft forever\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("浏览器访问虚拟"),t("code",[s._v("IP")]),s._v("地址"),t("code",[s._v("192.168.248.200")]),s._v("，可路由到"),t("code",[s._v("192.168.248.128")]),s._v("、"),t("code",[s._v("192.168.248.129")]),s._v("页面：")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(631),alt:"/images/4-1.png"}})]),s._v(" "),t("ol",[t("li",[s._v("关闭主服务器虚拟机"),t("code",[s._v("ka3")]),s._v("电源，在"),t("code",[s._v("ka4")]),s._v("上输入"),t("code",[s._v("ip a")]),s._v("查看IP信息，可以看到虚拟"),t("code",[s._v("IP")]),s._v("已"),t("code",[s._v("漂移")]),s._v("到网口上：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ka4 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v(" qdisc noqueue state UNKNOWN qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/8 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" \n       valid_lft forever preferred_lft forever\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": ens33: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc pfifo_fast state UP qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:0c:29:20:5b:61 brd ff:ff:ff:ff:ff:ff\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".248.131/24 brd "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".248.255 scope global dynamic ens33\n       valid_lft 1532sec preferred_lft 1532sec\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".248.200/24 scope global secondary ens33:1\n       valid_lft forever preferred_lft forever\n    inet6 fe80::b5bd:569f:3e1a:b773/64 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" \n       valid_lft forever preferred_lft forever\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("浏览器访问虚拟IP地址"),t("code",[s._v("192.168.248.200")]),s._v("，仍可以路由到"),t("code",[s._v("192.168.248.128")]),s._v("、"),t("code",[s._v("192.168.248.129")]),s._v("页面，至此，"),t("code",[s._v("keepalived")]),s._v("+"),t("code",[s._v("LVS")]),s._v("高可用负载均衡试验完毕！")])]),s._v(" "),t("h3",{attrs:{id:"_4-5-lvs管理工具ipvsadm的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-lvs管理工具ipvsadm的使用"}},[s._v("#")]),s._v(" 4.5. "),t("code",[s._v("LVS")]),s._v("管理工具"),t("code",[s._v("ipvsadm")]),s._v("的使用：")]),s._v(" "),t("ul",[t("li",[s._v("安装")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ipvsadm -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("查看当前配置的虚拟服务和各个真实服务的权重：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@ka3 ~]# ipvsadm -Ln\nIP Virtual Server version 1.2.1 (size=4096)\nProt LocalAddress:Port Scheduler Flags\n  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  192.168.248.200:80 rr\n  -> 192.168.248.128:80           Route   3      0          0         \n  -> 192.168.248.129:80           Route   3      0          0    \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("查看"),t("code",[s._v("IPVS")]),s._v("模块的转发情况统计：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@ka3 ~]# ipvsadm -Ln --stats\nIP Virtual Server version 1.2.1 (size=4096)\nProt LocalAddress:Port               Conns   InPkts  OutPkts  InBytes OutBytes\n  -> RemoteAddress:Port\nTCP  192.168.248.200:80                  3       18        0     3448        0\n  -> 192.168.248.128:80                  1       13        0     3188        0\n  -> 192.168.248.129:80                  2        5        0      260        0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("查看"),t("code",[s._v("LVS")]),s._v("的超时时间")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@ka3 ~]# ipvsadm -L --timeout\nTimeout (tcp tcpfin udp): 900 120 300\n[root@localhost html]# ipvsadm --set 1 10 300\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("连接超时时间设置")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("TCP的连接超时时间")]),s._v("配置最好和"),t("code",[s._v("keepalived")]),s._v("配置中的"),t("code",[s._v("persistence_timeout")]),s._v("保持一致。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost ~]# ipvsadm --set 3 10 300\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);