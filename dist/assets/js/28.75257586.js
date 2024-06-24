(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{599:function(e,v,_){e.exports=_.p+"assets/img/1-1.d01c5a43.png"},689:function(e,v,_){"use strict";_.r(v);var d=_(16),a=Object(d.a)({},(function(){var e=this,v=e.$createElement,d=e._self._c||v;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h2",{attrs:{id:"_1-概览"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_1-概览"}},[e._v("#")]),e._v(" 1. 概览")]),e._v(" "),d("h3",{attrs:{id:"_1-1-keepalived是什么"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-keepalived是什么"}},[e._v("#")]),e._v(" 1.1. "),d("code",[e._v("keepalived")]),e._v("是什么?")]),e._v(" "),d("p",[d("code",[e._v("keepalived")]),e._v("是用"),d("code",[e._v("C语言")]),e._v("编写的"),d("code",[e._v("路由软件")]),e._v("。该项目的主要目的是为Linux系统或基于Linux的基础架构提供轻量的、可靠的"),d("code",[e._v("负载均衡")]),e._v("和"),d("code",[e._v("高可用")]),e._v("能力。")]),e._v(" "),d("blockquote",[d("p",[e._v("高可用(HA, High Available): 两个服务器节点启动着相同的服务，如果有一个故障，另一个自动接管，我们将将这个称之为高可用。")])]),e._v(" "),d("h3",{attrs:{id:"_1-2-keepalived解决了什么问题"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-keepalived解决了什么问题"}},[e._v("#")]),e._v(" 1.2. "),d("code",[e._v("keepalived")]),e._v("解决了什么问题?")]),e._v(" "),d("p",[e._v("负载均衡是服务虚拟化的一个很好的解决方案。设计负载均衡结构时必须特别注意两个问题：")]),e._v(" "),d("ul",[d("li",[e._v("使用"),d("code",[e._v("健康检查")]),e._v("保证真实服务器的可用性：具有负载均衡能力的服务器，提供了全局的、高可用的虚拟服务。为了提高虚拟服务的可用性，我们通过使用健康检查机制来监视每个服务器节点。")]),e._v(" "),d("li",[e._v("使用"),d("code",[e._v("故障转移")]),e._v("保证负载均衡的可用性：在使用负载均衡调度时，我们会面临虚拟服务单点故障的问题。因此，还必须使用专门的路由协议实现故障转移来保证负载均衡调度的高可用性。")])]),e._v(" "),d("p",[d("code",[e._v("keepalived")]),e._v("引入强大而健壮的"),d("code",[e._v("健康检查")]),e._v("机制，并找到"),d("code",[e._v("故障转移")]),e._v("的解决方案，去解决上述两个问题。如果有一台服务器宕机，或工作出现故障，"),d("code",[e._v("keepalived")]),e._v("将检测到，并将有故障的服务器从系统中剔除，同时使用其他服务器代替该服务器的工作，当服务器工作正常后"),d("code",[e._v("keepalived")]),e._v("自动将服务器加入到服务器群中，这些工作全部自动完成，不需要人工干涉，需要人工做的只是修复故障的服务器。")]),e._v(" "),d("h3",{attrs:{id:"_1-3-keepalived是如何解决上述问题的"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-keepalived是如何解决上述问题的"}},[e._v("#")]),e._v(" 1.3. "),d("code",[e._v("keepalived")]),e._v("是如何解决上述问题的？")]),e._v(" "),d("p",[d("code",[e._v("keepalived")]),e._v("的"),d("code",[e._v("健康检查（health-checks）")]),e._v("机制采用TCP连接请求、ICMP请求、HTTP请求等方式对负载均衡器后面的实际的服务器(通常是承载真实业务的服务器)进行保活，保证真实服务的可用性。利用"),d("code",[e._v("健康检查")]),e._v("机制，"),d("code",[e._v("keepalived")]),e._v("可以根据服务器运行状态，自适应地维护和管理负载均衡的服务器池。")]),e._v(" "),d("p",[d("code",[e._v("keepalived")]),e._v("的"),d("code",[e._v("故障转移")]),e._v("方案基于"),d("code",[e._v("VRRP")]),e._v("实现高可用性。"),d("code",[e._v("故障转移")]),e._v("主要是应用于配置了主备模式的负载均衡器，利用"),d("code",[e._v("VRRP")]),e._v("维持主备负载均衡器的心跳，当主负载均衡器出现问题时，由备负载均衡器承载对应的业务，从而在最大限度上减少流量损失，保证负载均衡的稳定性。此外，"),d("code",[e._v("keepalived")]),e._v("还实现了一组"),d("code",[e._v("VRRP")]),e._v("有限状态机的钩子，从而提供了轻量且高速的协议交互。为了提供最快的网络故障检测，"),d("code",[e._v("keepalived")]),e._v("还采用了BFD协议，"),d("code",[e._v("VRRP")]),e._v("可以通过BFD协议来驱动状态快速转换。 "),d("code",[e._v("keepalived")]),e._v("框架可以独立使用，也可以作为弹性基础架构和其它框架一起配合使用。")]),e._v(" "),d("blockquote",[d("p",[e._v("故障转移(failover): 是一种备份操作模式，当主要组件由于失效或预定关机时间的原因而无法工作时，这种模式中的系统组件（比如处理机、服务器、网络或数据库）的功能被转接到备用组件。")])]),e._v(" "),d("blockquote",[d("p",[e._v("VRRP(Virtual Router Redundancy Protocol): 虚拟路由冗余协议，解决局域网中配置静态网关出现单点失效现象的路由协议。")])]),e._v(" "),d("p",[d("code",[e._v("keepalived")]),e._v("工作在"),d("code",[e._v("TCP/IP参考模型")]),e._v("的网际互连层、传输层、应用层：")]),e._v(" "),d("p",[d("img",{attrs:{src:_(599),alt:"/images/1-1.png"}})]),e._v(" "),d("ul",[d("li",[d("p",[e._v("网际互连层（Layer3）："),d("code",[e._v("keepalived")]),e._v("通过ICMP协议向服务器集群中的每一个节点发送一个ICMP数据包(有点类似于"),d("code",[e._v("Ping")]),e._v("的功能)，如果某个节点没有返回响应数据包，那么认为该节点发生了故障，"),d("code",[e._v("keepalived")]),e._v("将报告这个节点失效，并从服务器集群中剔除故障节点。")])]),e._v(" "),d("li",[d("p",[e._v("传输层（Layer4）："),d("code",[e._v("keepalived")]),e._v("在传输层里利用了TCP协议的端口连接和扫描技术来判断集群节点的端口是否正常，比如对于常见的Web服务器"),d("code",[e._v("80")]),e._v("端口、SSH服务"),d("code",[e._v("22")]),e._v("端口，"),d("code",[e._v("keepalived")]),e._v("一旦在传输层探测到这些端口号没有数据响应和数据返回，就认为这些端口发生异常，然后强制将这些端口所对应的节点从服务器集群中剔除掉。")])]),e._v(" "),d("li",[d("p",[e._v("应用层（Layer5/6/7）："),d("code",[e._v("keepalived")]),e._v("在应用层的运行方式全面化和复杂化，用户可以通过自定义"),d("code",[e._v("keepalived")]),e._v("工作方式，例如：可以通过编写程序或者脚本来运行"),d("code",[e._v("keepalived")]),e._v("，而"),d("code",[e._v("keepalived")]),e._v("将根据用户的设定参数检测各种程序或者服务是否允许正常，如果"),d("code",[e._v("keepalived")]),e._v("的检测结果和用户设定的不一致时，"),d("code",[e._v("keepalived")]),e._v("将把对应的服务器从服务器集群中剔除。")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);