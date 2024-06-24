## 3. Linux下的C++开发环境搭建

### 3.1 Ubuntu 下的 C++环境搭建

#### 3.1.1 下载安装 Ubuntu

#### 3.1.2 安装C++编译环境

在 Ubuntu 中要想编译 c程序可以安装 GCC 编译器，编译 C++ 的话就不能使用 gcc 了，要使用 G++ 编译器。在 Ubuntu 上只需两个命令即可安装上 GCC 及 G++ 编译器：

`sudo apt-get update    //更新源列表。`

`sudo apt-get install build-essential    //安装了该软件包，编译c/c++所需要的软件包也都会被安装`

一个简单的开发环境就这样搭建好了。

#### 3.1.3 编译运行

* 创建一个 .cpp文件

* 使用系统自带的 gedit（gedit XXX.cpp，并且在右下角选择语言类型） 对文件进行编辑

* 使用 g++ test.cpp  -o tests 进行编译，并且将编译后文件输出为 tests

* ./tests 运行编译后文件# CentOS 下的 C++环境搭建

#### 3.1.4 安装 VsCode（基于 Debian和 Ubuntu的发行版）

安装基于Debian / Ubuntu的发行版的最简单方法是通过图形软件中心（如果可用）或通过以下命令行下载并安装[.deb软件包（64位）](https://go.microsoft.com/fwlink/?LinkID=760868)：

```Linux
sudo dpkg -i <file>.deb
sudo apt-get install -f # Install dependencies
```

安装.deb软件包将自动安装 apt存储库和签名密钥，以使用常规系统机制启用自动更新。请注意，[下载页面](https://code.visualstudio.com/Download)上也提供了32位和.tar.gz二进制文件。

也可以使用以下脚本手动安装存储库和密钥：

```Linux
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

然后使用以下命令更新包缓存并安装包：

```Linux
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install code # or code-insiders
```

### 3.2 CentOS 下的 C++环境搭建

#### 3.2.1 下载安装 CentOS

#### 3.2.2 安装C++编译环境

打开终端，使用 yum 安装 C++ 环境支撑

`sudo yum install gcc-c++`

#### 3.2.3 安装 VsCode（RHEL，Fedora和基于 CentOS的发行版）

我们目前在yum存储库中发布稳定的64位VS代码，以下脚本将安装密钥和存储库：

```Linux
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc"
> /etc/yum.repos.d/vscode.repo'
```

然后使用`dnf`（Fedora 22及更高版本）更新包缓存并安装包：

```Linux
dnf check-update
sudo dnf install code
```

或者在旧版本上使用`yum`：

```Linux
yum check-update
sudo yum install code
```

### 3.3 Linux 的 C++ IDE

见[5 Linux下的C++ IDE](./5-LinuxCppIDE.html)
