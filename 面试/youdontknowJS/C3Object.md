## C3 Object

Object

- ES6中对象属性调用`[]`中可以通过一个表达式来得出属性名, 通常会使用[Symbol]来得出一个独特的属性名
- 对象复制
    - Object.assign() 执行浅复制(`=`)
- Object.defineProperty(obj, propName, {属性描述符})
    + writable
    + enumerable 是否可枚举
        * 默认为true
        * for...in
        * Object.assign()
- `[[GET]]` 访问属性(会访问原型链)/ `[[PUT]]` 设置属性操作
- get / set
    + 该属性不包含值
    + 访问/赋值时会调用隐藏(设置)的函数
    + get时, 函数返回值作为属性访问的返回值
    + set时, 属性的赋值作为函数的参数
- in / hasOwnProperty
    + Object.prototype.hasOwnProperty.call(obj)
- Symbol.iterator 迭代器
- for...of 迭代可枚举属性

## C4 Class

面向对象编程

类的概念

- 强调数据本身和数据操作行为相关联
- 类就作为常用设计
    + 包含数据
    + 处理数据的相关行为
- 多态
  - 父类的方法可以被子类的同名方法替代
- JS只是实现近似类的功能

### 类和实例

class/constructor+prototype
- 指明一个对象应具有的数据形式

实例
- 实际可用的对象

### 类继承

父类
子类

### 多态

REVIEW

子类中重写父类的同名方法
- 在重写的方法中也可继承父类的属性/方法
- 相对多态
  - inherited:drive()
    - 只是继承父类的drive()方法
- 显示多态
  - Vehicle.drive().call(this)
    - 直接调用父类/祖先类的特定方法

super
- superclass 指当前类的父类/祖先

### 混入

用来模拟其他语言中类的行为

显式混入
将子类中的不存在的同名属性(方法)的父类属性复制到子类上, 使子类拥有父类的其他属性(方法), 而非通过原型链访问

隐式混入

## Prototype

对象访问时 `[[GET]]`(读取属性)操作会访问原型链, 对象中的`[[Prototype]]` / __proto__ 指向原型


Object.prototype(只是保存在Prototype构造函数的prototype属性中)
- 原型链头部
- null除外(无原型)

### 属性屏蔽和设置

为对象的属性赋值时, 可能会在现有对象中建立屏蔽属性

```js
var a = {} undefined Object.defineProperty(a, 'foo', {
	writable: false,
	configurable: true,
	enumerable: false,
	value: 'foo',
})
{foo: "foo"}
a.foo
"foo"
var b = Object.create(a)
undefined
b.foo
"foo"
b.foo = 'bar'
"bar"
b.foo
"foo"
function change(val){
'use strict'
b.foo = val
console.log(b.foo)
}
undefined
change('bar')
VM482:3 Uncaught TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
    at change (<anonymous>:3:7)
    at <anonymous>:1:1
change @ VM482:3
(anonymo
a.bar = 'bar'
"bar"
var value = 'zzz'
undefined
Object.defineProperty(a, 'set', {
	get: function(){return value},
	set: function(val){return a.bar+'val'}
})
{bar: "bar", foo: "foo"}
a.set
"zzz"
a.set = 'qqq'
"qqq"
a.bar
"bar"
Object.defineProperty(a, 'set', {
	get: function(){return value},
	set: function(val){return a.bar+'val'}
})
21:56:40Uncaught TypeError: Cannot redefine property: set
    at Function.defineProperty (<anonymous>)
    at <anonymous>:1:8
(anonymous) @ VM981:1
Object.defineProperty(a, 'set2', {
	get: function(){return value},
	set: function(val){a.bar+=val}
})
{bar: "bar", foo: "foo"}
a.set2
"zzz"
a.set2 = 'qqq'
"qqq"
a.bar
"barqqq"
a.set2
"zzz"
b.set2 = '111'
"111"
a.set3 = '3'
"3"
b.set3
"3"
b.set3 = '2'
"2"
b
{set3: "2"}
Object.prototype
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()arguments: (...)caller: (...)length: 0name: "get __proto__"__proto__: ƒ ()[[Scopes]]: Scopes[0]set __proto__: ƒ __proto__()
Object.prototype.__proto__
null
b
{set3: "2"}
a.zz = 33
33
b.zz
33
b.zz = b.zz
33
b
{set3: "2", zz: 33}
```

### 原型链和继承

JS中创建实例的操作只是通过`[[Prototype]]`将两个对象链接起来(object, constructor.prototype)
创建多个实例时, 就是将多个对象(new调用时创建)同一个对象链接起来
而其他语言中类的继承通常是指复制操作

### constructor

constructor.prototype / constructor.prototype.constructor 都是`new`调用时产生的绑定

constructor 是writable

### 原型继承

实现原型继承时(将一个构造函数(new调用)的prototype赋值为另一个构造函数创建的新对象(实例)), 由于new调用时, 函数可能对新创建的对象进行修改(通过this), 所以Object.create(Object)相对安全一些
- Func1.prototype = new Func2()
- Func1.prototype = Object.create(Func2.prototype)
- Object.setPrototypeOf(Func1.prototype, Func2.prototype)

### 原型链上对象的关系

判断obj2是否位于obj1的原型链上
(obj instanceOf Function)
- Object.getPrototypeOf(obj1) === obj2
- obj1.isPrototypeOf(Obj2)
- __proto__

```
var a = {}
Object.defineProperty(a, '__proto__', {
    get: function(){
        return Object.getPrototypeOf(a)
    },
    set: function(obj){
        Object.setPrototypeOf(a, obj)
    }
})
```

Object.create(obj)
- 返回一个新对象(将原型链绑定到obj)

```js
function myCreate(obj){
    function F(){}
    F.prototype = obj
    return new F()
}
```

## 行为委托 Behavior Delegation

