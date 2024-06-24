# 4.2 使用多阶段构建

多阶段构建是守护程序和客户端上需要Docker 17.05或更高版本的新功能。 多阶段构建对于那些努力优化Dockerfiles同时使其易于阅读和维护的人来说非常有用。

## 1. 前言

构建镜像最具挑战性的一点是保持镜像尺寸不变。 Dockerfile中的每条指令都为镜像添加了一个镜像层，您需要记住在移动到下一层之前清除任何不需要的工件。 为了编写一个真正高效的Dockerfile，传统上需要使用shell技巧和其他逻辑来保持层尽可能小，并确保每个层都具有前一层所需的工件，而不是其他任何东西。

实际上很常见的是有一个Dockerfile用于开发（其中包含构建应用程序所需的所有内容），以及一个用于生产的精简版Dockerfile，它只包含您的应用程序以及运行它所需的内容。 这被称为“建造者模式”。 维护两个Dockerfiles并不理想。

这是一个`Dockerfile.build`和`Dockerfile`的例子，它遵循上面的构建器模式：

`Dockerfile.build:`

```shell
FROM golang:1.7.3
WORKDIR /go/src/github.com/alexellis/href-counter/
COPY app.go .
RUN go get -d -v golang.org/x/net/html \
  && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .
```

请注意，此示例还使用Bash`&&`运算符人为压缩两个`RUN`命令，以避免在镜像中创建其他镜像层，这很容易出错并且难以维护。 例如，插入另一个命令并很容易忘记使用`\ `字符继续运行。

`Dockerfile:`

```shell
FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY app .
CMD ["./app"]  
```

`build.sh:`

```shell
#!/bin/sh
echo Building alexellis2/href-counter:build

docker build --build-arg https_proxy=$https_proxy --build-arg http_proxy=$http_proxy \  
    -t alexellis2/href-counter:build . -f Dockerfile.build

docker container create --name extract alexellis2/href-counter:build  
docker container cp extract:/go/src/github.com/alexellis/href-counter/app ./app  
docker container rm -f extract

echo Building alexellis2/href-counter:latest

docker build --no-cache -t alexellis2/href-counter:latest .
rm ./app
```

当您运行`build.sh`脚本时，它需要构建第一个镜像，从中创建容器以复制工件，然后构建第二个镜像。 这两个镜像占用了您的系统空间，而且在本地磁盘上多出此`app`组件。

多阶段构建极大地简化了这种情况！

## 2. 使用

对于多阶段构建，您在Dockerfile中使用多个`FROM`语句。 每个`FROM`指令可以使用不同的基础，并且每个指令都开始构建的新阶段。 您可以选择性地将工件从一个阶段复制到另一个阶段，从而在最终镜像中留下您不想要的所有内容。 为了说明这是如何工作的，让我们调整上一节中的Dockerfile以使用多阶段构建。

`Dockerfile:`

```shell
FROM golang:1.7.3
WORKDIR /go/src/github.com/alexellis/href-counter/
RUN go get -d -v golang.org/x/net/html  
COPY app.go .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=0 /go/src/github.com/alexellis/href-counter/app .
CMD ["./app"]  
```

您只需要单个Dockerfile。 您也不需要单独的构建脚本。 只需运行`docker build`。

```shell
$ docker build -t alexellis2/href-counter:latest .
```

最终结果是与以前相同的微小生产镜像，复杂性显着降低。 您不需要创建任何中间镜像，也不需要将任何工件提取到本地系统。

它是如何工作的？ 第二个`FROM`指令以`alpine：latest`镜像为基础开始一个新的构建阶段。 `COPY --from=0`行仅将前一阶段的构建工件复制到此新阶段。 Go SDK和任何中间件都被忽略，而不是保存在最终镜像中。

## 3. 为构建阶段命名

默认情况下，阶段未命名，您可以通过整数来引用它们，从第一个`FROM`指令开始为0。 但是，您可以通过向`FROM`指令添加`as <NAME>`来命名您的阶段。 此示例通过命名阶段并使用`COPY`指令中的名称来改进前一个示例。 这意味着即使稍后重新排序Dockerfile中的指令，`COPY`也不会中断。

```shell
FROM golang:1.7.3 as builder
WORKDIR /go/src/github.com/alexellis/href-counter/
RUN go get -d -v golang.org/x/net/html  
COPY app.go    .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/github.com/alexellis/href-counter/app .
CMD ["./app"]  
```

## 4. 在特定的阶段停止构建

构建镜像时，不一定需要构建整个Dockerfile，包括每个阶段。 您可以指定目标构建阶段。 以下命令假定您使用的是以前的`Dockerfile`，但在名为`builder`的阶段停止：

```shell
$ docker build --target builder -t alexellis2/href-counter:latest .
```

一些可能非常强大的场景是：

- 调试特定的构建阶段
- 使用启用了所有调试符号或工具的`调试`阶段，以及精益`生产`阶段
- 使用`测试`阶段，其中您的应用程序将填充测试数据，但使用使用实际数据的不同阶段构建生产

## 5. 使用外部镜像作为构建阶段

使用多阶段构建时，您不仅限于从先前在Dockerfile中创建的阶段进行复制。 您可以使用`COPY --from`指令从单独的镜像复制，使用本地镜像名称，本地或Docker注册表中可用的标记或标记ID。 如有必要，Docker客户端会提取镜像并从那里复制工件。 语法是：

```shell
COPY --from=nginx:latest /etc/nginx/nginx.conf /nginx.conf
```