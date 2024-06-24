# 2.4 Ubuntu

## 1. 获取适用于 Ubuntu 的 Docker CE

如需开始在 Ubuntu 上使用 Docker CE，请确保您[满足先决条件](https://docs.docker-cn.com/engine/installation/linux/docker-ce/ubuntu/#prerequisites)，然后再[安装 Docker](https://docs.docker-cn.com/engine/installation/linux/docker-ce/ubuntu/#install-docker)。

## 2. 先决条件

### 2.1. Docker EE 客户

如需安装 Docker 企业版 (Docker EE)，请转至[获取适用于 Ubuntu 的 Docker EE](https://docs.docker-cn.com/engine/installation/linux/docker-ee/ubuntu/) **而不是本主题**。

如需了解有关 Docker EE 的更多信息，请参阅 [Docker 企业版](https://www.docker.com/enterprise-edition/)。

### 2.2. 操作系统要求

如需安装 Docker，您需要以下 Ubuntu 版本之一的 64 位版本：

- Zesty 17.04
- Yakkety 16.10
- Xenial 16.04 (LTS)
- Trusty 14.04 (LTS)

`x86_64`、`armhf` 和 `s390x` (IBM z Systems) 架构上的 Ubuntu 支持 Docker CE。

> **s390x 限制**：System Z 仅在 Ubuntu Xenial、 Yakkety 和 Zesty 上受支持。

### 2.3. 卸载旧版本

Docker 的早期版本称为 `docker` 或 `docker-engine`。如果安装了这些版本，请卸载它们：

```
$ sudo apt-get remove docker docker-engine docker.io
```

如果 `apt-get` 报告未安装任何这些软件包，这表示情况正常。

将保留 `/var/lib/docker/` 的内容，包括镜像、容器、存储卷和网络。Docker CE 软件包现在称为 `docker-ce`。

### 2.4. Trusty 14.04 的推荐附加软件包

请安装 `linux-image-extra-*` 软件包，除非您不安装的理由足够充分，这些软件包允许 Docker 使用 `aufs` 存储驱动。

```
$ sudo apt-get update

$ sudo apt-get install \
    linux-image-extra-$(uname -r) \
    linux-image-extra-virtual
```

对于 Ubuntu 16.04 及更高版本，Linux 内核支持 OverlayFS，并且默认情况下，Docker CE 将使用 `overlay2` 存储驱动。

## 3. 安装 Docker CE

您可以通过不同方式安装 Docker CE，具体取决于您的需求：

- 大多数用户[设置 Docker 的镜像仓库](https://docs.docker-cn.com/engine/installation/linux/docker-ce/ubuntu/#install-using-the-repository)并从中进行安装，从而可以轻松完成安装和升级任务。这是推荐方法。
- 一些用户下载 DEB 软件包并手动进行安装，然后完全由手动管理升级。在某些情况（例如，在不能访问互联网的隔离系统中安装 Docker）下，这很有用。

### 3.1. 使用镜像仓库进行安装

首次在新的主机上安装 Docker CE 之前，您需要设置 Docker 镜像仓库。然后，您可以从此镜像仓库安装和更新 Docker。

* 设置镜像仓库

1.更新 `apt` 软件包索引：

```
$ sudo apt-get update
```

2.安装软件包，以允许 `apt` 通过 HTTPS 使用镜像仓库：

```
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
```

3.添加 Docker 的官方 GPG 密钥：

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

验证密钥指纹是否为 `9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88`。

```
$ sudo apt-key fingerprint 0EBFCD88

pub   4096R/0EBFCD88 2017-02-22
      Key fingerprint = 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid                  Docker Release (CE deb) <docker@docker.com>
sub   4096R/F273FCD8 2017-02-22
```

4.使用下列命令设置 **stable** 镜像仓库。您始终需要使用 **stable** 镜像仓库，即使您还需要通过 **edge** 或 **testing** 镜像仓库安装构建也是如此。如需添加 **edge** 或 **testing** 镜像仓库，请在以下命令中的词 `stable` 之后添加词 `edge` 和/或 `testing`。

> **注**：下面的 `lsb_release -cs` 子命令用于返回您的 Ubuntu 分发版，例如 `xenial`。
>
> 有时，在 Linux Mint 等分发版中，您可能必须将 `$(lsb_release -cs)` 更改为您的父代 Ubuntu 分发版。例 如：如果您使用的是 `Linux Mint Rafaela`，您可以使用 `trusty`。

**amd64**：

```
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

**armhf**：

```
$ sudo add-apt-repository \
   "deb [arch=armhf] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

**s390x**：

```
$ sudo add-apt-repository \
   "deb [arch=s390x] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

> **注**：从 Docker 17.06 开始，还会将 stable 版本推送到 **edge** 和 **testing** 镜像仓库。

[了解 **stable** 和 **edge** 渠道](https://docs.docker-cn.com/engine/installation/)。

* 安装 DOCKER CE

1.更新 `apt` 软件包索引。

```
$ sudo apt-get update
```

2.安装最新版本的 Docker CE，或者转至下一步以安装特定版本。将替换任何现有的 Docker 安装版本。

```
$ sudo apt-get install docker-ce
```

> **警告**： 如果您启用了多个 Docker 镜像仓库，进行安装 或者更新而不在 `apt-get install` 或 `apt-get update` 命令中指定版本将始终安装可用的最高版本， 这可能无法满足您的稳定性需求。

3.在生产系统中，您应该安装特定版本的 Docker CE，而不是始终使用最新版本。此输出将被截断。列出可用版本。

```
$ apt-cache madison docker-ce

docker-ce | 17.06.0~ce-0~ubuntu-xenial | https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
```

此列表的内容取决于启用了哪些镜像仓库，并且将特定于您的 Ubuntu 版本（在本示例中，由版本中的 `xenial` 后缀表示）。选择一个特定版本进行安装。第二列为版本字符串。第三列为镜像仓库名称，它表示软件包来自哪个镜像仓库并按扩展其稳定性级别列出。如需安装特定版本，请将版本字符串附加到软件包名称，并使用等号 (`=`) 分隔它们：

```
$ sudo apt-get install docker-ce=<VERSION>
```

Docker 守护进程将自动启动。

4.验证是否正确安装了 Docker CE，方法是运行 `hello-world` 镜像。

```
$ sudo docker run hello-world
```

此命令将下载一个测试镜像并在容器中运行它。容器运行时，它将输出一条参考消息并退出。

Docker CE 已安装并且正在运行。您需要使用 `sudo` 运行 Docker 命令。继续执行 [Linux 安装后步骤](https://docs.docker-cn.com/engine/installation/linux/docker-ce/linux-postinstall/)以允许非特权用户运行 Docker 命令，以及了解其他可选配置步骤。

* 升级 DOCKER CE

如需升级 Docker CE，首先运行 `sudo apt-get update`，然后按照[安装说明](https://docs.docker-cn.com/engine/installation/linux/docker-ce/ubuntu/#install-docker)执行操作，并选择您要安装的新版本。

### 3.2. 从软件包进行安装

如果您无法使用 Docker 镜像仓库安装 Docker CE，可以下载适用于您的版本的 `.deb` 文件，并手动进行安装。每次要升级 Docker CE 时，您都需要下载一个新文件。

1.转至 <https://download.docker.com/linux/ubuntu/dists/>，选择您的 Ubuntu 版本，浏览至 `pool/stable/`，然后选择 `amd64`、`armhf` 或 `s390x`。下载适用于您要安装的 Docker 版本的 `.deb` 文件以及适用于您的 Ubuntu 版本的 `.deb` 文件。

> **注**：如需安装 **edge** 软件包，请将 URL 中的词 `stable` 更改为 `edge`。 [了解 **stable** 和 **edge** 渠道](https://docs.docker-cn.com/engine/installation/)。

2.安装 Docker CE，并将下面的路径更改为您下载 Docker 软件包的路径。

```
$ sudo dpkg -i /path/to/package.deb
```

Docker 守护进程将自动启动。

3.验证是否正确安装了 Docker CE，方法是运行 `hello-world` 镜像。

```
$ sudo docker run hello-world
```

此命令将下载一个测试镜像并在容器中运行它。容器运行时，它将输出一条参考消息并退出。

Docker CE 已安装并且正在运行。您需要使用 `sudo` 运行 Docker 命令。继续执行[Linux 的安装后步骤](https://docs.docker-cn.com/engine/installation/linux/linux-postinstall/)以允许非特权用户运行 Docker 命令，以及了解其他可选配置步骤。

* 升级 DOCKER CE

如需升级 Docker CE，请下载较新的软件包文件并重复[安装过程](https://docs.docker-cn.com/engine/installation/linux/docker-ce/ubuntu/#install-from-a-package)，指向新文件。

## 4. 卸载 Docker CE

1.卸载 Docker CE 软件包：

```
$ sudo apt-get purge docker-ce
```

2.主机上的镜像、容器、存储卷、或定制配置文件不会自动删除。如需删除所有镜像、容器和存储卷，请运行下列命令：

```
$ sudo rm -rf /var/lib/docker
```

您必须手动删除任何已编辑的配置文件。

