# 4.5 Docker中的Node.js容器化

搭建Express的WebAPI应用程序，基于 Node.js 平台，快速、开放、极简的 Web 开发框架；

## 1. 构建

首先假定你已经安装了 Node.js，接下来为你的应用创建一个目录，然后进入此目录并将其作为当前工作目录。

```shell
$ mkdir myapp
$ cd myapp
```

通过`npm init`命令为你的应用创建一个 `package.json` 文件。

```shell
$ npm init
```

此命令将要求你输入几个参数，例如此应用的名称和版本。 你可以直接按“回车”键接受大部分默认设置即可，下面这个除外：

```shell
entry point: (index.js)
```

键入 `app.js` 或者你所希望的名称，这是当前应用的入口文件。如果你希望采用默认的 `index.js` 文件名，只需按“回车”键即可。

接下来在 `myapp` 目录下安装 Express 并将其保存到依赖列表中。如下：

```shell
$ npm install express --save
```

如果只是临时安装 Express，不想将它添加到依赖列表中，可执行如下命令：

```shell
$ npm install express --no-save
```

## 2. 本地运行

在你的`app.js`文件中添加以下代码并保存：

```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

执行以下命令运行你的express应用程序：

```shell
$ node app.js
Example app listening on port 3000!
```

访问`http://localhost:3000`，将收到服务返回的数据：

```shell
$ curl http://localhost:3000/
Hello World!
```

## 3. 创建你的应用Docker镜像

在`myapp`目录下创建名为`Dockerfile`的文件，添加以下内容：

```shell
# Use node 4.4.5 LTS
FROM node:4.4.5

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3000

# Launch application
CMD ["node","app.js"]
```

运行以下命令创建docker镜像：

```shell
$ docker build -t express-app .
```

显示以下信息表示镜像构建成功：

```shell
Sending build context to Docker daemon  1.972MB
Step 1/6 : FROM node:4.4.5
...
Successfully built 42c4b51f3403
Successfully tagged express-app:latest
```

运行`docker images`命令查看已经构建的镜像：

```shell
REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
express-app              latest              42c4b51f3403        2 minutes ago       659MB
```

## 4. 发布镜像

运行`docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`命令为镜像设置标签：

```shell
$ docker tag express-app:latest <path-to-registry>/express-demo:latest
```

运行`docker login -u <username> -p <password> <path-to-registry>`登录镜像仓库

运行`docker push [OPTIONS] NAME[:TAG]`推送本地镜像到镜像仓库：

```shell
$ docker push <path-to-registry>/express-demo:latest
```

## 5. 启动镜像

运行`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

```shell
$ docker run -d -p 3280:3000 <path-to-registry>/express-demo:latest
```

