# 浏览器相关

## 浏览器事件机制



### 事件传播

- 捕获事件
- 目标对象
- 冒泡

1.其中捕获（Capture）是 事件对象(event object) 从 window 派发到 目标对象父级的过程

2.目标（Target）阶段是 事件对象派发到目标元素时的阶段，如果事件类型指示其不冒泡，那事件传播将在此阶段终止。

3.冒泡（Bubbling）阶段 和捕获相反，是以目标对象父级到 window 的过程。

在任一阶段调用 stopPropagation 都将终止本次事件的传播

	window.addEventListener('click',function (event) {
    	console.log(event)
    },true)
 

*note: addEventListener形式注册的监听事件接受参数以指定是否在捕获阶段触发本次事件，默认值为否(既冒泡阶段)。以事件处理器注册的事件在非捕获阶段触发*



### 阻止冒泡和默认事件

- 调用 stopPropagation 严格来说不是阻止冒泡，是阻止事件传播，捕获阶段也可以直接阻止

- 事件接口还有一个 cancelBubble 因历史原因的 stopPropagation 的别名，给其赋值 true 可以达到调用 stopPropagation 同样的效果

- 或者你在事件处理器（通过 on... 属性注册）的回调返回 true，这个返回值决定了事件是否被取消，这里的取消的作用要根据事件的类型而定

- 调用 preventDefault 则是阻止默认事件

### 事件回调

- addEventListener()

- on-event 事件处理器


