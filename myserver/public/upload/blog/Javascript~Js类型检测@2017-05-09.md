#JS中的类型检测

## 判断js对象类型之Object.prototype.toString.call(obj)

这里我们使用Object原型上的toString函数，是因为防止需要检测类型的obj对象自己定义了toString方法，或者对其进行了修改。

这里做一下测试
```javascript
Object.prototype.toString.call('aaa')
"[object String]"
Object.prototype.toString.call(11)
"[object Number]"
Object.prototype.toString.call(true)
"[object Boolean]"
Object.prototype.toString.call(undefined)
"[object Undefined]"
Object.prototype.toString.call(null)
"[object Null]"
Object.prototype.toString.call({})
"[object Object]"
Object.prototype.toString.call([])
"[object Array]"
Object.prototype.toString.call(function(){})
"[object Function]"   
Object.prototype.toString.call(new Date)
"[object Date]"
Object.prototype.toString.call(/abc?/ig)
"[object RegExp]"
```

##typeof
使用typeof判定对象类型有局限性，我们从判定结果来看局限性：

```javascript
typeof 'aa'
"string"
typeof 11
"number"
typeof undefined
"undefined"
typeof true
"boolean"
typeof null
"object"
typeof []
"object"
typeof {}
"object"
typeof new Date()
"object"
typeof /^\[object\s(.*)\]$/
"object"
typeof function(){}
"function"
```

可以看出来，对于我们的复杂对象，返回都是object，这是我们已经预想到的，但是为什么对于null也返回object呢，这里其实可以说是js检测对象的一个“bug”，JS类型值是存在32BIT单元里,32位有1-3位表示TYPE TAG,其它位表示真实值而表示object的标记位正好是低三位都是0。由于 null 代表的是空指针(大多数平台下值为0x00，Number(null)===0)，所以。。。


此外，还有以下特殊情况：
```javascript
typeof new String
"object"
typeof new Boolean(true)
"object"
typeof new Number(1)
"object"
```
这种情况就要说到 **基本包装类型**了，上面代码中的String、Boolean和Number是es提供的3个引用类型，每当读取一个基本类型值得时候，就创建一个string、boolean和number三种基本类型的基本包装类型的对象。以下面的例子为例：
```javascript
var s="hello";
var s0 = s.substring(2);
```
这里我们定义了一个基本类型stirng，将其赋给了s，下一行调用了s的substring方法；我们知道，stirng是基本类型，基本类型不是对象，因而是不应该有方法的，但是这里不是我们想的那么简单：这里在后台完成了一系列的工作：当运行到第二行，访问到s时，访问过程处于一种读取模式，在读取模式访问字符串时，后台操作如下：

* 1.创建String类型的一个实例；
* 2.在实例上调用指定方法；
* 3.销毁这个实例；
这就是我们定义了基本类型string，但是看起来这个string可以有方法的原因；当然这个原理对于number和boolean基本类型也是一样的；

总结来说：**引用类型与基本包装类型的主要区别在与对象的生存期**；
```javascript
typeof new Number(1)
"object"
typeof Number(2)
"number"
typeof 2
"number"
2===Number(2)
true
```
上面的代码中，使用new创建的引用类型的实例在指向刘离开作用域后仍保持在内存中，而自动创建的基本包装类型的对象，则只存在于代码的执行瞬间，然后立即被销毁；

## instanceof
从上面的内容可以看出：typeof对于复杂数据类型显得无能为力；
<code>object instanceof constructor</code>
**instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。**
typeof对于检测基本数据类型可以胜任，而instanceof从上述描述来看，由于包装类型的原因，可能不太适合检测基本类型，但是对于复杂类型有着不可替代的作用：
```javascript
// 定义构造函数
function C(){} 
function D(){} 

var o = new C();

// true，因为 Object.getPrototypeOf(o) === C.prototype
o instanceof C; 

// false，因为 D.prototype不在o的原型链上
o instanceof D; 

o instanceof Object; // true,因为Object.prototype.isPrototypeOf(o)返回true
C.prototype instanceof Object // true,同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true
```

因此检测复杂类型如下：
```javascript
[] instanceof Array
true

/(1~9)?/ig instanceof RegExp
true

new Date instanceof Date
true

var a={};
a instanceof Object;
true

var f=function(){};
f instanceof Function;
true
```


