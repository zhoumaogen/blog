(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{698:function(s,a,e){"use strict";e.r(a);var t=e(16),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_4-2-使用多阶段构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-使用多阶段构建"}},[s._v("#")]),s._v(" 4.2 使用多阶段构建")]),s._v(" "),e("p",[s._v("多阶段构建是守护程序和客户端上需要Docker 17.05或更高版本的新功能。 多阶段构建对于那些努力优化Dockerfiles同时使其易于阅读和维护的人来说非常有用。")]),s._v(" "),e("h2",{attrs:{id:"_1-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1. 前言")]),s._v(" "),e("p",[s._v("构建镜像最具挑战性的一点是保持镜像尺寸不变。 Dockerfile中的每条指令都为镜像添加了一个镜像层，您需要记住在移动到下一层之前清除任何不需要的工件。 为了编写一个真正高效的Dockerfile，传统上需要使用shell技巧和其他逻辑来保持层尽可能小，并确保每个层都具有前一层所需的工件，而不是其他任何东西。")]),s._v(" "),e("p",[s._v("实际上很常见的是有一个Dockerfile用于开发（其中包含构建应用程序所需的所有内容），以及一个用于生产的精简版Dockerfile，它只包含您的应用程序以及运行它所需的内容。 这被称为“建造者模式”。 维护两个Dockerfiles并不理想。")]),s._v(" "),e("p",[s._v("这是一个"),e("code",[s._v("Dockerfile.build")]),s._v("和"),e("code",[s._v("Dockerfile")]),s._v("的例子，它遵循上面的构建器模式：")]),s._v(" "),e("p",[e("code",[s._v("Dockerfile.build:")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("FROM golang:1.7.3\nWORKDIR /go/src/github.com/alexellis/href-counter/\nCOPY app.go "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nRUN go get -d -v golang.org/x/net/html "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLED")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux go build -a -installsuffix cgo -o app "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("请注意，此示例还使用Bash"),e("code",[s._v("&&")]),s._v("运算符人为压缩两个"),e("code",[s._v("RUN")]),s._v("命令，以避免在镜像中创建其他镜像层，这很容易出错并且难以维护。 例如，插入另一个命令并很容易忘记使用"),e("code",[s._v("\\")]),s._v("字符继续运行。")]),s._v(" "),e("p",[e("code",[s._v("Dockerfile:")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("FROM alpine:latest  \nRUN apk --no-cache "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ca-certificates\nWORKDIR /root/\nCOPY app "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nCMD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("code",[s._v("build.sh:")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Building alexellis2/href-counter:build\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build --build-arg "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https_proxy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$https_proxy")]),s._v(" --build-arg "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_proxy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_proxy")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n    -t alexellis2/href-counter:build "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -f Dockerfile.build\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container create --name extract alexellis2/href-counter:build  \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" extract:/go/src/github.com/alexellis/href-counter/app ./app  \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f extract\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Building alexellis2/href-counter:latest\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build --no-cache -t alexellis2/href-counter:latest "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" ./app\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("当您运行"),e("code",[s._v("build.sh")]),s._v("脚本时，它需要构建第一个镜像，从中创建容器以复制工件，然后构建第二个镜像。 这两个镜像占用了您的系统空间，而且在本地磁盘上多出此"),e("code",[s._v("app")]),s._v("组件。")]),s._v(" "),e("p",[s._v("多阶段构建极大地简化了这种情况！")]),s._v(" "),e("h2",{attrs:{id:"_2-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用"}},[s._v("#")]),s._v(" 2. 使用")]),s._v(" "),e("p",[s._v("对于多阶段构建，您在Dockerfile中使用多个"),e("code",[s._v("FROM")]),s._v("语句。 每个"),e("code",[s._v("FROM")]),s._v("指令可以使用不同的基础，并且每个指令都开始构建的新阶段。 您可以选择性地将工件从一个阶段复制到另一个阶段，从而在最终镜像中留下您不想要的所有内容。 为了说明这是如何工作的，让我们调整上一节中的Dockerfile以使用多阶段构建。")]),s._v(" "),e("p",[e("code",[s._v("Dockerfile:")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("FROM golang:1.7.3\nWORKDIR /go/src/github.com/alexellis/href-counter/\nRUN go get -d -v golang.org/x/net/html  \nCOPY app.go "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nRUN "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLED")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux go build -a -installsuffix cgo -o app "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\nFROM alpine:latest  \nRUN apk --no-cache "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ca-certificates\nWORKDIR /root/\nCOPY --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" /go/src/github.com/alexellis/href-counter/app "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nCMD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("您只需要单个Dockerfile。 您也不需要单独的构建脚本。 只需运行"),e("code",[s._v("docker build")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t alexellis2/href-counter:latest "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("最终结果是与以前相同的微小生产镜像，复杂性显着降低。 您不需要创建任何中间镜像，也不需要将任何工件提取到本地系统。")]),s._v(" "),e("p",[s._v("它是如何工作的？ 第二个"),e("code",[s._v("FROM")]),s._v("指令以"),e("code",[s._v("alpine：latest")]),s._v("镜像为基础开始一个新的构建阶段。 "),e("code",[s._v("COPY --from=0")]),s._v("行仅将前一阶段的构建工件复制到此新阶段。 Go SDK和任何中间件都被忽略，而不是保存在最终镜像中。")]),s._v(" "),e("h2",{attrs:{id:"_3-为构建阶段命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-为构建阶段命名"}},[s._v("#")]),s._v(" 3. 为构建阶段命名")]),s._v(" "),e("p",[s._v("默认情况下，阶段未命名，您可以通过整数来引用它们，从第一个"),e("code",[s._v("FROM")]),s._v("指令开始为0。 但是，您可以通过向"),e("code",[s._v("FROM")]),s._v("指令添加"),e("code",[s._v("as <NAME>")]),s._v("来命名您的阶段。 此示例通过命名阶段并使用"),e("code",[s._v("COPY")]),s._v("指令中的名称来改进前一个示例。 这意味着即使稍后重新排序Dockerfile中的指令，"),e("code",[s._v("COPY")]),s._v("也不会中断。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("FROM golang:1.7.3 as builder\nWORKDIR /go/src/github.com/alexellis/href-counter/\nRUN go get -d -v golang.org/x/net/html  \nCOPY app.go    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nRUN "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLED")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux go build -a -installsuffix cgo -o app "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\nFROM alpine:latest  \nRUN apk --no-cache "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ca-certificates\nWORKDIR /root/\nCOPY --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("builder /go/src/github.com/alexellis/href-counter/app "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nCMD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"_4-在特定的阶段停止构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-在特定的阶段停止构建"}},[s._v("#")]),s._v(" 4. 在特定的阶段停止构建")]),s._v(" "),e("p",[s._v("构建镜像时，不一定需要构建整个Dockerfile，包括每个阶段。 您可以指定目标构建阶段。 以下命令假定您使用的是以前的"),e("code",[s._v("Dockerfile")]),s._v("，但在名为"),e("code",[s._v("builder")]),s._v("的阶段停止：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build --target builder -t alexellis2/href-counter:latest "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("一些可能非常强大的场景是：")]),s._v(" "),e("ul",[e("li",[s._v("调试特定的构建阶段")]),s._v(" "),e("li",[s._v("使用启用了所有调试符号或工具的"),e("code",[s._v("调试")]),s._v("阶段，以及精益"),e("code",[s._v("生产")]),s._v("阶段")]),s._v(" "),e("li",[s._v("使用"),e("code",[s._v("测试")]),s._v("阶段，其中您的应用程序将填充测试数据，但使用使用实际数据的不同阶段构建生产")])]),s._v(" "),e("h2",{attrs:{id:"_5-使用外部镜像作为构建阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用外部镜像作为构建阶段"}},[s._v("#")]),s._v(" 5. 使用外部镜像作为构建阶段")]),s._v(" "),e("p",[s._v("使用多阶段构建时，您不仅限于从先前在Dockerfile中创建的阶段进行复制。 您可以使用"),e("code",[s._v("COPY --from")]),s._v("指令从单独的镜像复制，使用本地镜像名称，本地或Docker注册表中可用的标记或标记ID。 如有必要，Docker客户端会提取镜像并从那里复制工件。 语法是：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("COPY --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx:latest /etc/nginx/nginx.conf /nginx.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);