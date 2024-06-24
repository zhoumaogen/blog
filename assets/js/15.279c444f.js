(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{605:function(s,e,a){s.exports=a.p+"assets/img/get-started-visualizer1.de97e341.png"},606:function(s,e,a){s.exports=a.p+"assets/img/app-in-browser-redis.7c317844.png"},607:function(s,e,a){s.exports=a.p+"assets/img/visualizer-with-redis.3430731d.png"},695:function(s,e,a){"use strict";a.r(e);var t=a(16),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_3-6-应用栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-应用栈"}},[s._v("#")]),s._v(" 3.6 应用栈")]),s._v(" "),t("h2",{attrs:{id:"_1-先决条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-先决条件"}},[s._v("#")]),s._v(" 1. 先决条件")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.docker-cn.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装 Docker 版本 1.13 或更高版本"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("li",[s._v("按照"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/part3/#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[s._v("第 3 部分：先决条件"),t("OutboundLink")],1),s._v("中所述，获取 "),t("a",{attrs:{href:"https://docs.docker-cn.com/compose/overview/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Compose"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("li",[s._v("按照"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/part4/#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[s._v("第 4 部分：先决条件"),t("OutboundLink")],1),s._v("中所述，获取 "),t("a",{attrs:{href:"https://docs.docker-cn.com/machine/overview/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Machine"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("li",[s._v("阅读"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/",target:"_blank",rel:"noopener noreferrer"}},[s._v("第 1 部分"),t("OutboundLink")],1),s._v("中的新用户导引。")]),s._v(" "),t("li",[s._v("在"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/part2/",target:"_blank",rel:"noopener noreferrer"}},[s._v("第 2 部分"),t("OutboundLink")],1),s._v("中了解如何创建容器。")]),s._v(" "),t("li",[s._v("确保您已发布通过"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/part2/#share-your-image",target:"_blank",rel:"noopener noreferrer"}},[s._v("将其推送到镜像库"),t("OutboundLink")],1),s._v("创建的 "),t("code",[s._v("friendlyhello")]),s._v(" 镜像。我们将在此处使用该共享镜像。")]),s._v(" "),t("li",[s._v("确保您的镜像充当已部署的容器。运行以下命令，并填写 "),t("code",[s._v("username")]),s._v("、"),t("code",[s._v("repo")]),s._v(" 和 "),t("code",[s._v("tag")]),s._v(" 信息："),t("code",[s._v("docker run -p 80:80 username/repo:tag")]),s._v("，然后访问 "),t("code",[s._v("http://localhost/")]),s._v("。")]),s._v(" "),t("li",[s._v("就近从"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/part3/",target:"_blank",rel:"noopener noreferrer"}},[s._v("第 3 部分"),t("OutboundLink")],1),s._v("获取 "),t("code",[s._v("docker-compose.yml")]),s._v(" 的副本。")]),s._v(" "),t("li",[s._v("确保您在"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/part4/",target:"_blank",rel:"noopener noreferrer"}},[s._v("第 4 部分"),t("OutboundLink")],1),s._v("中设置的机器处于运行状态并且已准备就绪。运行 "),t("code",[s._v("docker-machine ls")]),s._v(" 对此进行验证。如果机器已停止，请运行 "),t("code",[s._v("docker-machine start myvm1")]),s._v(" 启动管理节点，然后运行 "),t("code",[s._v("docker-machine start myvm2")]),s._v(" 启动工作节点。")]),s._v(" "),t("li",[s._v("运行您在"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/part4/",target:"_blank",rel:"noopener noreferrer"}},[s._v("第 4 部分"),t("OutboundLink")],1),s._v("中创建的 swarm 并使其做好准备。运行 "),t("code",[s._v('docker-machine ssh myvm1 "docker node ls"')]),s._v(" 对此进行验证。如果 swarm 已启动，这两个节点都将报告 "),t("code",[s._v("ready")]),s._v(" 状态。如果未启动，请按照"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/part4/#set-up-your-swarm",target:"_blank",rel:"noopener noreferrer"}},[s._v("设置 swarm"),t("OutboundLink")],1),s._v(" 中的说明重新初始化 swarm 并加入工作节点")])]),s._v(" "),t("h2",{attrs:{id:"_2-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-简介"}},[s._v("#")]),s._v(" 2. 简介")]),s._v(" "),t("p",[s._v("在"),t("a",{attrs:{href:"https://docs.docker-cn.com/get-started/part4/",target:"_blank",rel:"noopener noreferrer"}},[s._v("第 4 部分"),t("OutboundLink")],1),s._v("中，您已学习如何设置 swarm（运行 Docker 的机器的集群），并向其部署了应用，容器一起运行在多台机器上。")]),s._v(" "),t("p",[s._v("在第 5 部分中，您将在此处了解分布式应用的层次结构的最高级别："),t("strong",[s._v("技术栈")]),s._v("。技术栈是一组相关的服务，它们共享依赖项并且可以一起进行编排和扩展。单个技术栈能够定义和协调整个应用的功能（虽然很复杂的应用程序可能需要使用多个技术栈）。")]),s._v(" "),t("p",[s._v("好消息是，从第 3 部分开始，在创建 Compose 文件并使用 "),t("code",[s._v("docker stack deploy")]),s._v(" 时，您一直在技术层面使用技术栈。但是，这是在单个主机上运行的单服务技术栈，通常不是生产中出现的内容。您将在此处使用已学习的知识，使多项服务彼此关联并在多台机器上运行这些服务。")]),s._v(" "),t("p",[s._v("您做得很好，这是工作的最后部分！")]),s._v(" "),t("h2",{attrs:{id:"_3-添加新服务和重新部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加新服务和重新部署"}},[s._v("#")]),s._v(" 3. 添加新服务和重新部署")]),s._v(" "),t("p",[s._v("向 "),t("code",[s._v("docker-compose.yml")]),s._v(" 文件中添加服务非常容易。首先，添加一项免费的可视化程序服务，我们可以通过此服务了解 swarm 如何调度容器。")]),s._v(" "),t("ol",[t("li",[s._v("在编辑器中打开 "),t("code",[s._v("docker-compose.yml")]),s._v(" 并将其内容替换为以下内容。确保将 "),t("code",[s._v("username/repo:tag")]),s._v(" 替换为镜像详细信息。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('version:"3"\nservices:\n  web:\n    # 将 username/repo:tag 替换为您的名称和镜像详细信息\n    image: username/repo:tag\n    deploy:\n      replicas:5\n      restart_policy:\n        condition: on-failure\n      resources:\n        limits:\n          cpus:"0.1"\n          memory:50M\n    ports:\n      - "80:80"\n    networks:\n      - webnet\n  visualizer:\n    image: dockersamples/visualizer:stable\n    ports:\n      - "8080:8080"\n    volumes:\n      - "/var/run/docker.sock:/var/run/docker.sock"\n    deploy:\n      placement:\n        constraints:[node.role == manager]\n    networks:\n      - webnet\nnetworks:\n  webnet:\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("p",[s._v("此处唯一的新内容是 "),t("code",[s._v("web")]),s._v(" 的对等服务 "),t("code",[s._v("visualizer")]),s._v("。您将在此处看到两项新内容："),t("code",[s._v("volumes")]),s._v(" 键（使可视化程序能够访问 Docker 的主机套接字文件）和 "),t("code",[s._v("placement")]),s._v(" 键（用于确保此服务仅在 swarm 管理节点上运行，而从不在工作节点上运行）。这是因为根据 "),t("a",{attrs:{href:"https://github.com/ManoMarks/docker-swarm-visualizer",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 所创建的开源项目"),t("OutboundLink")],1),s._v("构建的此容器在图中显示了 swarm 上运行的 Docker 服务。")]),s._v(" "),t("p",[s._v("我们一会儿会讨论有关布局约束和存储卷的更多内容。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("确保您的shell配置与"),t("code",[s._v("myvm1")]),s._v("是通信的（完整示例在"),t("a",{attrs:{href:"https://docs.docker.com/get-started/part4/#configure-a-docker-machine-shell-to-the-swarm-manager",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v("）。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("运行"),t("code",[s._v("docker-machine ls")]),s._v("以列出计算机并确保已连接到"),t("code",[s._v("myvm1")]),s._v("，如旁边的星号所示。")])]),s._v(" "),t("li",[t("p",[s._v("如果需要，请重新运行"),t("code",[s._v("docker-machine env myvm1")]),s._v("，然后运行给定命令以配置shell。")]),s._v(" "),t("p",[s._v("在"),t("strong",[s._v("Mac或Linux上")]),s._v("，命令是：")])])])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("eval $(docker-machine env myvm1)\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v(" 在**Windows上**，命令是：\n")])])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('& "C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker-machine.exe" env myvm1 | Invoke-Expression\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("在管理节点上重新运行 "),t("code",[s._v("docker stack deploy")]),s._v(" 命令，并且将更新需要更新的所有服务：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('$ docker-machine ssh myvm1 "docker stack deploy -c docker-compose.yml getstartedlab"\nUpdating service getstartedlab_web (id: angi1bf5e4to03qu9f93trnxm)\nUpdating service getstartedlab_visualizer (id: l9mnwkeq2jiononb5ihz9u7a4)\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[s._v("查看可视化程序。")]),s._v(" "),t("p",[s._v("您可以在 Compose 文件中看到 "),t("code",[s._v("visualizer")]),s._v(" 在端口 8080 上运行。通过运行 "),t("code",[s._v("docker-machine ls")]),s._v(" 获取其中一个节点的"),t("code",[s._v("IP")]),s._v("地址。转至"),t("code",[s._v("IP")]),s._v("地址（端口 8080），您将看到可视化程序正在运行：")])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(605),alt:"/images/get-started-visualizer1.png"}})]),s._v(" "),t("p",[t("code",[s._v("visualizer")]),s._v(" 的单个副本正按您的预期在管理节点上运行，并且 "),t("code",[s._v("web")]),s._v(" 的五个实例已在 swarm 中展开。您可以运行 "),t("code",[s._v("docker stack ps <stack>")]),s._v(" 来证实此内容：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' docker-machine ssh myvm1 "docker stack ps getstartedlab"\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("可视化程序是一项独立服务，它可以在技术栈中的任何应用（包括它自己）中运行。它不依赖于任何其他内容。现在，我们创建"),t("em",[s._v("具有")]),s._v("依赖项的服务：将提供访客计数器的"),t("code",[s._v("Redis")]),s._v(" 服务。")]),s._v(" "),t("h2",{attrs:{id:"_4-留存数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-留存数据"}},[s._v("#")]),s._v(" 4. 留存数据")]),s._v(" "),t("p",[s._v("重新运行一遍同一工作流，以添加用于存储应用数据的 Redis 数据库。")]),s._v(" "),t("ol",[t("li",[s._v("保存这个新的 "),t("code",[s._v("docker-compose.yml")]),s._v(" 文件，它最终会添加 Redis 服务。确保将 "),t("code",[s._v("username/repo:tag")]),s._v(" 替换为镜像详细信息。")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[s._v(" version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 username/repo:tag 替换为您的名称和镜像详细信息")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" username/repo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("tag\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       replicas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart_policy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("condition")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("failure\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("limits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n           cpus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1"')]),s._v("\n           memory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("50M\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80:80"')]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" webnet\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("visualizer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dockersamples/visualizer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("stable\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080:8080"')]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/run/docker.sock:/var/run/docker.sock"')]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("placement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         constraints"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("node.role == manager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" webnet\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6379:6379"')]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("placement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         constraints"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("node.role == manager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" webnet\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("webnet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br")])]),t("p",[t("code",[s._v("Redis")]),s._v(" 具有 Docker 库中的官方镜像，并且为其指定了短 "),t("code",[s._v("image")]),s._v(" 名称 "),t("code",[s._v("redis")]),s._v("，因此此处没有 "),t("code",[s._v("username/repo")]),s._v(" 表示法。"),t("code",[s._v("Redis")]),s._v(" 已将"),t("code",[s._v("Redis")]),s._v("端口 6379 预先配置为从容器开放给主机，并且在此处的 Compose 文件中，我们会将其从主机开放给整个环境，因此您实际上可以将任何节点的 "),t("code",[s._v("IP")]),s._v(" 输入 "),t("code",[s._v("Redis")]),s._v("Desktop 管理节点中并管理此 "),t("code",[s._v("Redis")]),s._v("实例（如果您选择执行此操作）。")]),s._v(" "),t("p",[s._v("最重要的是，"),t("code",[s._v("redis")]),s._v(" 规范中的一些内容可以在此技术栈的部署之间持久存储数据：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("redis")]),s._v(" 始终在管理节点上运行，因此它始终使用同一文件系统。")]),s._v(" "),t("li",[t("code",[s._v("redis")]),s._v(" 将访问主机文件系统中的任意目录，作为容器内的 "),t("code",[s._v("/data")]),s._v("，这是 Redis 存储数据的位置。")])]),s._v(" "),t("p",[s._v("这将在您的主机物理文件系统中为 Redis 数据创建一个“可信来源”。如果没有此项，Redis 会将其数据存储在容器的文件系统内的 "),t("code",[s._v("/data")]),s._v(" 中，在重新部署了容器的情况下这些数据将被擦除。")]),s._v(" "),t("p",[s._v("此可信来源包含两个部分：")]),s._v(" "),t("ul",[t("li",[s._v("您对 Redis 服务设置的布局约束，用于确保它始终使用同一主机。")]),s._v(" "),t("li",[s._v("您创建的存储卷，可以使容器访问 "),t("code",[s._v("./data")]),s._v("（位于主机上）作为 "),t("code",[s._v("/data")]),s._v("（位于 Redis 容器内）。虽然容器经常变换，但存储在指定主机上的 "),t("code",[s._v("./data")]),s._v(" 中的文件仍持续存在，从而实现了连续性。")])]),s._v(" "),t("p",[s._v("您已准备好部署新的使用 Redis 的技术栈。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("在管理节点上创建 "),t("code",[s._v("./data")]),s._v(" 目录：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' $ docker-machine ssh myvm1 "mkdir ./data"\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[s._v("确保您的shell配置与"),t("code",[s._v("myvm1")]),s._v("是通信的（完整示例在"),t("a",{attrs:{href:"https://docs.docker.com/get-started/part4/#configure-a-docker-machine-shell-to-the-swarm-manager",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v("）。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("运行"),t("code",[s._v("docker-machine ls")]),s._v("以列出计算机并确保已连接到"),t("code",[s._v("myvm1")]),s._v("，如旁边的星号所示。")])]),s._v(" "),t("li",[t("p",[s._v("如果需要，请重新运行"),t("code",[s._v("docker-machine env myvm1")]),s._v("，然后运行给定命令以配置shell。")]),s._v(" "),t("p",[s._v("在"),t("strong",[s._v("Mac或Linux上")]),s._v("，命令是：")])])])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("eval $(docker-machine env myvm1)\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v(" 在**Windows上**，命令是：\n")])])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('& "C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker-machine.exe" env myvm1 | Invoke-Expression\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("再跑"),t("code",[s._v("docker stack deploy")]),s._v("一次。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ docker stack deploy -c docker-compose.yml getstartedlab\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("运行"),t("code",[s._v("docker service ls")]),s._v("以验证三个服务是否按预期运行。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ docker service ls\nID      NAME          MODE     REPLICAS     IMAGE          PORTS\nx7uij6xb4foj   getstartedlab_redis   replicated   1/1    redis:latest                      *:6379->6379/tcp\nn5rvhm52ykq7   getstartedlab_visualizer   replicated          1/1                 dockersamples/visualizer:stable   *:8080->8080/tcp\nmifd433bti1d   getstartedlab_web          replicated          5/5                 gordon/getstarted:latest    *:80->80/tcp\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("检查一个节点上的网页，例如"),t("code",[s._v("http://192.168.99.101")]),s._v("，查看访问者计数器的结果，该计数器现已存在并在"),t("code",[s._v("Redis")]),s._v("上存储信息。")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(606),alt:"/images/app-in-browser-redis.png"}})]),s._v(" "),t("p",[s._v("另外，检查节点"),t("code",[s._v("IP")]),s._v(" 地址上的可视化程序（端口 8080），然后您将看到 "),t("code",[s._v("redis")]),s._v(" 服务正在与 "),t("code",[s._v("web")]),s._v(" 和 "),t("code",[s._v("visualizer")]),s._v(" 服务一起运行。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(607),alt:"/images/visualizer-with-redis.png"}})]),s._v(" "),t("p",[s._v("您已了解技术栈与所有一起运行的服务相关，并且从本教程的第 3 部分开始，您一直在使用技术栈。您已了解要向技术栈中添加更多服务，可以在 Compose 文件中插入它们。最后，已了解可以使用布局约束与存储卷的组合来创建用于持久存储数据的永久主目录，以便应用数据能够在清除和重新部署容器时持续存在。")])])}),[],!1,null,null,null);e.default=n.exports}}]);