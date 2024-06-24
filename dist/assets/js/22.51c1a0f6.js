(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{496:function(s,t,a){s.exports=a.p+"assets/img/190610-3.399270d1.png"},582:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("通过反向代理服务器来优化网站的负载，将服务器接收到的请求按照规则分发的过程，称为负载均衡。由客户端发送的、Nginx反向代理服务器接收到的请求数量，就是负载量，请求数量按照一定的规则进行分发到不同的服务器处理的规则，就是一种均衡规则。")])]),s._v(" "),n("h2",{attrs:{id:"_1-概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[s._v("#")]),s._v(" 1 概念")]),s._v(" "),n("p",[s._v("通过反向代理服务器来优化网站的负载，将服务器接收到的请求按照规则分发的过程，称为负载均衡。由客户端发送的、Nginx反向代理服务器接收到的请求数量，就是负载量，请求数量按照一定的规则进行分发到不同的服务器处理的规则，就是一种均衡规则。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(496),alt:"负载均衡"}})]),s._v(" "),n("p",[s._v("负载均衡在实际项目操作过程中，有硬件负载均衡和软件负载均衡两种。硬件负载均衡也称为硬负载，如F5负载均衡，相对造价昂贵成本较高，但是数据的稳定性安全性等等有非常好的保障。考虑到成本原因，会选择使用软件负载均衡，软件负载均衡是利用现有的技术结合主机硬件实现的一种消息队列分发机制。")]),s._v(" "),n("h2",{attrs:{id:"_2-均衡规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-均衡规则"}},[s._v("#")]),s._v(" 2 均衡规则")]),s._v(" "),n("p",[n("code",[s._v("Nginx")]),s._v("支持的负载均衡调度算法方式如下：")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("weight轮询")]),s._v("（默认）：接收到的请求按照顺序逐一分配到不同的后端服务器，即使在使用过程中，某一台后端服务器宕机，nginx会自动将该服务器剔除出队列，请求受理情况不会受到任何影响。 这种方式下，可以给不同的后端服务器设置一个权重值（weight），用于调整不同的服务器上请求的分配率；权重数据越大，被分配到请求的几率越大；该权重值，主要是针对实际工作环境中不同的后端服务器硬件配置进行调整的。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("ip_hash")]),s._v("：每个请求按照发起客户端的ip的hash结果进行匹配，这样的算法下一个固定ip地址的客户端总会访问到同一个后端服务器，这也在一定程度上解决了集群部署环境下session共享的问题。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("fair")]),s._v("：智能调整调度算法，动态的根据后端服务器的请求处理到响应的时间进行均衡分配，响应时间短处理效率高的服务器分配到请求的概率高，响应时间长处理效率低的服务器分配到的请求少；结合了前两者的优点的一种调度算法。但是需要注意的是nginx默认不支持fair算法，如果要使用这种调度算法，请安装upstream_fair模块")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("url_hash")]),s._v("：按照访问的url的hash结果分配请求，每个请求的url会指向后端固定的某个服务器，可以在nginx作为静态服务器的情况下提高缓存效率。同样要注意nginx默认不支持这种调度算法，要使用的话需要安装nginx的hash软件包")])])]),s._v(" "),n("p",[n("code",[s._v("Nginx")]),s._v("的负载均衡调度算法可以在"),n("code",[s._v("http")]),s._v("模块的"),n("code",[s._v("upstream")]),s._v("中配置")]),s._v(" "),n("h2",{attrs:{id:"_3-核心配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-核心配置"}},[s._v("#")]),s._v(" 3 核心配置")]),s._v(" "),n("p",[n("code",[s._v("upstream")]),s._v("模块主要负责负载均衡的配置，通过默认的轮询调度方式来分发请求到后端服务器：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("upstream name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ip_hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定请求调度算法，默认是weight权重轮询调度，可以指定")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100:8000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分发服务器的列表配置")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100:8001 down"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# down：表示该主机暂停服务")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100:8002 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# max_fails：表示失败最大次数，超过失败最大次数暂停服务")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100:8003 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fail_timeout：表示如果请求受理失败，暂停指定的时间之后重新发起请求")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100:8004 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"查看更多"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看更多"}},[s._v("#")]),s._v(" 查看更多")]),s._v(" "),n("p",[n("RouterLink",{attrs:{to:"/blogs/operations/2019/0610-nginx-proxy.html"}},[s._v("预研：Nginx实现反向代理")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);