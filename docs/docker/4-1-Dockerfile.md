# 4.1 使用Dockerfile的最佳实践

本文档介绍了构建高效镜像的建议最佳实践和方法。

Docker通过`--a`参数读取一个文本文件`Dockerfile`中的指令自动构建镜像，Dockerfile是按顺序包含构建指定镜像所需的所有命令。 Dockerfile遵循特定的格式和指令集，您可以在[Dockerfile引用](https://docs.docker.com/engine/reference/builder/)中找到它们。

Docker镜像由只读层组成，每个层都代表一个Dockerfile指令。 这些层是堆叠的，每个层都是前一层变化的增量。 思考这个Dockerfile：

```shell
FROM ubuntu:18.04
COPY . /app
RUN make /app
CMD python /app/app.py
```

每条指令创建一个层：

  * `FROM`从`ubuntu：18.04`镜像创建一个只读层。
  * `COPY`从Docker客户端的当前目录中添加文件。
  * `RUN`使用make构建您的应用程序。
  * `CMD`指定在容器中运行的命令。

运行镜像并生成容器时，可以在基础层的顶部添加新的可写层（“容器镜像层”）。对正在运行的容器所做的所有更改（例如，写入新文件，修改现有文件和删除文件）都将写入此可写容器层。

有关镜像层的更多信息（以及Docker如何构建和存储镜像），请参阅[关于存储驱动程序](https://docs.docker.com/storage/storagedriver/)。

## 1. 一般准则和建议

### 1.1. 创建精小的容器
Dockerfile定义的容器应该生成尽可能精小的容器。我们的意思是容器可以被停止和销毁，然后重建并用绝对最小的设置和配置替换。

请参阅《十二因素应用程序》法则下的[流程](https://12factor.net/processes)，了解以无状态方式运行容器的好处。

### 1.2. 了解构建上下文
发出`docker build`命令时，当前工作目录称为构建上下文。默认情况下，假定Dockerfile位于此处，但您可以使用文件标志（`-f`）指定其他位置。无论Dockerfile实际存在于何处，当前目录中的所有文件和目录的递归内容都将作为构建上下文发送到Docker守护程序。

> 构建上下文示例
> 为构建上下文创建一个目录并运用`cd`命令进入其中。将“hello”写入名为`hello`的文本文件中，并创建一个运行`cat`命令的Dockerfile。从构建上下文（`.`）中构建镜像：

```shell
mkdir myproject && cd myproject
echo "hello" > hello
echo -e "FROM busybox\nCOPY /hello /\nRUN cat /hello" > Dockerfile
docker build -t helloapp:v1 .
```

> 将`Dockerfile`和`hello`移动到单独的目录中并构建镜像的第二个版本（不依赖于上一次构建的缓存）。 使用`-f`指向Dockerfile并指定构建上下文的目录：

```shell
mkdir -p dockerfiles context
mv Dockerfile dockerfiles && mv hello context
docker build --no-cache -t helloapp:v2 -f dockerfiles/Dockerfile context
```

构建镜像时，无意中包含不必要的文件会导致更大的构建上下文和更大的镜像大小。 这可能增大构建镜像的时间，拉取和推送镜像的时间以及容器运行时大小。 要查看构建上下文有多大，请在构建`Dockerfile`时查找类似这样的消息：

```shell
Sending build context to Docker daemon  187.8MB
```

### 1.3. 通过`stdin`管道构建

Docker能够通过`stdin`与本地或远程构建上下文管道`Dockerfile`来构建镜像。 通过`stdin`管道`Dockerfile`对于执行一次性构建非常有用，无需将Dockerfile写入磁盘，或者在生成`Dockerfile`的情况下，并且之后不会持久化。

> 本节中使用的文本示例只是为方便起见，在`stdin`上提供的任何`Dockerfile`方法都可以被使用。
> 例如，以下命令是等效的：

```shell
echo -e 'FROM busybox\nRUN echo "hello world"' | docker build -
```

```shell
docker build -<<EOF
FROM busybox
RUN echo "hello world"
EOF
```

> 您可以使用您的首选方法或最适合您需求的方法替换示例。

**使用来自STDIN的DOCKERFILE构建镜像，不发送构建上下文**

此语法可通过`stdin`使用`Dockerfile`构建镜像，而不将其他文件作为构建上下文发送。 字符（` -` ）获取PATH的位置，并指示Docker从`stdin`而不是目录中读取构建上下文（仅包含Dockerfile）：

```shell
docker build [OPTIONS] -
```

以下示例使用通过`stdin`传递的`Dockerfile`构建镜像。 没有文件作为构建上下文发送到守护程序。

```shell
docker build -t myimage:latest -<<EOF
FROM busybox
RUN echo "hello world"
EOF
```

在`Dockerfile`不需要将文件复制到镜像中并且提高构建速度的情况下，省略构建上下文非常有用，这样的话没有文件发送到守护程序。

如果要通过从构建上下文中排除某些文件来提高构建速度，请参阅[使用.dockerignore排除](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#exclude-with-dockerignore)。

> 注意：如果使用此语法，则尝试使用`COPY`或`ADD`的Dockerfile构建将失败。 以下示例说明了这一点：

```shell
# create a directory to work in
mkdir example
cd example

# create an example file
touch somefile.txt

docker build -t myimage:latest -<<EOF
FROM busybox
COPY somefile.txt .
RUN cat /somefile.txt
EOF

# observe that the build fails
...
Step 2/3 : COPY somefile.txt .
COPY failed: stat /var/lib/docker/tmp/docker-builder249218248/somefile.txt: no such file or directory
```

**使用本地构建上下文和STDIN的DOCKERFILE构建镜像**

此语法使用本地文件系统上的文件构建镜像，同时使用`stdin`中的`Dockerfile`。 使用`-f`（或`--file`）选项指定要使用的`Dockerfile`，使用字符（` -` ）作为文件名来指示Docker从`stdin`读取`Dockerfile`：

```shell
docker build [OPTIONS] -f- PATH
```

下面的示例使用当前目录（`.`）作为构建上下文，并使用`Dockerfile`构建镜像，该Dockerfile使用当前文档传递给`stdin`。

```shell
# create a directory to work in
mkdir example
cd example

# create an example file
touch somefile.txt

# build an image using the current directory as context, and a Dockerfile passed through stdin
docker build -t myimage:latest -f- . <<EOF
FROM busybox
COPY somefile.txt .
RUN cat /somefile.txt
EOF
```

**使用远程构建上下文和STDIN的DOCKERFILE构建镜像**

此语法使用远程`git`仓库文件构建镜像，同时使用`stdin`中的`Dockerfile`。 使用`-f`（或`--file`）选项指定要使用的`Dockerfile`，使用字符（` -` ）作为文件名来指示Docker从`stdin`读取`Dockerfile`：

```shell
docker build [OPTIONS] -f- PATH
```

如果您希望从存储库构建镜像不包含`Dockerfile`，或者您希望使用自定义`Dockerfile`构建，而不维护自己的存储库分支，则此语法非常有用。

下面的示例使用`stdin`中的`Dockerfile`构建镜像，并在[GitHub上的“hello-world”Git存储库](https://github.com/docker-library/hello-world) 中添加`README.md`文件。

```shell
docker build -t myimage:latest -f- https://github.com/docker-library/hello-world.git <<EOF
FROM busybox
COPY README.md .
EOF
```

> 提示：
> 使用远程Git存储库构建镜像作为构建上下文时，Docker会在本地计算机上执行存储库的`git clone`，并将这些文件作为构建上下文发送到守护程序。 此功能要求在运行`docker build`命令的主机上安装`git`。

### 1.4. 包含.dockerignore文件

要排除与构建无关的文件（不重构源存储库），请使用`.dockerignore`文件。 此文件支持类似于`.gitignore`文件的排除模式。 有关创建信息，请参阅[.dockerignore文件](https://docs.docker.com/engine/reference/builder/#dockerignore-file)。

### 1.5. 使用多阶段构建

多阶段构建允许您大幅减小最终镜像的大小，而无需减少中间层和文件的数量。

由于镜像是在构建过程的最后阶段构建的，因此可以通过利用构建缓存来最小化镜像层。

例如，如果您的构建包含多个镜像层，则可以从较不频繁更改（以确保构建缓存可重用）到更频繁更改的顺序进行排序：

  * 安装构建应用程序所需的工具
  * 安装或更新库依赖项
  * 生成您的应用程序

一般Go应用程序的Dockerfile如下所示：

```shell
FROM golang:1.11-alpine AS build

# Install tools required for project
# Run `docker build --no-cache .` to update dependencies
RUN apk add --no-cache git
RUN go get github.com/golang/dep/cmd/dep

# List project dependencies with Gopkg.toml and Gopkg.lock
# These layers are only re-built when Gopkg files are updated
COPY Gopkg.lock Gopkg.toml /go/src/project/
WORKDIR /go/src/project/
# Install library dependencies
RUN dep ensure -vendor-only

# Copy the entire project and build it
# This layer is rebuilt when a file changes in the project directory
COPY . /go/src/project/
RUN go build -o /bin/project

# This results in a single layer image
FROM scratch
COPY --from=build /bin/project /bin/project
ENTRYPOINT ["/bin/project"]
CMD ["--help"]
```

### 1.6. 不要安装不必要的包

为了降低复杂性，依赖性，文件大小和构建时间，请避免安装额外的或不必要的软件包，因为它们可能“很好”。例如，您不需要在数据库镜像中包含文本编辑器。

### 1.7. 解耦应用程序

每个容器应该只有一个问题。将应用程序分离到多个容器中可以更容易地水平扩展和重用容器。例如，Web应用程序堆栈可能包含三个独立的容器，每个容器都有自己独特的镜像，以分离的方式管理Web应用程序，数据库和内存缓存。

将每个容器限制为一个进程是一个很好的经验法则，但它不是一个硬性规则。例如，不仅可以使用init进程生成容器，而且某些程序可能会自行生成其他进程。例如，`Celery`可以生成多个工作进程，`Apache`可以为每个请求创建一个进程。

使用您的最佳判断，尽可能保持容器清洁和模块化。如果容器彼此依赖，则可以使用`Docker容器网络`来确保这些容器可以进行通信。

### 1.8. 最小化层数

在旧版本的Docker中，最大限度地减少镜像中的镜像层数量以确保它们具有高性能非常重要。添加了以下功能以减少此限制：

  * 只有`RUN`，`COPY`，`ADD`指令才能创建镜像层。其他指令创建临时中间镜像，并不增加构建的大小。
  * 在可能的情况下，使用`多阶段构建`，并仅将所需的工件复制到最终镜像中。这允许您在中间构建阶段中包含工具和调试信息，而不会增加最终镜像的大小。

### 1.9. 对多行参数进行排序

只要有可能，通过按字母顺序排序多行参数来缓解以后的更改。这有助于避免重复包并使列表更容易更新。这也使PR更容易阅读和审查。在反斜杠（\）之前添加空格也有帮助。

这是`buildpack-deps`镜像中的一个示例：

```shell
RUN apt-get update && apt-get install -y \
  bzr \
  cvs \
  git \
  mercurial \
  subversion
```

### 1.10. 利用构建缓存

构建镜像时，Docker会逐步执行Dockerfile中的指令，按指定的顺序执行每个指令。在检查每条指令时，Docker会在其缓存中查找可以重用的现有镜像，而不是创建新的（重复）镜像。

如果您根本不想使用缓存，可以在docker build命令中使用--no-cache = true选项。但是，如果您确实让Docker使用其缓存，那么了解它何时可以找到匹配的镜像非常重要。 Docker遵循的基本规则概述如下：

从已经在高速缓存中的父镜像开始，将下一条指令与从该基本镜像导出的所有子镜像进行比较，以查看它们中的一个是否使用完全相同的指令构建。如果不是，则缓存无效。

在大多数情况下，只需将Dockerfile中的指令与其中一个子镜像进行比较即可。但是，某些说明需要更多的检查和解释。

对于`ADD`和`COPY`指令，将检查镜像中文件的内容，并为每个文件计算校验和。在这些校验和中不考虑文件的最后修改时间和最后访问时间。在高速缓存查找期间，将校验和与现有镜像中的校验和进行比较。如果文件中的任何内容（例如内容和元数据）发生了任何更改，则缓存将失效。

除了`ADD`和`COPY`命令之外，高速缓存检查不会查看容器中的文件以确定高速缓存匹配。例如，在处理RUN apt-get -y update命令时，不检查容器中更新的文件以确定是否存在缓存命中。在这种情况下，只需使用命令字符串本身来查找匹配项。

缓存无效后，所有后续Dockerfile命令都会生成新镜像，并且不使用缓存。

## 2. Dockerfile 指令

这些建议旨在帮助您创建高效且可维护的Dockerfile。


| 指令       | 作用                                                         | 用法                                     |
| :--------- | :----------------------------------------------------------- | :--------------------------------------- |
| FROM       | `Dockerfile`中的第一条非注释指令                             | `FROM ubuntu`                            |
| ADD/COPY   | 将多个源文件从上下文复制到指定路径的容器的文件系统           | `COPY .bash_profile /home`               |
| ENV        | 设置环境变量                                                 | `ENV HOSTNAME=test`                      |
| RUN        | 执行某个命令                                                 | `RUN apt-get update`                     |
| CMD        | 执行容器的默认启动项                                         | `CMD ["/bin/echo", "hello world"]`       |
| EXPOSE     | 容器将侦听的网络端口                                         | `EXPOSE 8093`                            |
| LABEL      | 为镜像添加标签                                               | `LABEL com.example.version="0.0.1-beta"` |
| ENTRYPOINT | 设置镜像的主命令，允许该镜像像该命令一样运行（然后使用CMD作为默认标志） | `ENTRYPOINT ["s3cmd"] CMD ["--help"]`    |
| VOLUME     | 数据挂载                                                     | `VOLUME /myvol`                          |
| USER       | 指定服务运行的用户                                           | `USER <UID>[:<GID>]"`                    |
| WORKDIR    | 指定绝对路径的工作目录                                       | `WORKDIR /path/to/workdir`               |