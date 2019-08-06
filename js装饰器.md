es6 定义了语法糖 类的概念 class ,使得一些共享或扩展的一些方法行为的时候，感觉赶不上类的那么优雅，所以出现优雅的方式来
干这件事。

我认为，这不仅仅是一种装饰和优雅的写法，它应该是一种解决方式。

看这个之前要了解对象的基本原理，对象的属性
js中对象有四个属性
value
writable  该property是否可写
enumerable  该property是否会被枚举
configurable  property是否可以删除


装饰器的代码

@decorator
class car{}


class Dog{
	@decorator
	jump(){}
}

所以装饰器是已@作为一个标识符，可以作用于类，也可以作用于类的属性。

先看es6中的类
class cat(){
	say(){
		console.log(111)
	}
}
其实等同于

function cat(){}
Object.defineProperty(cat.prototype,"say",{
	value:function(){console.log(111)}
})



所以类的装饰器大概是

function isAnimal(target) {
    target.isAnimal = true;
  	return target;
}

@isAnimal
class Cat {
    ...
}

console.log(Cat.isAnimal);    // true


所以这段代码实际上基本等同于：
Cat = isAnimal(function Cat() { ... });





作用于类属性的装饰器

function readonly(target, name, descriptor) {
    discriptor.writable = false;
    return discriptor;
}

class Cat {
    @readonly
    say() {
        console.log("meow ~");
    }
}
var kitty = new Cat();
kitty.say = function() {
    console.log("woof !");
}
kitty.say()    // meow ~


我们通过上面的代码把 say 方法设置成了只读，所以在我们后面再次对它赋值的时候就不会生效，调用的还是之前的方法

在上面的代码中我们可以看到，我们在定义装饰器的时候，参数是有三个，target、name、descriptor

我们可以看出，当装饰器作用于类本身的时候，我们操作的对象也是这个类本身，而当装饰器作用于类的某个具体的属性的时候，我们操作的对象既不是类本身，也不是类的属性，而是它的描述符（descriptor），而描述符里记录着我们对这个属性的全部信息，所以，我们可以对它自由的进行扩展和封装，最后达到的目的呢，就和之前说过的装饰器的作用是一样的。






当然，如果你喜欢的话，也可以直接在 target 上进行扩展和封装，比如

function fast(target, name, descriptor) {
    target.speed = 20;

    let run = descriptor.value;
    descriptor.value = function() {
        run();
        console.log(`speed ${this.speed}`);
    }

    return descriptor;
}

class Rabbit {
    @fast
    run() {
        console.log("running~");
    }
}
var bunny = new Rabbit();
bunny.run();
// running~
// speed 20

console.log(bunny.speed); 


最后 
装饰器允许你在类和方法定义的时候去注释或者修改它。装饰器是一个作用于函数的表达式，它接收三个参数 target、 name 和 descriptor ， 然后可选性的返回被装饰之后的 descriptor 对象。

最后一点就是，现在装饰器因为还在草案阶段，所以还没有被大部分环境支持，如果要用的话，需要使用 Babel 进行转码，需要用到 babel-plugin-transform-decorators-legacy 这个插件:


<!-- https://aotu.io/notes/2016/10/24/decorator/index.html -->












