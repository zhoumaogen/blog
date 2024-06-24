# 3.1 设置向导

## 1. Docker概念

Docker是开发人员和系统管理员使用容器来进行**开发，部署和运行**应用程序的一个平台。使用Linux容器部署应用程序称为*容器化*，容器不是一个新的概念，但是它们使得部署应用程序变得越来越简单。

容器化越来越受欢迎，因为容器是：

- 灵活：即使是最复杂的应用也可以容器化。
- 轻量级：容器利用并共享主机内核。
- 可互换：您可以即时部署更新和升级。
- 便携式：您可以在本地构建，部署到云，并在任何地方运行。
- 可扩展：您可以增加并自动分发容器副本。
- 可堆叠：您可以垂直和即时堆叠服务。

![/images/laurel-docker-containers.png](./images/laurel-docker-containers.png)

## 2. 镜像和容器

通过运行镜像来启动一个容器。一个**镜像**是一个可执行的包，其中包括运行应用程序所需的所有内容--代码，运行时，库，环境变量，和配置文件。

**容器**是镜像的运行时实例 - 实际执行时镜像会在内存中变成什么（即镜像状态或者是一个用户进程）。像在Linux上一样，你可以通过命令`docker ps`来查看正在运行的容器列表

## 3. 容器和虚拟机

一个**容器**中运行*原生* Linux和共享主机与其它容器的内核。它运行一个独立的进程，不占用任何其他可执行文件的内存，使其轻量级。

相比之下，**虚拟机**（VM）运行一个完整的“客户”操作系统，通过虚拟机管理程序对主机资源进行*虚拟*访问。通常，VM提供的环境比大多数应用程序需要的资源更多。

![/images/Container@2x.png](./images/Container@2x.png)

![/images/VM@2x.png](./images/VM@2x.png)

## 4. 准备Docker环境

在[支持的平台](https://docs.docker.com/ee/supported-platforms/)上安装[维护版本](https://docs.docker.com/engine/installation/#updates-and-patches)的Docker Community Edition（CE）或Enterprise Edition（EE） 。

> 完整的Kubernetes集成
>
> - [Docker Desktop for Mac上的Kubernetes](https://docs.docker.com/docker-for-mac/kubernetes/) 可在[17.12 Edge（mac45）](https://docs.docker.com/docker-for-mac/edge-release-notes/#docker-community-edition-17120-ce-mac45-2018-01-05)或 [17.12 Stable（mac46）](https://docs.docker.com/docker-for-mac/release-notes/#docker-community-edition-17120-ce-mac46-2018-01-09)及更高版本中使用。
> - [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/kubernetes/) 上的[Kubernetes](https://docs.docker.com/docker-for-windows/edge-release-notes/#docker-community-edition-18020-ce-rc1-win50-2018-01-26)仅在 [18.02 Edge（win50）](https://docs.docker.com/docker-for-windows/edge-release-notes/#docker-community-edition-18020-ce-rc1-win50-2018-01-26)和更高边缘通道中提供。

[安装Docker](http://confluence.gjsy.gsafety.com/pages/viewpage.action?pageId=8103704)

## 5. 测试Docker版本

1. 运行`docker --version`并确保您拥有受支持的Docker版本：

```shell
docker --version

Docker version 17.12.0-ce, build c97c6d6
```

2. 运行`docker info`（或`docker version`不需要`--`）以查看有关Docker安装的更多详细信息：

```shell
docker info

Containers: 0
Running: 0
Paused: 0
Stopped: 0
./images/: 0
Server Version: 17.12.0-ce
Storage Driver: overlay2
...
```

> 要避免权限错误（以及使用`sudo`），请将您的用户添加到`docker`组中。[阅读更多](https://docs.docker.com/engine/installation/linux/linux-postinstall/)。

### 5.1. 测试Docker安装

1. 通过运行简单的Docker镜像[hello-world来](https://hub.docker.com/_/hello-world/)测试您的安装是否有效 ：

```shell
docker run hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
ca4f61b1923c: Pull complete
Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```

2. 列出`hello-world`下载到您的计算机的图像：

```shell
docker image ls
```

3. 列出`hello-world`在显示其消息后退出的容器（由图像生成）。如果它仍在运行，您将不需要`--all`选项：

```shell
docker container ls --all

CONTAINER ID     IMAGE           COMMAND      CREATED            STATUS
54f4984ed6a8     hello-world     "/hello"     20 seconds ago     Exited (0) 19 seconds ago
```

### 5.2. 回顾和备忘单

```shell
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker ./images/
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq
```

### 5.3. 第一部分的结论

容器化使[CI / CD](https://www.docker.com/solutions/cicd)无缝。例如：

- 应用程序没有系统依赖性
- 可以将更新推送到分布式应用程序的任何部分
- 资源密度可以优化。

使用`Docker`，扩展应用程序是一个新的可执行文件，而不是运行繁重的`VM`主机。

接下来就可以正式了解容器了!
