# ES6 增加的属性

ES6是一个标准 其中包含了 ES2015、ES2016、ES2017、ES2018、ES2019

主要是增加了这些东西
- 表达式：声明、解构赋值
- 内置对象：字符串的扩展、数值的扩展、对象的扩展、数组的扩展、函数扩展、正则扩展、Symol、Set、Map、Proxy、Reflect
- 语句运算：Class、Module、Iterator
- 异步编程：Promise、Generator、Async

## ES2015


### 声明

> const 、let

- 作用域
    
    [ ] 全局作用域

    [ ] 函数作用域 function(){}
    
    [ ] 快级作用域
    
- 作用域范围

   > const命令和let命令只能在代码块中执行,不能再全局，var可以全局
    
- 赋值使用
- 
    [ ] const命令声明常量后必须立马赋值

    [ ] let命令声明变量后可立马赋值或使用时赋值
    
- 声明方法：var、const、let、function、class、import

> 重点

    不允许重复声明
    
    未定义就使用会报错：const命令和let命令不存在变量提升
    
    暂时性死区：在代码块内使用let命令声明变量之前，该变量都不可用
    

### 解构赋值
- [x]  字符串解构：const [a, b, c, d, e] = "hello"
- [x]  数值解构：const { toString: s } = 123
- 
- [x]  布尔值解构：const { toString: b } = true
- [x] 对象解构
- [x]  数组解构

- 注意
- 匹配模式：只要等号两边的模式相同，左边的变量就会被赋予对应的值
- 解构赋值规则：只要等号右边的值不是对象或数组，就先将其转为对象
- 解构默认值生效条件：属性值严格等于undefined
- 解构遵循匹配模式
- 解构不成功时变量的值等于undefined
- undefined和null无法转为对象，因此无法进行解构
- 


### 字符串扩展
- Unicode表示法：大括号包含表示Unicode字符(\u{0xXX}或\u{0XXX})

- 字符串遍历：可通过for-of遍历字符串
- 字符串模板：可单行可多行可插入变量的增强版字符串
- 标签模板：函数参数的特殊调用
- String.raw()：返回把字符串所有变量替换且对斜杠进行转义的结果
- String.fromCodePoint()：返回码点对应字符
- codePointAt()：返回字符对应码点(String.fromCodePoint()的逆操作)
- normalize()：把字符的不同表示方法统一为同样形式，返回新字符串(Unicode正规化)
- repeat()：把字符串重复n次，返回新字符串
- matchAll()：返回正则表达式在字符串的所有匹配
- includes()：是否存在指定字符串
- startsWith()：是否存在字符串头部指定字符串
- endsWith()：是否存在字符串尾部指定字符串

### 数值扩展


### 对象扩展

### 函数扩展

### 正则扩展

### Symbol

### Set 

### map


### Proxy

### Reflect

### class

### Module

### Iterator

### Promise

### Generator


## ES2016

### 数值扩展
### 数组扩展

## ES2017
### 声明
### 字符串扩展
### 对象扩展
### 函数扩展
### Async

## ES2018

### 字符串扩展
### 对象扩展
### 正则扩展
### Promise 
### Async

## ES2019

### 字符串扩展
### 多想扩展
### 数组扩展
### 函数扩展
### symbol



[找到了最全的链接](https://juejin.im/post/5d9bf530518825427b27639d#heading-39)
    