(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{692:function(s,a,e){"use strict";e.r(a);var t=e(16),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_3-3-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-镜像"}},[s._v("#")]),s._v(" 3.3 镜像")]),s._v(" "),e("h2",{attrs:{id:"_1-共享镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-共享镜像"}},[s._v("#")]),s._v(" 1. 共享镜像")]),s._v(" "),e("p",[s._v("为了说明我们刚才创建的可移植性，可以上传已构建的镜像并在其他地方运行它。但是，在您要将容器部署到生产环境中时，需要了解如何推送到镜像库。")]),s._v(" "),e("p",[s._v("镜像库是镜像仓库的集合，而镜像仓库是镜像的集合 - 除了代码已构建之外，类似于 GitHub 镜像仓库。镜像库中的一个帐户可以创建很多镜像仓库。默认情况下，"),e("code",[s._v("docker")]),s._v(" CLI 使用 Docker 的公用镜像库。")]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("注")]),s._v("：我们将在此处使用 Docker 的公用镜像库，仅仅因为它是免费的并且经过预先配置，但有许多公用镜像库可供选择，并且您甚至可以使用 "),e("a",{attrs:{href:"https://docs.docker-cn.com/datacenter/dtr/2.2/guides/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Trusted Registry"),e("OutboundLink")],1),s._v(" 设置您自己的专用镜像库。")])]),s._v(" "),e("h2",{attrs:{id:"_2-使用-docker-id-登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-docker-id-登录"}},[s._v("#")]),s._v(" 2. 使用 Docker ID 登录")]),s._v(" "),e("p",[s._v("如果您没有 Docker 帐户，请在 "),e("a",{attrs:{href:"https://cloud.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cloud.docker.com"),e("OutboundLink")],1),s._v(" 中进行注册。记录您的用户名。")]),s._v(" "),e("p",[s._v("登录本地机器上的 Docker 公用镜像库。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-标记镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-标记镜像"}},[s._v("#")]),s._v(" 3. 标记镜像")]),s._v(" "),e("p",[s._v("用于将本地镜像与镜像库中的镜像仓库相关联的表示法为 "),e("code",[s._v("username/repository:tag")]),s._v("。tag 是可选项，但建议使用它，因为这是镜像库用于为 Docker 镜像指定版本的机制。针对上下文为镜像库和 tag 指定有意义的名称，例如 "),e("code",[s._v("get-started:part1")]),s._v(".这会将镜像放入 "),e("code",[s._v("get-started")]),s._v(" 镜像仓库并将其标记为 "),e("code",[s._v("part1")]),s._v("。")]),s._v(" "),e("p",[s._v("现在，将其合并到一起，以标记镜像。使用您的用户名、镜像仓库和标签名称运行 "),e("code",[s._v("docker tag image")]),s._v("，以便镜像将上传到所需目的地。此命令的语法为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker tag image username/repository:tag\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker tag friendlyhello john/get-started:part1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("运行"),e("code",[s._v("docker images")]),s._v("以查看新标记的镜像。（您还可以使用 "),e("code",[s._v("docker image ls")]),s._v("。）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker images\nREPOSITORY               TAG                 IMAGE ID            CREATED             SIZE\nfriendlyhello            latest              d9e555c53008        3 minutes ago       195MB\njohn/get-started         part1               d9e555c53008        3 minutes ago       195MB\npython                   2.7-slim            1c7128a655f6        5 days ago          183MB\n...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"_4-发布镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-发布镜像"}},[s._v("#")]),s._v(" 4. 发布镜像")]),s._v(" "),e("p",[s._v("将已标记的镜像上传到镜像仓库：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker push username/repository:tag\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("完成后，将公开此上传的结果。如果登录 "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),e("OutboundLink")],1),s._v("，可以使用其 pull 命令看到新的镜像。")]),s._v(" "),e("h2",{attrs:{id:"_5-从远程镜像仓库中拉取并运行镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-从远程镜像仓库中拉取并运行镜像"}},[s._v("#")]),s._v(" 5. 从远程镜像仓库中拉取并运行镜像")]),s._v(" "),e("p",[s._v("从现在开始，您可以使用 "),e("code",[s._v("docker run")]),s._v("，并且可以使用以下命令在任何机器上运行您的应用：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -p 4000:80 username/repository:tag\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果镜像在机器本地不可用，Docker 将从镜像仓库中拉取它。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker run -p 4000:80 john/get-started:part1\nUnable to find image 'john/get-started:part1' locally\npart1:Pulling from orangesnap/get-started\n10a267c67f42:Already exists\nf68a39a6a5e4:Already exists\n9beaffc0cf19:Already exists\n3c1fe835fb6b:Already exists\n4c9f1fa8fcb8:Already exists\nee7d8f576a14:Already exists\nfbccdcced46e:Already exists\nDigest: sha256:0601c866aab2adcc6498200efd0f754037e909e5fd42069adeff72d1e2439068\nStatus: Downloaded newer image for john/get-started:part1\n * Running on http://0.0.0.0:80/ (Press CTRL+C to quit)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("blockquote",[e("p",[e("strong",[s._v("注")]),s._v("：如果您未指定这些命令中的 "),e("code",[s._v(":tag")]),s._v(" 部分，在进行构建和运行镜像时，将使用标签 "),e("code",[s._v(":latest")]),s._v(" 。Docker 将使用在未指定标签的情况下运行的镜像的最新版本（可以不是最新镜像）。")])]),s._v(" "),e("p",[s._v("无论 "),e("code",[s._v("docker run")]),s._v(" 在何处执行，它将从 "),e("code",[s._v("requirements.txt")]),s._v(" 拉取您的镜像及 Python 和所有依赖项，然后运行代码。所有内容都在一个小软件包中提供，并且主机只需安装 Docker 来运行它。")]),s._v(" "),e("h2",{attrs:{id:"_6-总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-总结"}},[s._v("#")]),s._v(" 6. 总结")]),s._v(" "),e("p",[s._v("以上是此页面的所有内容。在下一节中，我们学习如何通过在"),e("strong",[s._v("服务")]),s._v("中运行此容器来扩展应用。")]),s._v(" "),e("p",[s._v("以下是此页面上的基本 Docker 命令列表，以及一些相关命令（如果您要在继续之前进行进一步探索）。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t friendlyname "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用此目录的 Dockerfile 创建镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v(":80 friendlyname  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行端口 4000 到 90 的“友好名称”映射")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v(":80 friendlyname         "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容相同，但在分离模式下")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("                                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有正在运行的容器的列表")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 平稳地停止指定的容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有容器的列表，甚至包含未运行的容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制关闭指定的容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从此机器中删除指定的容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从此机器中删除所有容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images -a       "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示此机器上的所有镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("imagename"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从此机器中删除指定的镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从此机器中删除所有镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用您的 Docker 凭证登录此 CLI 会话")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("image"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" username/repository:tag  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标记 <image> 以上传到镜像库")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push username/repository:tag            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将已标记的镜像上传到镜像库")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run username/repository:tag                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行镜像库中的镜像")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);