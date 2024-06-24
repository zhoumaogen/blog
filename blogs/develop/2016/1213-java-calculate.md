---
title: 随笔：Java实现字符串四则运算（带小数点）
date: 2016-12-13
sidebar: 'auto'
tags:
 - java
 - 算法
categories: 
 - 软件开发
 - 随笔
---

1. 基于栈的FILO思想，将字符串表达式分为数字栈NumStack和符号栈OprStack，并在数字栈中用#将数字隔开：

```java
Stack<String> numStack = new Stack<String>();
numStack.push("#");
Stack<String> oprStack = new Stack<String>();
```

2. 引用后缀表达式思想判断运算符优先级进行计算：

```java
while (!oprStack.isEmpty()&&priority(s)<=priority(oprStack.peek())) {
	linkString(numStack);
	calculate(numStack, oprStack);
}
```

3. 用StringBuilder的insert方法将栈内单字符粘贴成字符串数字：

```java
//将栈内单字符粘成字符串
public void linkString(Stack<String> stack) {
   if (stack.peek().equals("#")) {
       return;
   }

   StringBuilder number = new StringBuilder();
   while (true) {
      String s = stack.peek();
      if (s.equals("#")){ 
      	break;
      }
      number.insert(0, s);
      stack.pop();
   }
   stack.push(number.toString());
   stack.push("#");
   number.delete(0, number.length());
}
```

4. 整个计算代码如下：

```java
package test.stringtores;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

/*
 * 将给定字符串利用堆栈的形式计算结果
 * 支持四则运算优先级，不支持括号计算
 * 数栈中以#为界标隔开数据
 */
public class StringToRes {
	
	//判断字符是否为操作符
	public boolean isOpr(String s){
		
		if ("+".equals(s)||"-".equals(s)||"*".equals(s)||"/".equals(s)) {
			return true;
		}
		return false;
	}
	
	//判断操作符优先级
	public int priority(String s) {
		
		if ("+".equals(s)||"-".equals(s)) {
			return 1;
		} else {
			return 2;
		}
	}
	
	//将栈内单字符粘成字符串
	public void linkString(Stack<String> stack) {
		
		if (stack.peek().equals("#")) {
			return;
		}
		StringBuilder number = new StringBuilder();
		while (true) {
			String s = stack.peek();
			if (s.equals("#")){ 
				break;
			}
			number.insert(0, s);
			stack.pop();
		}
			stack.push(number.toString());
			stack.push("#");
			number.delete(0, number.length());
	}
	
	//计算运算式
	public void calculate(Stack<String> numStack, Stack<String> oprStack) {
		
		double res=0;
		//弹出右操作数上的#并将其转为double计算
		numStack.pop();
		double rightNum = Double.parseDouble(numStack.pop());
		//弹出左操作数上的#并将其转为double计算
		numStack.pop();
		double leftNum = Double.parseDouble(numStack.pop());
		String opr = oprStack.pop();
		switch(opr){
			case "+": res = leftNum + rightNum;break;
			case "-": res = leftNum - rightNum;break;
			case "*": res = leftNum * rightNum;break;
			case "/": res = leftNum / rightNum;break;
			default:break;
		}
		
		//将计算结果压栈
		numStack.push(String.valueOf(res));
		numStack.push("#");
	}
	
	//接收字符串进行计算操作
	public String stringToRes(String str) {
		
		Stack<String> numStack = new Stack<String>();
		numStack.push("#");
		Stack<String> oprStack = new Stack<String>();
		String[] ss= new String[str.length()];
		for(int i=0;i<str.length();i++){
			ss[i] = str.substring(i, i+1);
		}
		
		for (String s : ss) {
			if (isOpr(s)) {
				linkString(numStack);
				if (oprStack.isEmpty()) {
					oprStack.push(s);
				} else {
					while (!oprStack.isEmpty()&&priority(s)<=priority(oprStack.peek())) {
						linkString(numStack);
						calculate(numStack, oprStack);
					}
					oprStack.push(s);
				}
			}else {
				numStack.push(s);
			}
		}
		while (!oprStack.isEmpty()) {
			linkString(numStack);
			calculate(numStack, oprStack);
		}
		numStack.pop();
		return numStack.peek();
	}

	public static void main(String[] args) {
		System.out.println("Please Input the Character String:");
		BufferedReader bReader = new BufferedReader(new InputStreamReader(System.in));
		String characterString = null;
		try {
			characterString = bReader.readLine();
		} catch (IOException e) {
			e.printStackTrace();
		}
		StringToRes stringToRes=new StringToRes();
		System.out.println("The Result of This String is:"+stringToRes.stringToRes(characterString));
	}
}
```

5. 测试结果：

```txt
测试结果：
Please Input the Character String:
2+3*6-9/2-9/2
The Result of This String is:11.0
```
