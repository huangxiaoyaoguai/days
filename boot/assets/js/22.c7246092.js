(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{233:function(a,t,r){"use strict";r.r(t);var v=r(4),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"作用域和闭包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#作用域和闭包","aria-hidden":"true"}},[a._v("#")]),a._v(" 作用域和闭包")]),a._v(" "),r("p",[a._v("##作用域是什么")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("方法只是执行，但是有很多变量需要存储和被访问。简单的说，就是这些变量住在哪里？程序是怎么样找到它。")])]),a._v(" "),r("li",[r("p",[a._v("解决这些问题需要设计良好的规则来存储变量，并且之后可以更好的找到这些变量。这套规则就是叫作用域。")])]),a._v(" "),r("li",[r("p",[a._v("过程")])])]),a._v(" "),r("ol",[r("li",[a._v("分词/词法分析")])]),a._v(" "),r("p",[a._v("这个过程会将字符组成的字符串分解成有意义的代码块，这些代码块被称为词法单元。例如 var a = 2，会分解为 var 、a、 =、2; 。空格是否被作为词法单元，区别是否存在意义。")]),a._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[a._v("解析/语法分析\n将词法单元流转化成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树叫做“抽象语法树”（ast）。")])]),a._v(" "),r("li",[r("p",[a._v("代码生成")])])]),a._v(" "),r("h3",{attrs:{id:"理解作用域"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#理解作用域","aria-hidden":"true"}},[a._v("#")]),a._v(" 理解作用域")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("引擎：从头到尾负责这个js程序的编译和执行过程")])]),a._v(" "),r("li",[r("p",[a._v("编译器：负责语法分析及代码生成等脏活累活。")])]),a._v(" "),r("li",[r("p",[a._v("作用域：负责收集并维护所有声明的标识符（变量）组成的一系列的查询，并实施一套非常严格的规则，确定当前执行的代码对这些有访问的权限。")])])]),a._v(" "),r("p",[a._v("##词法作用域")]),a._v(" "),r("ul",[r("li",[a._v("词法作用域是定义在词法阶段的作用域。其实是你在写代码时将变量和快作用域写在哪里决定的，因此当词法分析器处理代码时会保持作用域不变。")])]),a._v(" "),r("p",[a._v("eval、with会欺骗词法")]),a._v(" "),r("h2",{attrs:{id:"函数作用域和快作用域"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域和快作用域","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数作用域和快作用域")]),a._v(" "),r("ul",[r("li",[a._v("函数作用域")])]),a._v(" "),r("h2",{attrs:{id:"提升"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提升","aria-hidden":"true"}},[a._v("#")]),a._v(" 提升")]),a._v(" "),r("h2",{attrs:{id:"闭包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[a._v("#")]),a._v(" 闭包")])])}),[],!1,null,null,null);t.default=_.exports}}]);