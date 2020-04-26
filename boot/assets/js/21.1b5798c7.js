(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{231:function(a,t,r){"use strict";r.r(t);var e=r(4),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"es6-增加的属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es6-增加的属性","aria-hidden":"true"}},[a._v("#")]),a._v(" ES6 增加的属性")]),a._v(" "),r("p",[a._v("ES6是一个标准 其中包含了 ES2015、ES2016、ES2017、ES2018、ES2019")]),a._v(" "),r("p",[a._v("主要是增加了这些东西")]),a._v(" "),r("ul",[r("li",[a._v("表达式：声明、解构赋值")]),a._v(" "),r("li",[a._v("内置对象：字符串的扩展、数值的扩展、对象的扩展、数组的扩展、函数扩展、正则扩展、Symol、Set、Map、Proxy、Reflect")]),a._v(" "),r("li",[a._v("语句运算：Class、Module、Iterator")]),a._v(" "),r("li",[a._v("异步编程：Promise、Generator、Async")])]),a._v(" "),r("h2",{attrs:{id:"es2015"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es2015","aria-hidden":"true"}},[a._v("#")]),a._v(" ES2015")]),a._v(" "),r("h3",{attrs:{id:"声明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#声明","aria-hidden":"true"}},[a._v("#")]),a._v(" 声明")]),a._v(" "),r("blockquote",[r("p",[a._v("const 、let")])]),a._v(" "),r("ul",[r("li",[r("p",[a._v("作用域")]),a._v(" "),r("p",[a._v("[ ] 全局作用域")]),a._v(" "),r("p",[a._v("[ ] 函数作用域 function(){}")]),a._v(" "),r("p",[a._v("[ ] 快级作用域")])]),a._v(" "),r("li",[r("p",[a._v("作用域范围")]),a._v(" "),r("blockquote",[r("p",[a._v("const命令和let命令只能在代码块中执行,不能再全局，var可以全局")])])]),a._v(" "),r("li",[r("p",[a._v("赋值使用")])]),a._v(" "),r("li",[r("p",[a._v("[ ] const命令声明常量后必须立马赋值")]),a._v(" "),r("p",[a._v("[ ] let命令声明变量后可立马赋值或使用时赋值")])]),a._v(" "),r("li",[r("p",[a._v("声明方法：var、const、let、function、class、import")])])]),a._v(" "),r("blockquote",[r("p",[a._v("重点")])]),a._v(" "),r("pre",[r("code",[a._v("不允许重复声明\n\n未定义就使用会报错：const命令和let命令不存在变量提升\n\n暂时性死区：在代码块内使用let命令声明变量之前，该变量都不可用\n")])]),a._v(" "),r("h3",{attrs:{id:"解构赋值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解构赋值","aria-hidden":"true"}},[a._v("#")]),a._v(" 解构赋值")]),a._v(" "),r("ul",[r("li",[r("p",[a._v('[x]  字符串解构：const [a, b, c, d, e] = "hello"')])]),a._v(" "),r("li",[r("p",[a._v("[x]  数值解构：const { toString: s } = 123")])]),a._v(" "),r("li"),a._v(" "),r("li",[r("p",[a._v("[x]  布尔值解构：const { toString: b } = true")])]),a._v(" "),r("li",[r("p",[a._v("[x] 对象解构")])]),a._v(" "),r("li",[r("p",[a._v("[x]  数组解构")])]),a._v(" "),r("li",[r("p",[a._v("注意")])]),a._v(" "),r("li",[r("p",[a._v("匹配模式：只要等号两边的模式相同，左边的变量就会被赋予对应的值")])]),a._v(" "),r("li",[r("p",[a._v("解构赋值规则：只要等号右边的值不是对象或数组，就先将其转为对象")])]),a._v(" "),r("li",[r("p",[a._v("解构默认值生效条件：属性值严格等于undefined")])]),a._v(" "),r("li",[r("p",[a._v("解构遵循匹配模式")])]),a._v(" "),r("li",[r("p",[a._v("解构不成功时变量的值等于undefined")])]),a._v(" "),r("li",[r("p",[a._v("undefined和null无法转为对象，因此无法进行解构")])]),a._v(" "),r("li")]),a._v(" "),r("h3",{attrs:{id:"字符串扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 字符串扩展")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("Unicode表示法：大括号包含表示Unicode字符(\\u{0xXX}或\\u{0XXX})")])]),a._v(" "),r("li",[r("p",[a._v("字符串遍历：可通过for-of遍历字符串")])]),a._v(" "),r("li",[r("p",[a._v("字符串模板：可单行可多行可插入变量的增强版字符串")])]),a._v(" "),r("li",[r("p",[a._v("标签模板：函数参数的特殊调用")])]),a._v(" "),r("li",[r("p",[a._v("String.raw()：返回把字符串所有变量替换且对斜杠进行转义的结果")])]),a._v(" "),r("li",[r("p",[a._v("String.fromCodePoint()：返回码点对应字符")])]),a._v(" "),r("li",[r("p",[a._v("codePointAt()：返回字符对应码点(String.fromCodePoint()的逆操作)")])]),a._v(" "),r("li",[r("p",[a._v("normalize()：把字符的不同表示方法统一为同样形式，返回新字符串(Unicode正规化)")])]),a._v(" "),r("li",[r("p",[a._v("repeat()：把字符串重复n次，返回新字符串")])]),a._v(" "),r("li",[r("p",[a._v("matchAll()：返回正则表达式在字符串的所有匹配")])]),a._v(" "),r("li",[r("p",[a._v("includes()：是否存在指定字符串")])]),a._v(" "),r("li",[r("p",[a._v("startsWith()：是否存在字符串头部指定字符串")])]),a._v(" "),r("li",[r("p",[a._v("endsWith()：是否存在字符串尾部指定字符串")])])]),a._v(" "),r("h3",{attrs:{id:"数值扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数值扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 数值扩展")]),a._v(" "),r("h3",{attrs:{id:"对象扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 对象扩展")]),a._v(" "),r("h3",{attrs:{id:"函数扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数扩展")]),a._v(" "),r("h3",{attrs:{id:"正则扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#正则扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则扩展")]),a._v(" "),r("h3",{attrs:{id:"symbol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#symbol","aria-hidden":"true"}},[a._v("#")]),a._v(" Symbol")]),a._v(" "),r("h3",{attrs:{id:"set"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#set","aria-hidden":"true"}},[a._v("#")]),a._v(" Set")]),a._v(" "),r("h3",{attrs:{id:"map"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[a._v("#")]),a._v(" map")]),a._v(" "),r("h3",{attrs:{id:"proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy","aria-hidden":"true"}},[a._v("#")]),a._v(" Proxy")]),a._v(" "),r("h3",{attrs:{id:"reflect"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reflect","aria-hidden":"true"}},[a._v("#")]),a._v(" Reflect")]),a._v(" "),r("h3",{attrs:{id:"class"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class","aria-hidden":"true"}},[a._v("#")]),a._v(" class")]),a._v(" "),r("h3",{attrs:{id:"module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#module","aria-hidden":"true"}},[a._v("#")]),a._v(" Module")]),a._v(" "),r("h3",{attrs:{id:"iterator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iterator","aria-hidden":"true"}},[a._v("#")]),a._v(" Iterator")]),a._v(" "),r("h3",{attrs:{id:"promise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise","aria-hidden":"true"}},[a._v("#")]),a._v(" Promise")]),a._v(" "),r("h3",{attrs:{id:"generator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generator","aria-hidden":"true"}},[a._v("#")]),a._v(" Generator")]),a._v(" "),r("h2",{attrs:{id:"es2016"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es2016","aria-hidden":"true"}},[a._v("#")]),a._v(" ES2016")]),a._v(" "),r("h3",{attrs:{id:"数值扩展-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数值扩展-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 数值扩展")]),a._v(" "),r("h3",{attrs:{id:"数组扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 数组扩展")]),a._v(" "),r("h2",{attrs:{id:"es2017"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es2017","aria-hidden":"true"}},[a._v("#")]),a._v(" ES2017")]),a._v(" "),r("h3",{attrs:{id:"声明-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#声明-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 声明")]),a._v(" "),r("h3",{attrs:{id:"字符串扩展-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串扩展-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 字符串扩展")]),a._v(" "),r("h3",{attrs:{id:"对象扩展-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象扩展-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 对象扩展")]),a._v(" "),r("h3",{attrs:{id:"函数扩展-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数扩展-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数扩展")]),a._v(" "),r("h3",{attrs:{id:"async"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#async","aria-hidden":"true"}},[a._v("#")]),a._v(" Async")]),a._v(" "),r("h2",{attrs:{id:"es2018"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es2018","aria-hidden":"true"}},[a._v("#")]),a._v(" ES2018")]),a._v(" "),r("h3",{attrs:{id:"字符串扩展-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串扩展-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 字符串扩展")]),a._v(" "),r("h3",{attrs:{id:"对象扩展-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象扩展-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 对象扩展")]),a._v(" "),r("h3",{attrs:{id:"正则扩展-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#正则扩展-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则扩展")]),a._v(" "),r("h3",{attrs:{id:"promise-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Promise")]),a._v(" "),r("h3",{attrs:{id:"async-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#async-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Async")]),a._v(" "),r("h2",{attrs:{id:"es2019"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es2019","aria-hidden":"true"}},[a._v("#")]),a._v(" ES2019")]),a._v(" "),r("h3",{attrs:{id:"字符串扩展-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串扩展-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 字符串扩展")]),a._v(" "),r("h3",{attrs:{id:"多想扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多想扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 多想扩展")]),a._v(" "),r("h3",{attrs:{id:"数组扩展-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组扩展-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 数组扩展")]),a._v(" "),r("h3",{attrs:{id:"函数扩展-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数扩展-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数扩展")]),a._v(" "),r("h3",{attrs:{id:"symbol-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#symbol-2","aria-hidden":"true"}},[a._v("#")]),a._v(" symbol")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5d9bf530518825427b27639d#heading-39",target:"_blank",rel:"noopener noreferrer"}},[a._v("找到了最全的链接"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);