---
title: 随笔：SpringBoot在普通类中使用@Autowired注解引用对象报NullPointerException异常
date: 2019-03-28
sidebar: 'auto'
tags:
 - java
 - springboot
categories: 
 - 软件开发
 - 随笔
---

:::tip
 `SpringBoot`在普通类中使用`@Autowired`注解引用`ApplicationContext`对象报`NullPointerException`异常。
:::

<!-- more -->


 `SpringBoot`在普通类中使用`@Autowired`注解引用`ApplicationContext`对象报`NullPointerException`异常，解决方法：

普通类(SampleClazz)实现`ApplicationContextAware`接口的`setApplicationContext`方法，将`ApplicationContext`对象传递到普通类：

```java
public class SampleClazz implements ApplicationContextAware {

    private static ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SampleClazz.applicationContext = applicationContext;
    }

    public static ApplicationContext getApplicationContext() {
        return applicationContext;
    }
}
```

## 问题原因（不一定准确）：

之所以叫`SampleClazz`为普通类，是因为它在实例化的时候我们大多采用`new SampleClazz()`的方式，而不是通过`@Autowired`注解自动装配的，这样一来就不受`Spring容器`来管理了，通过实现`ApplicationContextAware`接口来动态加载`Bean`，`ApplicationContext`对象就可以用了。

## 后记：
如果`getApplicationContext()`是报空指针异常的话，有可能是依赖`SampleClazz`的类没有受`Spring容器`管理，将该类所在的包加到`组件扫描`注解中：

```java
@SpringBootApplication
@ComponentScan({"service", "util"}) // 组件扫描
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```
