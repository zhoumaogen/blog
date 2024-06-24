# 2.1 使用快捷脚本安装

Docker在[get.docker.com](https://get.docker.com/)和[test.docker.com](https://test.docker.com/)上提供了快捷脚本，用于快速，非交互地将Docker CE的边缘和测试版本安装到开发环境中。脚本的源代码位于`docker-install`存储库中。**建议不要在生产环境中使用这些脚本**，在使用它们之前，您应该了解潜在的风险：

  * 脚本需要`root`或`sudo`权限才能运行。因此，在运行脚本之前，应仔细检查和审核脚本。
  * 这些脚本会尝试检测您的Linux发行版和版本，并为您配置包管理系统。此外，脚本不允许您自定义任何安装参数。从Docker的角度或您自己组织的指导方针和标准来看，这可能会导致配置不受支持。
  * 脚本安装包管理器的所有依赖项和建议，而不要求确认。这可能会安装大量软件包，具体取决于主机的当前配置。
  * 该脚本不提供选项来指定要安装的Docker版本，并安装在“边缘”通道中发布的最新版本。
  * 如果已使用其他机制在主机上安装了Docker，请不要使用快捷脚本。

此示例使用[get.docker.com](https://get.docker.com/)上的脚本在Linux上安装最新版本的Docker CE。要安装最新的测试版本，请改用[test.docker.com](https://test.docker.com/)。在下面的每个命令中，将每次出现的`get`替换为`test`。

> 警告：始终检查从Internet下载的脚本，然后在本地运行它们。

```shell
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh

<output truncated>
```

如果您想将Docker用作非root用户，您现在应该考虑将您的用户添加到“docker”组，例如：

```shell
sudo usermod -aG docker your-user
```

请记得注销并重新登录才能生效！

> 警告：将用户添加到“docker”组会授予他们运行容器的能力，这些容器可用于获取Docker主机上的root权限。 有关更多信息，请参阅[Docker守护程序攻击面](https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface)。

Docker CE安装后。 它在基于`DEB`的发行版上自动启动。 在基于`RPM`的分发中，您需要使用适当的`systemctl`或`service`命令手动启动它。 如消息所示，非root用户默认情况下无法运行Docker命令。

**升级**

如果您使用快捷脚本安装了Docker，则应直接使用软件包管理器升级Docker。 重新运行快捷脚本没有任何好处，如果它尝试重新添加已添加到主机的存储库，则可能会导致问题。
