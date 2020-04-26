(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{237:function(t,e,a){"use strict";a.r(e);var r=a(4),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器相关","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器相关")]),t._v(" "),a("h2",{attrs:{id:"浏览器事件机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器事件机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器事件机制")]),t._v(" "),a("h3",{attrs:{id:"事件传播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件传播","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件传播")]),t._v(" "),a("ul",[a("li",[t._v("捕获事件")]),t._v(" "),a("li",[t._v("目标对象")]),t._v(" "),a("li",[t._v("冒泡")])]),t._v(" "),a("p",[t._v("1.其中捕获（Capture）是 事件对象(event object) 从 window 派发到 目标对象父级的过程")]),t._v(" "),a("p",[t._v("2.目标（Target）阶段是 事件对象派发到目标元素时的阶段，如果事件类型指示其不冒泡，那事件传播将在此阶段终止。")]),t._v(" "),a("p",[t._v("3.冒泡（Bubbling）阶段 和捕获相反，是以目标对象父级到 window 的过程。")]),t._v(" "),a("p",[t._v("在任一阶段调用 stopPropagation 都将终止本次事件的传播")]),t._v(" "),a("pre",[a("code",[t._v("window.addEventListener('click',function (event) {\n\tconsole.log(event)\n},true)\n")])]),t._v(" "),a("p",[a("em",[t._v("note: addEventListener形式注册的监听事件接受参数以指定是否在捕获阶段触发本次事件，默认值为否(既冒泡阶段)。以事件处理器注册的事件在非捕获阶段触发")])]),t._v(" "),a("h3",{attrs:{id:"阻止冒泡和默认事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阻止冒泡和默认事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 阻止冒泡和默认事件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("调用 stopPropagation 严格来说不是阻止冒泡，是阻止事件传播，捕获阶段也可以直接阻止")])]),t._v(" "),a("li",[a("p",[t._v("事件接口还有一个 cancelBubble 因历史原因的 stopPropagation 的别名，给其赋值 true 可以达到调用 stopPropagation 同样的效果")])]),t._v(" "),a("li",[a("p",[t._v("或者你在事件处理器（通过 on... 属性注册）的回调返回 true，这个返回值决定了事件是否被取消，这里的取消的作用要根据事件的类型而定")])]),t._v(" "),a("li",[a("p",[t._v("调用 preventDefault 则是阻止默认事件")])])]),t._v(" "),a("h3",{attrs:{id:"事件回调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件回调","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件回调")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("addEventListener()")])]),t._v(" "),a("li",[a("p",[t._v("on-event 事件处理器")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);