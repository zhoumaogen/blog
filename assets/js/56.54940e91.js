(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{709:function(e,v,_){"use strict";_.r(v);var a=_(16),t=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"_5-故障排查"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-故障排查"}},[e._v("#")]),e._v(" 5. 故障排查")]),e._v(" "),_("h3",{attrs:{id:"_5-1-脑裂现象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-脑裂现象"}},[e._v("#")]),e._v(" 5.1. 脑裂现象")]),e._v(" "),_("p",[e._v("由于某些原因，导致两台"),_("code",[e._v("keepalived")]),e._v("服务器在指定时间内，无法检测到对方存活心跳信息，从而导致互相抢占对方的资源和服务所有权，然而此时两台高可用服务器有都还存活。\n可能出现的原因：\n1、服务器网线松动等网络故障；\n2、服务器硬件故障发生损坏现象而崩溃；\n3、主备都开启了"),_("code",[e._v("firewalld")]),e._v("防火墙。")]),e._v(" "),_("blockquote",[_("p",[e._v("解决方案（抢占式）：在备节点服务器上运行脚本，如果可以"),_("code",[e._v("ping")]),e._v("通主节点服务器并且备节点服务器有"),_("code",[e._v("VIP")]),e._v("就报警，让人员介入检查是否裂脑。")])]),e._v(" "),_("h3",{attrs:{id:"_5-2-高可用服务只针对物理服务器的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-高可用服务只针对物理服务器的问题"}},[e._v("#")]),e._v(" 5.2. 高可用服务只针对物理服务器的问题")]),e._v(" "),_("p",[_("code",[e._v("keepalived")]),e._v("软件仅仅在对方机器宕机或"),_("code",[e._v("keepalived")]),e._v("停掉的时候才会接管业务。但在实际工作中，有业务服务停止而keepalived服务还在工作的情况，这就会导致用户访问的"),_("code",[e._v("VIP")]),e._v("无法找到对应的服务的问题。")]),e._v(" "),_("blockquote",[_("p",[e._v("解决方案："),_("code",[e._v("健康检查")]),e._v("配置增加真实服务端口检查策略。")])]),e._v(" "),_("h3",{attrs:{id:"_5-3-多组keepalived服务器在一个局域网的冲突问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-多组keepalived服务器在一个局域网的冲突问题"}},[e._v("#")]),e._v(" 5.3. 多组"),_("code",[e._v("keepalived")]),e._v("服务器在一个局域网的冲突问题")]),e._v(" "),_("p",[_("code",[e._v("keepalived")]),e._v("高可用功能是通过"),_("code",[e._v("VRRP")]),e._v("实现的，"),_("code",[e._v("VRRP")]),e._v("默认通过"),_("code",[e._v("IP")]),e._v("多播的形式实现高可用对之间的通信，如果同一个局域网内存在多组"),_("code",[e._v("keepalived")]),e._v("服务器，而又未使用专门的心跳线通信时，就会造成IP多播地址冲突问题，导致接管错乱，不同组的"),_("code",[e._v("keepalived")]),e._v("都会使用默认的"),_("code",[e._v("224.0.0.18")]),e._v("作为多播地址。")]),e._v(" "),_("blockquote",[_("p",[e._v("解决方案：在同组的"),_("code",[e._v("keepalived")]),e._v("服务器所有的配置文件里将"),_("code",[e._v("vrrp_mcast_group")]),e._v("指定为独一无二的多播地址。")])])])}),[],!1,null,null,null);v.default=t.exports}}]);