module.exports = {
  "title": "0x1306da9",
  "description": "Loading ZhouMaogen's personal blog, Welcome.🥰",
  "dest": "dist",
  "base": "/blog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/images/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "valineConfig": {
      "appId": "ADvpoY5CcD4vMgkioaEmJ4HY-9Nh9j0Va",
      "appKey": "ehJtzbdKtM3bcgoKrgxzggwQ",
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "Keepalived浅析",
            "link": "/docs/keepalived/"
          },
          {
            "text": "Docker基础",
            "link": "/docs/docker/"
          },
          {
            "text": "现代C++",
            "link": "/docs/modern-cpp/"
          }
        ]
      },
      {
        "text": "个人链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "Gitee",
            "link": "https://gitee.com/zhoumaogen",
            "icon": "reco-mayun"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/CodeUnaVia",
            "icon": "reco-github"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/qq_38854285",
            "icon": "reco-csdn"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/keepalived/": [
        "",
        "1-Overview",
        "2-Install-Config",
        "3-Case-Nginx",
        "4-Case-LVS",
        "5-Debug"
      ],
      "/docs/docker/": [
        "",
        "1-Overview",
        "2-0-Install",
        "2-1-GetDocker",
        "2-2-Windows",
        "2-3-CentOS",
        "2-4-Ubuntu",
        "3-0-Base",
        "3-1-GetStart",
        "3-2-Container",
        "3-3-Images",
        "3-4-Service",
        "3-5-Swarm",
        "3-6-ApplicationStack",
        "3-7-Deployment",
        "4-0-Develop",
        "4-1-Dockerfile",
        "4-2-MultiStage",
        "4-3-Volume",
        "4-4-BestPractices",
        "4-5-Containerization-Node.js-APP",
        "4-6-Containerization-Java-APP"
      ],
      "/docs/modern-cpp/": [
        "",
        "1-Overview",
        "2-VisualCppforWindows",
        "3-VisualCppforLinux",
        "4-Workthrough",
        "5-LinuxCppIDE"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      },
      "socialLinks": [
      ]
    },
    "friendLink": [
      {
        "title": "JHUN",
        "desc": "江汉大学人工智能学院",
        "logo": "/images/jhun.png",
        "link": "https://sjxy.jhun.edu.cn/"
      },
      {
        "title": "Dream",
        "desc": "互联网金牌冲浪选手🏄‍",
        "logo": "https://avatars.githubusercontent.com/u/3382938?v=4",
        "link": "https://github.com/dream2zz"
      },
      {
        "title": "LiuSir",
        "desc": "互联网金牌冲浪选手🏄‍",
        "logo": "https://avatars.githubusercontent.com/u/32128085?v=4",
        "link": "https://github.com/CodeHourra"
      },
      {
        "title": "Nullpointer",
        "desc": "互联网金牌冲浪选手🏄‍",
        "logo": "https://avatars.githubusercontent.com/u/23731824?v=4",
        "link": "https://github.com/CodeLaViva"
      }
    ],
    "logo": "/images/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "0x1306da9",
    "authorAvatar": "/images/avatar.png",
    "startYear": "2016"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": {
    "@vuepress-reco/vuepress-plugin-bulletin-popover": {
      width: "300px", // 默认 260px
      title: "消息提示",
      body: [
        {
          type: "title",
          content: "欢迎与我联系！🎉🎉🎉",
          style: "text-aligin: center;font-size: 22px"
        }
      ],
      footer: [
        {
          type: "button",
          text: "邮箱",
          link: "mailto://zhoumaogen@outlook.com"
        },
        {
          type: "button",
          text: "鸣谢",
          link: "http://zhoumaogen.gitee.io/blog/blogs/other/2020/12-31-thanks.html"
        }
      ]
    }
  }
}
