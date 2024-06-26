## 5. 故障排查

### 5.1. 脑裂现象

由于某些原因，导致两台`keepalived`服务器在指定时间内，无法检测到对方存活心跳信息，从而导致互相抢占对方的资源和服务所有权，然而此时两台高可用服务器有都还存活。
可能出现的原因：
1、服务器网线松动等网络故障；
2、服务器硬件故障发生损坏现象而崩溃；
3、主备都开启了`firewalld`防火墙。

>解决方案（抢占式）：在备节点服务器上运行脚本，如果可以`ping`通主节点服务器并且备节点服务器有`VIP`就报警，让人员介入检查是否裂脑。

### 5.2. 高可用服务只针对物理服务器的问题

`keepalived`软件仅仅在对方机器宕机或`keepalived`停掉的时候才会接管业务。但在实际工作中，有业务服务停止而keepalived服务还在工作的情况，这就会导致用户访问的`VIP`无法找到对应的服务的问题。

>解决方案：`健康检查`配置增加真实服务端口检查策略。

### 5.3. 多组`keepalived`服务器在一个局域网的冲突问题

`keepalived`高可用功能是通过`VRRP`实现的，`VRRP`默认通过`IP`多播的形式实现高可用对之间的通信，如果同一个局域网内存在多组`keepalived`服务器，而又未使用专门的心跳线通信时，就会造成IP多播地址冲突问题，导致接管错乱，不同组的`keepalived`都会使用默认的`224.0.0.18`作为多播地址。

>解决方案：在同组的`keepalived`服务器所有的配置文件里将`vrrp_mcast_group`指定为独一无二的多播地址。
