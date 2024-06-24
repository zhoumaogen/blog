(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{609:function(s,t,a){s.exports=a.p+"assets/img/app-in-browser.b7a01066.png"},680:function(s,t,a){"use strict";a.r(t);var e=a(16),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_3-2-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-容器"}},[s._v("#")]),s._v(" 3.2 容器")]),s._v(" "),e("h2",{attrs:{id:"_1-先决条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-先决条件"}},[s._v("#")]),s._v(" 1. 先决条件")]),s._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装Docker 1.13或更高版本"),e("OutboundLink")],1),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("阅读第1节中的所有内容。")])]),s._v(" "),e("li",[e("p",[s._v("下面的命令可以为您的环境提供快速测试运行以确保您已完成所有设置：")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run hello-world\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-介绍"}},[s._v("#")]),s._v(" 2. 介绍")]),s._v(" "),e("p",[s._v("现在是时候开始使用Docker方式构建应用程序了。我们将从此类应用的层次结构的底层（即，容器）开始，这是本页面上涵盖的内容。在此级别之上的是服务，它定义了容器在生产中的行为方式，如"),e("a",{attrs:{href:"http://172.22.3.3/Hakugei/docker/blob/master/3-GetStart.md#3-%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"}},[s._v("第3部分所述"),e("OutboundLink")],1),s._v("。最后，处于最高级别的是技术栈，定义了"),e("a",{attrs:{href:"http://172.22.3.3/Hakugei/docker/blob/master/3-GetStart.md#5-%E5%BA%94%E7%94%A8%E6%A0%88",target:"_blank",rel:"noopener noreferrer"}},[s._v("第5部分中"),e("OutboundLink")],1),s._v("介绍的所有服务的交互 。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("堆")])]),s._v(" "),e("li",[e("p",[s._v("服务")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("容器")]),s._v("（你在这里）您的新开发环境")])])]),s._v(" "),e("p",[s._v("过去，如果要开始编写 Python 应用，您的第一项业务是将 Python 运行时安装到机器上。但是，这会导致机器上的环境必须如此，才能使应用按预期运行；对于运行应用的服务器来说，也同样如此。")]),s._v(" "),e("p",[s._v("借助 Docker，您只需将可移植的 Python 运行时抓取为镜像，而无需进行安装。然后，您的构建可以将基本 Python 镜像与应用代码包含在一起，从而确保应用、其依赖项及运行时都一起提供。")]),s._v(" "),e("p",[s._v("这些可移植的镜像由 "),e("code",[s._v("Dockerfile")]),s._v(" 定义。")]),s._v(" "),e("h3",{attrs:{id:"_2-1-使用dockerfile定义容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-使用dockerfile定义容器"}},[s._v("#")]),s._v(" 2.1. 使用"),e("code",[s._v("Dockerfile")]),s._v("定义容器")]),s._v(" "),e("p",[e("code",[s._v("Dockerfile")]),s._v(" 将在您的容器内定义环境中执行的操作。对网络接口和磁盘驱动器等资源的访问在此环境内实现虚拟化，这将独立于系统的其余部分，因此您必须将端口映射到外部，并具体说明您要“复制”到该环境的文件。但是，在执行此操作后，您可以期望此 "),e("code",[s._v("Dockerfile")]),s._v(" 中定义的应用构建的行为在运行时始终相同。")]),s._v(" "),e("h4",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" "),e("code",[s._v("Dockerfile")])]),s._v(" "),e("p",[s._v("创建空目录并将名为 "),e("code",[s._v("Dockerfile")]),s._v(" 的此文件放入其中。记录说明每个语句的注释。")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use an official Python runtime as a parent image")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" python:2.7-slim")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set the working directory to /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Copy the current directory contents into the container at /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . /app")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install any needed packages specified in requirements.txt")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pip install --trusted-host pypi.python.org -r requirements.txt")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Make port 80 available to the world outside this container")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 80")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Define environment variable")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" NAME World")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run app.py when the container launches")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app.py"')]),s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("此 "),e("code",[s._v("Dockerfile")]),s._v(" 引用了我们尚未创建的内容，名为 "),e("code",[s._v("app.py")]),s._v(" 和 "),e("code",[s._v("requirements.txt")]),s._v("。在后续步骤中，我们会准备好这些内容。")]),s._v(" "),e("h3",{attrs:{id:"_2-2-应用自身"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-应用自身"}},[s._v("#")]),s._v(" 2.2. 应用自身")]),s._v(" "),e("p",[s._v("抓取这两个文件并将其放入 "),e("code",[s._v("Dockerfile")]),s._v(" 所在的文件夹。这将完成我们的应用，如您所见它非常简单。将上述 "),e("code",[s._v("Dockerfile")]),s._v(" 构建到镜像中时，由于 "),e("code",[s._v("Dockerfile")]),s._v(" 的 "),e("code",[s._v("ADD")]),s._v(" 命令而显示 "),e("code",[s._v("app.py")]),s._v(" 和 "),e("code",[s._v("requirements.txt")]),s._v("，并且借助 "),e("code",[s._v("EXPOSE")]),s._v(" 命令，将能够通过 HTTP 访问 "),e("code",[s._v("app.py")]),s._v(" 的输出。")]),s._v(" "),e("h4",{attrs:{id:"requirements-txt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements-txt"}},[s._v("#")]),s._v(" "),e("code",[s._v("requirements.txt")])]),s._v(" "),e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[s._v("Flask\nRedis\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"app-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-py"}},[s._v("#")]),s._v(" "),e("code",[s._v("app.py")])]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" redis "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Redis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" RedisError\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Connect to Redis")]),s._v("\nredis "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Redis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" db"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" socket_connect_timeout"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" socket_timeout"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\napp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      visits "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("incr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"counter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" RedisError"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      visits "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<i>cannot connect to Redis, counter disabled</i>"')]),s._v("\n\n  html "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<h3>Hello {name}!</h3>"')]),s._v(" \\\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<b>Hostname:</b> {hostname}<br/>"')]),s._v(" \\\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<b>Visits:</b> {visits}"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("os"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getenv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NAME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hostname"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("socket"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gethostname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" visits"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("visits"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0.0.0.0'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("现在，我们可以看到，"),e("code",[s._v("pip install -r requirements.txt")]),s._v(" 将安装 "),e("code",[s._v("Python")]),s._v(" 的 "),e("code",[s._v("Flask")]),s._v(" 和 "),e("code",[s._v("Redis")]),s._v(" 库，而此应用将输出环境变量 "),e("code",[s._v("NAME")]),s._v(" 以及对 "),e("code",[s._v("socket.gethostname()")]),s._v(" 调用的输出。最后，由于 "),e("code",[s._v("Redis")]),s._v(" 未在运行（因为我们仅安装了 "),e("code",[s._v("Python")]),s._v(" 库，而未安装 "),e("code",[s._v("Redis")]),s._v(" 自身），因此我们应期望尝试在此处使用它将失败并生成错误消息。")]),s._v(" "),e("h3",{attrs:{id:"_2-3-构建应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-构建应用"}},[s._v("#")]),s._v(" 2.3. 构建应用")]),s._v(" "),e("p",[s._v("好的！您不需要 Python 或系统上 "),e("code",[s._v("requirements.txt")]),s._v(" 中的任何内容，也不会构建或运行此镜像来将它们安装在系统上。似乎您尚未真正使用 Python 和 Flask 设置环境，但已进行设置。")]),s._v(" "),e("p",[s._v("以下是 "),e("code",[s._v("ls")]),s._v(" 应显示的内容：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ ls\nDockerfile\t\tapp.py\t\t\trequirements.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("现在，运行构建命令。这将创建 Docker 镜像，我们将使用 "),e("code",[s._v("-t")]),s._v(" 对其进行标记，以使其具有友好名称。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker build -t friendlyhello .\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("您已构建的镜像在何处？它位于您的机器上的本地 Docker 镜像库中：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker ./images/\n\nREPOSITORY            TAG                 IMAGE ID\nfriendlyhello         latest              326387cea398\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("注意标签为何默认的是"),e("code",[s._v("latest")]),s._v("。标签的完整语法类似于"),e("code",[s._v("--tag=friendlyhello:v0.0.1")]),s._v("。")]),s._v(" "),e("blockquote",[e("h4",{attrs:{id:"linux用户的故障排除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux用户的故障排除"}},[s._v("#")]),s._v(" Linux用户的故障排除")]),s._v(" "),e("p",[e("em",[s._v("1. 代理服务器设置")])]),s._v(" "),e("p",[s._v("代理服务器可以在Web应用程序启动并运行后阻止其连接。如果您位于代理服务器后面，请使用以下"),e("code",[s._v("ENV")]),s._v("命令将以下行添加到Dockerfile中，以指定代理服务器的主机和端口：")]),s._v(" "),e("p",[s._v("#Set proxy server, replace host:port with values for your servers\nENV http_proxy host:port")]),s._v(" "),e("p",[s._v("ENV https_proxy host:port")]),s._v(" "),e("p",[e("em",[s._v("2. "),e("code",[s._v("DNS")]),s._v("设置")])]),s._v(" "),e("p",[s._v("DNS配置错误可能会产生问题"),e("code",[s._v("pip")]),s._v("。您需要设置自己的DNS服务器地址才能"),e("code",[s._v("pip")]),s._v("正常工作。您可能想要更改Docker守护程序的DNS设置。您可以"),e("code",[s._v("/etc/docker/daemon.json")]),s._v("使用"),e("code",[s._v("dns")]),s._v("密钥编辑（或创建）配置文件，如下所示：")]),s._v(" "),e("p",[s._v("{")]),s._v(" "),e("p",[s._v('"dns": ["your_dns_address", "8.8.8.8"]')]),s._v(" "),e("p",[s._v("}")]),s._v(" "),e("p",[s._v("在上面的示例中，列表的第一个元素是DNS服务器的地址。第二项是Google的DNS，可在第一项无法使用时使用。")]),s._v(" "),e("p",[s._v("在继续之前，请保存"),e("code",[s._v("daemon.json")]),s._v("并重新启动docker服务。")]),s._v(" "),e("p",[s._v("$ sudo service docker restart")]),s._v(" "),e("p",[s._v("修复后，重试运行该"),e("code",[s._v("build")]),s._v("命令。")])]),s._v(" "),e("h3",{attrs:{id:"_2-4-运行应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-运行应用"}},[s._v("#")]),s._v(" 2.4. 运行应用")]),s._v(" "),e("p",[s._v("运行应用，使用 "),e("code",[s._v("-p")]),s._v(" 参数将机器的 4000 端口映射到容器暴露的 80 端口：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v(":80 friendlyhello\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("您将看到 "),e("code",[s._v("Python")]),s._v(" 正在为应用提供服务（网址为 "),e("code",[s._v("http://0.0.0.0:80")]),s._v("）的通知。但是，该消息来自不知道您已将其 80 端口映射到 4000 端口的容器的内部，因此需要将正确 URL 更改为 "),e("code",[s._v("http://localhost:4000")]),s._v("。")]),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("Web")]),s._v(" 浏览器中访问该 "),e("code",[s._v("URL")]),s._v("，以查看网页上提供的显示内容，包括“Hello World”文本、容器 ID以及 "),e("code",[s._v("Redis")]),s._v(" 错误消息。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(609),alt:"/images/app-in-browser.png"}})]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("注意")]),s._v("：如果您在Windows 7上使用Docker Toolbox，请使用"),e("code",[s._v("Docker Machine IP")]),s._v("而不是"),e("code",[s._v("localhost")]),s._v("。例如，"),e("code",[s._v("http：//192.168.99.100：4000 /")]),s._v("。要查找"),e("code",[s._v("IP")]),s._v("地址，请使用该命令"),e("code",[s._v("docker-machine ip")]),s._v("。")])]),s._v(" "),e("p",[s._v("您还可以在 shell 中使用 "),e("code",[s._v("curl")]),s._v(" 命令查看相同内容。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:4000\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("Hello World"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/h"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("b"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hostname:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/b"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 8fc990912a1"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v("<")]),s._v("br/"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("b"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Visits:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/b"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("cannot connect to Redis, counter disabled"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/i"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("blockquote",[e("p",[e("strong",[s._v("注意")]),s._v("：此端口重映射 "),e("code",[s._v("4000:80")]),s._v(" 用于说明您在 "),e("code",[s._v("Dockerfile")]),s._v(" 中暴露的内容与使用 "),e("code",[s._v("docker run -p")]),s._v(" 发布的内容之间的差异。在后续步骤中，我们只需将主机上的 80 端口映射到容器中的 80 端口并使用 "),e("code",[s._v("http://localhost")]),s._v("。")])]),s._v(" "),e("p",[s._v("在终端上按 "),e("code",[s._v("CTRL+C")]),s._v(" 退出。")]),s._v(" "),e("blockquote",[e("h4",{attrs:{id:"在windows上-显式停止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在windows上-显式停止容器"}},[s._v("#")]),s._v(" 在Windows上，显式停止容器")]),s._v(" "),e("p",[s._v("在Windows系统上，"),e("code",[s._v("CTRL+C")]),s._v("不会停止容器。因此，首先键入"),e("code",[s._v("CTRL+C")]),s._v("以获取提示（或打开另一个shell），然后键入"),e("code",[s._v("docker container ls")]),s._v("以列出正在运行的容器，然后 "),e("code",[s._v("docker container stop <Container NAME or ID>")]),s._v("停止容器。否则，当您尝试在下一步中重新运行容器时，会从守护程序收到错误响应。")])]),s._v(" "),e("p",[s._v("现在，我们从后台在分离模式下运行应用。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v(":80 friendlyhello\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("您将获得应用容器的长ID，然后将返回到终端。容器现在在后台运行。您还可以使用 "),e("code",[s._v("docker ps")]),s._v(" 查看缩写容器 ID（这两种 ID 可以在运行命令时交换工作）：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$ docker ps\nCONTAINER ID        IMAGE               COMMAND             CREATED\n1fa4ab2cf395        friendlyhello       "python app.py"     28 seconds ago\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("您将看到 "),e("code",[s._v("CONTAINER ID")]),s._v(" 与 "),e("code",[s._v("http://localhost:4000")]),s._v(" 上的内容相匹配。")]),s._v(" "),e("p",[s._v("现在，使用 "),e("code",[s._v("docker stop")]),s._v(" 及 "),e("code",[s._v("CONTAINER ID")]),s._v(" 结束该进程，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker stop 1fa4ab2cf395\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);