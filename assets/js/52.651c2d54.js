(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{701:function(t,e,a){"use strict";a.r(e);var s=a(16),_=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-4-容器开发最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-容器开发最佳实践"}},[t._v("#")]),t._v(" 4.4 容器开发最佳实践")]),t._v(" "),a("h2",{attrs:{id:"_1-怎样保持镜像精小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-怎样保持镜像精小"}},[t._v("#")]),t._v(" 1. 怎样保持镜像精小")]),t._v(" "),a("p",[t._v("在启动容器或服务时，小镜像可以更快地通过网络传输并更快地加载到内存中。 有一些经验法则可以保持镜像尺寸小：")]),t._v(" "),a("ul",[a("li",[t._v("从适当的基本镜像开始。 例如，如果您需要JDK，请考虑将您的镜像基于官方的"),a("code",[t._v("openjdk")]),t._v("镜像，而不是从通用的"),a("code",[t._v("ubuntu")]),t._v("镜像开始并将"),a("code",[t._v("openjdk")]),t._v("安装为Dockerfile的一部分。")]),t._v(" "),a("li",[t._v("使用多级构建。 例如，您可以使用"),a("code",[t._v("maven")]),t._v("镜像构建Java应用程序，然后重置为"),a("code",[t._v("tomcat")]),t._v("镜像并将Java工件复制到正确的位置以部署您的应用程序，所有这些都在同一个Dockerfile中。 这意味着您的最终镜像不包含构建所引入的所有库和依赖项，而只包含运行它们所需的工件和环境。\n"),a("ul",[a("li",[t._v("如果您需要使用不包含多级构建的Docker版本，请尝试通过最小化Dockerfile中单独的"),a("code",[t._v("RUN")]),t._v("命令的数量来减少镜像中的镜像层数。您可以通过将多个命令合并到单个"),a("code",[t._v("RUN")]),t._v("行中并使用"),a("code",[t._v("shell")]),t._v("的机制将它们组合在一起来实现此目的。考虑以下两个片段。第一个在镜像中创建两个镜像层，而第二个镜像层仅创建一个镜像层。")])])])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("RUN "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -y update\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y python\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("RUN "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -y update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y python\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ul",[a("li",[t._v("如果您有多个共同点的镜像，请考虑使用共享组件创建自己的基本镜像，并在其上创建独特的镜像。 Docker只需要加载公共层一次，然后缓存它们。 这意味着您的衍生镜像可以更有效地使用Docker主机上的内存并加载更快。")]),t._v(" "),a("li",[t._v("要使生产镜像保持精简但允许调试，请考虑使用生产镜像作为调试镜像的基本镜像。 可以在生产镜像之上添加其他测试或调试工具。")]),t._v(" "),a("li",[t._v("构建镜像时，始终使用有用的标记对其进行标记，这些标记用于编写版本信息，预期目标（例如"),a("code",[t._v("prod")]),t._v("或"),a("code",[t._v("test")]),t._v("），稳定性或在不同环境中部署应用程序时有用的其他信息。 不要依赖自动创建的"),a("code",[t._v("latest")]),t._v("标签。")])]),t._v(" "),a("h2",{attrs:{id:"_2-在何处以及如何保留应用程序数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在何处以及如何保留应用程序数据"}},[t._v("#")]),t._v(" 2. 在何处以及如何保留应用程序数据")]),t._v(" "),a("ul",[a("li",[t._v("避免使用存储驱动程序将应用程序数据存储在容器的可写层中。 这会增加容器的大小，从I / O角度来看，与使用卷或挂载相比效率较低。")]),t._v(" "),a("li",[t._v("使用卷存储数据。")]),t._v(" "),a("li",[t._v("适用于绑定装入的一种情况是在开发期间，您可能希望将源目录或刚刚构建的二进制文件装入容器中。 对于生产，请使用卷，将其安装到与开发期间装入绑定装置相同的位置。")]),t._v(" "),a("li",[t._v("对于生产，使用机密来存储服务使用的敏感应用程序数据，并对配置文件等非敏感数据使用配置。 如果您当前使用独立容器，请考虑迁移以使用单一副本服务，以便您可以利用这些仅限服务的功能。")])]),t._v(" "),a("h2",{attrs:{id:"_3-尽可能使用swarm服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-尽可能使用swarm服务"}},[t._v("#")]),t._v(" 3. 尽可能使用swarm服务")]),t._v(" "),a("ul",[a("li",[t._v("如果可能，请设计您的应用程序，使其能够使用群集服务进行扩展。")]),t._v(" "),a("li",[t._v("即使您只需要运行应用程序的单个实例，群集服务也可以提供优于独立容器的几个优势。服务的配置是声明性的，Docker始终致力于保持所需状态和实际状态同步。")]),t._v(" "),a("li",[t._v("网络和卷可以与群集服务连接和断开连接，Docker处理以无中断方式重新部署各个服务容器。需要手动停止，删除和重新创建独立容器以适应配置更改。")]),t._v(" "),a("li",[t._v("一些功能，例如存储机密和配置的功能，仅适用于服务而非独立容器。这些功能允许您将镜像保持尽可能通用，并避免将敏感数据存储在Docker镜像或容器本身中。")]),t._v(" "),a("li",[t._v("让"),a("code",[t._v("docker stack deploy")]),t._v("处理任何镜像拉，而不是使用"),a("code",[t._v("docker pull")]),t._v("。这样，您的部署不会尝试从已关闭的节点中提取。此外，当将新节点添加到群组时，会自动提取镜像。")])]),t._v(" "),a("p",[t._v("在群组服务的节点之间共享数据存在限制。 如果您使用Docker for AWS或Docker for Azure，您可以使用Cloudstor插件在您的swarm服务节点之间共享数据。 您还可以将应用程序数据写入单独的数据库，该数据库支持同时更新。")]),t._v(" "),a("h2",{attrs:{id:"_4-使用ci-cd进行测试和部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用ci-cd进行测试和部署"}},[t._v("#")]),t._v(" 4. 使用CI / CD进行测试和部署")]),t._v(" "),a("ul",[a("li",[t._v("当您检查对源代码管理的更改或创建拉取请求时，请使用Docker Hub或其他CI / CD管道自动构建和标记Docker镜像并对其进行测试。")]),t._v(" "),a("li",[t._v("通过要求开发，测试和安全团队在将镜像部署到生产环境之前对其进行签名，可以进一步了解Docker EE。 这样，您可以确保在将镜像部署到生产环境之前，它已经过测试并由开发，质量和安全团队签署。")])]),t._v(" "),a("h2",{attrs:{id:"_5-开发和生产环境的差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-开发和生产环境的差异"}},[t._v("#")]),t._v(" 5. 开发和生产环境的差异")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("开发")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("生产")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("使用bind mounts为您的容器提供对源代码的访问权限")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用卷来存储容器数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("使用适用于Mac的Docker Desktop或适用于Windows的Docker Desktop")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果可能，请使用Docker EE，并使用用户映射以更好地隔离Docker进程与主机进程")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("不用担心时间问题")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("始终在Docker主机上和每个容器进程内运行NTP客户端，并将它们全部同步到同一个NTP服务器。 如果使用swarm服务，还要确保每个Docker节点将其时钟与容器同步到同一时间源。")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);