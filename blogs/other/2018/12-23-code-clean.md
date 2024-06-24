---
title: 《代码整洁之道》归纳
date: 2017-08-10
sidebar: 'auto'
sticky:
 - type: 1
 - sort type: 2
tags:
 - 代码质量
categories: 
 - 其它
---

## 1. 书籍信息

书名：《Clean Code : A Handbook of Agile Software Craftsmanship》

翻译：韩磊

> 引用：[USA]Martin R C . 代码整洁之道[M]. 人民邮电出版社, 2010.


## 2. 第二章：有意义的命名总结

#### 2.1. 名副其实

[1]变量、函数、或类的名称应该已经答复了所有的大问题，它应该告诉你为什么存在，做什么事，应该怎么做；

```java
// 反例
int d; //消逝的时间

//正例

int elapsedTimeInDays;
int daysSinceCreation;
int fileAgeInDays;
```

[2]多用常量表示数字的意义，不要在判断式中使用数字或字符串；

```java
// 反例
if (list[0] == 4)
dosomething();

// 正例
if (cell[STATUS_VALUE] == FLAGGED)
dosomething();
```

#### 2.2. 避免误导

[1]不用`accounList`来指代账号列表，除非它真的是`List`类型，可用`accounts`代替；

[2]同一文件中不使用相似度高的词汇命名，不使用英文字母`o/l`、数字`0/1`命名；

#### 2.3. 有意义的区分

[1]用`source/target`命名函数参数好过用`a1/a2`；

[2]`Table`一词不出现在表的命名中，`Variable`一词不出现在变量名中，不必用`m_`作为成员变量的前缀，不必用`I/Abstact`作为接口或者抽象类的前缀；

#### 2.4. 一以贯之

[1]在`fetch/retrieve/get`中选一个表示获取，在`controller/manager/driver`中选一个表示驱动；

[2]用`insert`表示添加数据好过用`add`；

#### 2.5. 使用解决方案领域名称

[1]代码是给程序员看的，尽量用计算机科学领域名称命名，如`Visitor`表示`观察者`，不要让程序员为了读懂代码去问客户名称的含义；

[2]如果不能用程序员熟悉的术语命名，就用问题所涉及的领域来命名；

#### 2.6. 添加有意义的语境

[1]`name/state`等变量前面添加`addrName/addrState`让人更能明白这组变量是在描述一个联系地址，当然创建一个`Adress`的实体类更好；

[2]不要添加没有意义的语境，一个`管理系统（Manage System）`的账号实体类，用`Account`就行，没必要加上`MSAccount`，`MSAddress`；

## 3. 第三章：函数

#### 3.1. 短小

[1]函数的第一规则是要短小，第二规则是还要更短小；

```java
// 反例(改良版，更糟糕的上百行了)
public static String renderPageWithSetupAndTeardowns(
 PageData pageData, boolean isSuite
) throws Exception {
    boolean isTestPage = pageData.hasAttribute("Test");
    if (isTestPage) {
        WikiPage testPage = pageData.getWikiPage();
        StringBuffer newPageContent = new StringBuffer();
        // balabala...
        includeTeardownPages(testPage, newPageContent, isSuite);
        pageData.setContent(newPageContent.toString());
    }
    return pageData.getHtml();
}

//正例（究极改良版，不属于该函数同一抽象层的代码全部另立新篇）
public static String renderPageWithSetupAndTeardowns(
 PageData pageData, boolean isSuite
) throws Exception {
    if (isTestPage（pageData) 
      includeSetupAndTeardownPages(pageData, isSuite);
    return pageData.getHtml();
}
```
[2]`if/else/while`语句等，其中的代码块应该只有一行，所以函数缩进层级不应该多余一层或者两层；

#### 3.2. 只做一件事

[1]函数应该做一件事，做好这件事，只做这一件事；

> 上一正例的函数`renderPageWithSetupAndTeardowns`看起来做了三件事，其实这三个步骤均在该函数的同一抽象层上，可以用简洁的`TO`起头段落来描述：`To Render Page With Setup and Teardowns`.

```java
// 反例
public Boolean checkPassWord(String username, String password) {
    String phrase = getCodePhraseEncodedByUsername(username);
    if (VALID_OK.equals(password)){
        /* 验证密码成功后初始化会话在逻辑上没问题，但如果调用者只是想验证密码                * 你却让它做了更多余的甚至没必要的动作
        */
        Session.initialize();
        return true;
    }
    return false;
}
```

[2]如果函数中不断出现重复代码，说明这些重复代码可以做一件事；

#### 3.3. 每个函数一个抽象层级

自顶向下读代码：向下规则，程序就像是一系列的`TO`起头的段落，每一段都描述当前抽象层级，并引用位于下一抽象层级的后续`TO`起头段落；

>如：
>1. To do thing No.1, we do thing No.2, then do thing No.3;
>2. To do thing No.2, we do thing No.4;
>3. To do thing No.3, we do thing No.5;

```java
doThingNo1() {
    doThingNo2();
    doThingNo3();
}

doThingNo2() {
    doThingNo4();
}

doThingNo3() {
    doThingNo5();
}
```

#### 3.4. 函数参数

[1]最理想的参数数量是零，其次是一，再次是二，应尽量避免三个参数，如果需要更多参数，说明其中一些参数应该封装为类了；

[2]尽量避免使用`输出`参数，我们期望通过返回值`输出`;

[3]使用参数列表`Object... args`好过使用二元函数、三元函数；

#### 3.5. 分隔指令与询问

下列函数中设置某个指定属性，如果成功就返回`true`，如果不存在那个属性则返回`false`：

```java
public boolean set(String attr, String value);
```

这样就导致了以下语句：

```java
if (set("username", "unclebob"))...
```

作者本意，`set`是个动词，但在`if`语句上下文中，它像个形容词。要解决这个问题，就要把指令与询问分隔开来：

```java
if (attrExists("username")) {
    setAttr("username", "unclebob");
}
```

#### 3.6. 使用异常捕获代替返回错误码

[1]创建返回错误码的枚举是不推荐的做法，这样一来如果需求改变，枚举就得修改，其它类可能要重新部署，使用异常捕获代替错误码，新异常就可以从异常类派生出来，无需重新部署；

[2]抽离`try/catch`代码块，把错误处理与正常流程区别开来：

```java
// 反例
try {
  deletePage(page);
  registry.deleteReference(page.name);
  configKeys.deleteKey(page.name.makeKey());
}
catch(Exception e) {
  logger.error(e.getMessage());
}

// 正例
public void delete(Page page) {
    try {
      deletePageAndAllReferences(page);
    }
    catch(Exception e) {
      logError(e);
    }
}

private void deletePageAndAllReferences(Page page) throws Exception {
    deletePage(page);
    registry.deleteReference(page.name);
    configKeys.deleteKey(page.name.makeKey());
}

private void logError(Excepton e) {
    logger.error(e.getMessage());
}
```
