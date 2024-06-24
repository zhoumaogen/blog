# 3.2 容器

## 1. 先决条件

- [安装Docker 1.13或更高版本](https://docs.docker.com/engine/installation/)。

- 阅读第1节中的所有内容。

- 下面的命令可以为您的环境提供快速测试运行以确保您已完成所有设置：

```
docker run hello-world
```

## 2. 介绍

现在是时候开始使用Docker方式构建应用程序了。我们将从此类应用的层次结构的底层（即，容器）开始，这是本页面上涵盖的内容。在此级别之上的是服务，它定义了容器在生产中的行为方式，如[第3部分所述](http://172.22.3.3/Hakugei/docker/blob/master/3-GetStart.md#3-%E6%9C%8D%E5%8A%A1)。最后，处于最高级别的是技术栈，定义了[第5部分中](http://172.22.3.3/Hakugei/docker/blob/master/3-GetStart.md#5-%E5%BA%94%E7%94%A8%E6%A0%88)介绍的所有服务的交互 。

- 堆

- 服务

- **容器**（你在这里）您的新开发环境

过去，如果要开始编写 Python 应用，您的第一项业务是将 Python 运行时安装到机器上。但是，这会导致机器上的环境必须如此，才能使应用按预期运行；对于运行应用的服务器来说，也同样如此。

借助 Docker，您只需将可移植的 Python 运行时抓取为镜像，而无需进行安装。然后，您的构建可以将基本 Python 镜像与应用代码包含在一起，从而确保应用、其依赖项及运行时都一起提供。

这些可移植的镜像由 `Dockerfile` 定义。

### 2.1. 使用`Dockerfile`定义容器

`Dockerfile` 将在您的容器内定义环境中执行的操作。对网络接口和磁盘驱动器等资源的访问在此环境内实现虚拟化，这将独立于系统的其余部分，因此您必须将端口映射到外部，并具体说明您要“复制”到该环境的文件。但是，在执行此操作后，您可以期望此 `Dockerfile` 中定义的应用构建的行为在运行时始终相同。

#### `Dockerfile`

创建空目录并将名为 `Dockerfile` 的此文件放入其中。记录说明每个语句的注释。

```dockerfile
# Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```

  此 `Dockerfile` 引用了我们尚未创建的内容，名为 `app.py` 和 `requirements.txt`。在后续步骤中，我们会准备好这些内容。

### 2.2. 应用自身

  抓取这两个文件并将其放入 `Dockerfile` 所在的文件夹。这将完成我们的应用，如您所见它非常简单。将上述 `Dockerfile` 构建到镜像中时，由于 `Dockerfile` 的 `ADD` 命令而显示 `app.py` 和 `requirements.txt`，并且借助 `EXPOSE` 命令，将能够通过 HTTP 访问 `app.py` 的输出。

#### `requirements.txt`

```txt
Flask
Redis
```

#### `app.py`

```python
from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
  try:
      visits = redis.incr("counter")
  except RedisError:
      visits = "<i>cannot connect to Redis, counter disabled</i>"

  html = "<h3>Hello {name}!</h3>" \
         "<b>Hostname:</b> {hostname}<br/>" \
         "<b>Visits:</b> {visits}"
  return html.format(name=os.getenv("NAME", "world"), hostname=socket.gethostname(), visits=visits)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=80)
```

  现在，我们可以看到，`pip install -r requirements.txt` 将安装 `Python` 的 `Flask` 和 `Redis` 库，而此应用将输出环境变量 `NAME` 以及对 `socket.gethostname()` 调用的输出。最后，由于 `Redis` 未在运行（因为我们仅安装了 `Python` 库，而未安装 `Redis` 自身），因此我们应期望尝试在此处使用它将失败并生成错误消息。

### 2.3. 构建应用

好的！您不需要 Python 或系统上 `requirements.txt` 中的任何内容，也不会构建或运行此镜像来将它们安装在系统上。似乎您尚未真正使用 Python 和 Flask 设置环境，但已进行设置。

以下是 `ls` 应显示的内容：

```
$ ls
Dockerfile		app.py			requirements.txt
```

现在，运行构建命令。这将创建 Docker 镜像，我们将使用 `-t` 对其进行标记，以使其具有友好名称。

```
docker build -t friendlyhello .
```

您已构建的镜像在何处？它位于您的机器上的本地 Docker 镜像库中：

```
$ docker ./images/

REPOSITORY            TAG                 IMAGE ID
friendlyhello         latest              326387cea398
```

注意标签为何默认的是`latest`。标签的完整语法类似于`--tag=friendlyhello:v0.0.1`。

> #### Linux用户的故障排除
>
> *1. 代理服务器设置*
>
> 代理服务器可以在Web应用程序启动并运行后阻止其连接。如果您位于代理服务器后面，请使用以下`ENV`命令将以下行添加到Dockerfile中，以指定代理服务器的主机和端口：
>
> #Set proxy server, replace host:port with values for your servers
> ENV http_proxy host:port
> 
> ENV https_proxy host:port
>
> *2. `DNS`设置*
>
> DNS配置错误可能会产生问题`pip`。您需要设置自己的DNS服务器地址才能`pip`正常工作。您可能想要更改Docker守护程序的DNS设置。您可以`/etc/docker/daemon.json`使用`dns`密钥编辑（或创建）配置文件，如下所示：
>
> {
> 
>   "dns": ["your_dns_address", "8.8.8.8"]
> 
> }
>
> 在上面的示例中，列表的第一个元素是DNS服务器的地址。第二项是Google的DNS，可在第一项无法使用时使用。
>
> 在继续之前，请保存`daemon.json`并重新启动docker服务。
>
> $ sudo service docker restart
>
> 修复后，重试运行该`build`命令。

### 2.4. 运行应用

运行应用，使用 `-p` 参数将机器的 4000 端口映射到容器暴露的 80 端口：

```shell
$ docker run -p 4000:80 friendlyhello
```

您将看到 `Python` 正在为应用提供服务（网址为 `http://0.0.0.0:80`）的通知。但是，该消息来自不知道您已将其 80 端口映射到 4000 端口的容器的内部，因此需要将正确 URL 更改为 `http://localhost:4000`。

在 `Web` 浏览器中访问该 `URL`，以查看网页上提供的显示内容，包括“Hello World”文本、容器 ID以及 `Redis` 错误消息。

![/images/app-in-browser.png](./images/app-in-browser.png)

> **注意**：如果您在Windows 7上使用Docker Toolbox，请使用`Docker Machine IP`而不是`localhost`。例如，`http：//192.168.99.100：4000 /`。要查找`IP`地址，请使用该命令`docker-machine ip`。

您还可以在 shell 中使用 `curl` 命令查看相同内容。

```shell
$ curl http://localhost:4000

<h3>Hello World!</h3><b>Hostname:</b> 8fc990912a14<br/><b>Visits:</b> <i>cannot connect to Redis, counter disabled</i>
```

> **注意**：此端口重映射 `4000:80` 用于说明您在 `Dockerfile` 中暴露的内容与使用 `docker run -p` 发布的内容之间的差异。在后续步骤中，我们只需将主机上的 80 端口映射到容器中的 80 端口并使用 `http://localhost`。

在终端上按 `CTRL+C` 退出。

  > #### 在Windows上，显式停止容器
  >
  > 在Windows系统上，`CTRL+C`不会停止容器。因此，首先键入`CTRL+C`以获取提示（或打开另一个shell），然后键入`docker container ls`以列出正在运行的容器，然后 `docker container stop <Container NAME or ID>`停止容器。否则，当您尝试在下一步中重新运行容器时，会从守护程序收到错误响应。

现在，我们从后台在分离模式下运行应用。

```shell
docker run -d -p 4000:80 friendlyhello
```

您将获得应用容器的长ID，然后将返回到终端。容器现在在后台运行。您还可以使用 `docker ps` 查看缩写容器 ID（这两种 ID 可以在运行命令时交换工作）：

```
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED
1fa4ab2cf395        friendlyhello       "python app.py"     28 seconds ago
```

您将看到 `CONTAINER ID` 与 `http://localhost:4000` 上的内容相匹配。

现在，使用 `docker stop` 及 `CONTAINER ID` 结束该进程，如下所示：

```
docker stop 1fa4ab2cf395
```