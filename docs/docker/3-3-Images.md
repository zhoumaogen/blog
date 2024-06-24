# 3.3 镜像

## 1. 共享镜像

为了说明我们刚才创建的可移植性，可以上传已构建的镜像并在其他地方运行它。但是，在您要将容器部署到生产环境中时，需要了解如何推送到镜像库。

镜像库是镜像仓库的集合，而镜像仓库是镜像的集合 - 除了代码已构建之外，类似于 GitHub 镜像仓库。镜像库中的一个帐户可以创建很多镜像仓库。默认情况下，`docker` CLI 使用 Docker 的公用镜像库。

> **注**：我们将在此处使用 Docker 的公用镜像库，仅仅因为它是免费的并且经过预先配置，但有许多公用镜像库可供选择，并且您甚至可以使用 [Docker Trusted Registry](https://docs.docker-cn.com/datacenter/dtr/2.2/guides/) 设置您自己的专用镜像库。

## 2. 使用 Docker ID 登录

如果您没有 Docker 帐户，请在 [cloud.docker.com](https://cloud.docker.com/) 中进行注册。记录您的用户名。

登录本地机器上的 Docker 公用镜像库。

```shell
docker login
```

## 3. 标记镜像

用于将本地镜像与镜像库中的镜像仓库相关联的表示法为 `username/repository:tag`。tag 是可选项，但建议使用它，因为这是镜像库用于为 Docker 镜像指定版本的机制。针对上下文为镜像库和 tag 指定有意义的名称，例如 `get-started:part1`.这会将镜像放入 `get-started` 镜像仓库并将其标记为 `part1`。

现在，将其合并到一起，以标记镜像。使用您的用户名、镜像仓库和标签名称运行 `docker tag image`，以便镜像将上传到所需目的地。此命令的语法为：

```
docker tag image username/repository:tag
```

例如：

```
docker tag friendlyhello john/get-started:part1
```

运行`docker images`以查看新标记的镜像。（您还可以使用 `docker image ls`。）

```
$ docker images
REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
friendlyhello            latest              d9e555c53008        3 minutes ago       195MB
john/get-started         part1               d9e555c53008        3 minutes ago       195MB
python                   2.7-slim            1c7128a655f6        5 days ago          183MB
...
```

## 4. 发布镜像

将已标记的镜像上传到镜像仓库：

```
docker push username/repository:tag
```

完成后，将公开此上传的结果。如果登录 [Docker Hub](https://hub.docker.com/)，可以使用其 pull 命令看到新的镜像。

## 5. 从远程镜像仓库中拉取并运行镜像

从现在开始，您可以使用 `docker run`，并且可以使用以下命令在任何机器上运行您的应用：

```
docker run -p 4000:80 username/repository:tag
```

如果镜像在机器本地不可用，Docker 将从镜像仓库中拉取它。

```
$ docker run -p 4000:80 john/get-started:part1
Unable to find image 'john/get-started:part1' locally
part1:Pulling from orangesnap/get-started
10a267c67f42:Already exists
f68a39a6a5e4:Already exists
9beaffc0cf19:Already exists
3c1fe835fb6b:Already exists
4c9f1fa8fcb8:Already exists
ee7d8f576a14:Already exists
fbccdcced46e:Already exists
Digest: sha256:0601c866aab2adcc6498200efd0f754037e909e5fd42069adeff72d1e2439068
Status: Downloaded newer image for john/get-started:part1
 * Running on http://0.0.0.0:80/ (Press CTRL+C to quit)
```

> **注**：如果您未指定这些命令中的 `:tag` 部分，在进行构建和运行镜像时，将使用标签 `:latest` 。Docker 将使用在未指定标签的情况下运行的镜像的最新版本（可以不是最新镜像）。

无论 `docker run` 在何处执行，它将从 `requirements.txt` 拉取您的镜像及 Python 和所有依赖项，然后运行代码。所有内容都在一个小软件包中提供，并且主机只需安装 Docker 来运行它。

## 6. 总结

以上是此页面的所有内容。在下一节中，我们学习如何通过在**服务**中运行此容器来扩展应用。

以下是此页面上的基本 Docker 命令列表，以及一些相关命令（如果您要在继续之前进行进一步探索）。

```shell
docker build -t friendlyname .# 使用此目录的 Dockerfile 创建镜像
docker run -p 4000:80 friendlyname  # 运行端口 4000 到 90 的“友好名称”映射
docker run -d -p 4000:80 friendlyname         # 内容相同，但在分离模式下
docker ps                                 # 查看所有正在运行的容器的列表
docker stop <hash>                     # 平稳地停止指定的容器
docker ps -a           # 查看所有容器的列表，甚至包含未运行的容器
docker kill <hash>                   # 强制关闭指定的容器
docker rm <hash>              # 从此机器中删除指定的容器
docker rm $(docker ps -a -q)           # 从此机器中删除所有容器
docker images -a       # 显示此机器上的所有镜像
docker rmi <imagename>            # 从此机器中删除指定的镜像
docker rmi $(docker images -q)  # 从此机器中删除所有镜像
docker login             # 使用您的 Docker 凭证登录此 CLI 会话
docker tag <image> username/repository:tag  # 标记 <image> 以上传到镜像库
docker push username/repository:tag            # 将已标记的镜像上传到镜像库
docker run username/repository:tag                   # 运行镜像库中的镜像
```