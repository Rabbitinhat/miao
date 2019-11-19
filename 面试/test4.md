# Test4

## 01

for...in
- 取得属性名
- ~~可用于对象, 数组~~ 遍历可枚举属性

for...of
- 遍历迭代器(iterator, 可以调用.next())或可迭代对象
- 取得属性值

## 02

Newwork: 物理性质的网络, 相互连接的事物

Internet: 互联网

Web: 所有页面和其中的资源

## 03

.property中不包括自定义属性, 也无法添加新的属性(?)
- 指由标签生成的JS DOM对象的属性

get/set可以取得自定义属性
- 指的是HTML标签中标签的属性

$().prop(name) => return this[name]
$().attr(name) => return this.getAttribute(name)
一些标签上, 它们的值会同步
另一些标签上, 它们的值不会同步
还有一些标签会单向同步

## 04

~~每个已经建立的DOM节点位置只能同时存在一处~~
DOM API的设计如此
如果同时出现两次, 可能造成DOM树结构矛盾, tree结构中, 不存在两个相同节点


## 05
REVIEW 
lodash

链表+map(?)

数组中部分函数会处理空位置(empty, slice, splice, reverse)
部分函数不会处理空位置

## 06
REVIEW 
this => ary 方法调用

## 07

NaN(this只用于函数中)

## 08
REVIEW 
可否使用new 操作符
返回的对象的prototype和该函数的prototype属性中的值相等
该函数的prototype属性中的值的constructor属性是否为该函数

f()/new f() 函数内判断是否为构造函数调用

```js
// f.call(a) 也可能触发
function f(){
  if(this instanceof f){
    // as constructor
  }
}

// new.target === f, 只用于函数内部, 判断函数是否通过new操作符调用
```

## 09

~~将对象的状态信息转换为可以传输或存储的形式~~

把一个在内存中使用随机位置存储的数据结构以不丢失信息的形式转换为连续的字节序列, 用于存储在硬盘上或经由网络传输

## 10

~~伪随机数, 利用某种方法(线性同余)生成一定范围内均匀分布的数字~~

通过特定算法生成的看似随机分布的数, 实际上算法在给定特定的初始输入后, 会生成固定序列.(会加入干扰项, 避免这种情况)

- 线性同余
- 平方取中
- 梅森素数

## 11

数组中相同值的元素不会改变其原有的位置
~~减少不必要的元素移动, 提高效率~~

排序前后不改变关键字的值相同的元素的相对位置

作用: 利用该特性可以方便的实现多关键字排序(以不同关键字进行排序, 同时保留之前排序的位置, 成绩单)

## 12

~~限制JS中某些不规范, 不合乎设计要求的操作~~
在函数或全局作用域开始位置添加`'use strict'`指令
~~使代码运行更可控~~

以一种更严格的规则执行JS代码的模式

mdn

## 13

~~在某些可能发生错误的语句中使用, 捕获产生的错误, 防止程序报错从而停止运行~~
~~也用来判断特定错误~~

在一段代码可能抛出error的情况下

finally中的代码总会执行
catch处理错误, 发生错误后查看错误能否被处理, 不能则继续抛出错误

判断错误类型判断如何处理

## 14

封装: ~~只暴露接口给其他程序调用, 而非类的全部内容; 保证类元素不被篡改, 同时修改类时, 只需保证新的类支持相同接口而不需要修改其他调用该类的程序~~

把与一个事物相关的数据与该数据支持的操作(方法)放在一起吗把细节隐藏, 只暴露接口

多态: ~~一个类可以衍生出多个基于它本身的其他类, 这些包含相似结构, 但实现不同的功能~~

不同类型的对象暴露出相同类型的接口, 以供某段使用这组接口的代码使用
数组/字符串的共用方法
- for...of
- slice
- concat
- indexOf

继承: ~~一个类可以被多个子类继承, 子类不仅拥有自己独有的方法, 属性; 也可以公用父类的属性和方法~~

一个类使用一个已有的类的相关代码

## 15

~~产生特定类的函数, 设置好函数后, 每次只需调用它就可以生成一个新的特定类~~

负责对象的初始化, `construct`

## 16

syntax error: unexptected token `}`
语法错误, 在函数运行前解释阶段进行处理, 并不会调用try

运行步骤
- 词法解析
- 语法解析
- 执行代码

## 17

[0, undefined, undefined, undefined, undefined]

Array.of()

## 18
```js
class Person(){
  constructor(str){
    let arr = str.split(' ')
    this.firstName = arr[0]
    this.lastName = arr[1]
  }

  set fullName(str){
    let arr = str.split(' ')
    this.firstName = arr[0]
    this.lastName = arr[1]
  }

  get fullName(){
    return this.firstName + ' ' + this.lastName
  }
}
```
## 19

delete obj.attr

冻结该对象 Object.freeze()
将该对象属性设置为不可写

```js
Object.defineProperty(obj, 'foo', {
  value: xxx,
  writable: false,
})
```
Object.seal(obj) 封装
Object.preventExtension(obj) 阻止扩展
Object.freeze(obj) 冻结 无法不能新增, 删除属性

## 20

间歇性改变页面中元素的样式, 一般为16ms

```js
requestAnimationFrame(function animate(time)){
  //...
  requestAnimationFrame(animate)
}
```

## 21
REVIEW 
`var nu = Object.create(null)`

```js
var obj = {}
Object.setPrototypeOf(obj, null)

obj.__proto__ = null
```

## 22
REVIEW 
```js
function F(){}
F.prototype = null

// f.__proto__ => {}
var f = new F()
```
Object.getPrototypeOf(obj) => `[[prototype]]`
## 23

B/A.__proto__ => Function.prototype
A.prototype.__proto__ => B.prototype
B.prototype.__proto__ => Object.prototype
a => A {}
b => B {}
a.__proto__ => A.prototype
b.__proto__ => B.prototype
a/b.prototype => undefined

## 24
1023 + 7 / 1023 - 7
.0123 => *2 => .000000110010 => 1.1*e-7 => 0 [111111111000]110010...


```js
> var b = Buffer.alloc(8)
undefined
> b.writeDouble(.0123)
Thrown:
TypeError: b.writeDouble is not a function
> b.writeDoubleBE(.0123)
8
> b
<Buffer 3f 89 30 be 0d ed 28 8d>
>
```
## 25

0100 0000 0100 0101 0001 1000 1111 0101 1100 0010 1000 1111 0101 1100 0010 1001

1.00... * 2 ^ (1000000100 - 1024 + 1)
1.00... * 2 ^ (0000000101)


## 26

f(x) = O(g(x))

总存在一个x1, 使得在x>=x1时, f(x)的值大于等于g(x)

存在c和n0, 当n > n0时
c*f(n) >= t(n)
t(n) = O(f(n))

一个函数在线性上放大

## 27

每次遍历n, 深度为logN

## 28

O(NlogN)

## 29

Function.prototype.call

f.call(thisArg, arg1, arg2, ....)
f.apply(thisArg, [arg1, arg2, ...])
f2 = f.bind(thisArg, arg1, arg2, ...)
返回一个新的**函数**, 相当于原函数的this及若干个参数已经被固定为绑定的值

```js

```
## 30

## 31

1s后 输出0, 1, 2, 3, 4

## 32

- 全局作用域 window
- 构造函数 创建的实例
- 函数调用 当前作用域函数
- 方法调用 调用该方法的对象
- 通过call, apply修改, 传入值
- arrow function 继承上一作用域的this

## 32

## 33

## 34

FIXME 
function forOwn(obj, iterator){
  var hasOwn = Object.prototype.hasOwnProperty
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      var val = obj[key]
      if(iterator(val, key, obj) === false){
        break
      }
    }
  }
  return obj
}

## 35

FIXME 
单向链表

## 36

## 37
```js
function parseQueryString(str){
  var result = {}
  str.split('&').forEach(pair => {
    var [key, val] = pair.split('=')
    try {
      val = eval(val)
    }catch(e){}
    if(result.hasOwnProperty(key)){
      if(Array.isArray(result[key])){
        result[key].push(val)
      }else{
        result[key] = [result[key], val]
      }
    }else{
      result[key] = val
    }
  })
  return result
}
```

## 38

排序的过程就是逐个调整逆序的过程(相反的项, 大小比较)

有序数组的逆序数字数量为0

排序算法每次交换操作能最大化减少逆序数字的数量, 性能就会更好

冒泡每次-1
快排-2^n(?)

## 39

从最后一个非单个元素(存在子元素最小父元素)
[9, 8, 3, 7, 5, 0, 1, 4, 6, 2]

## 40

```js
function NEW(f, ...args){
  var obj = Object.create(f.prototype)
  var result = f.call(obj, ...args)
  if(result && typeof result == 'object'){
    return result
  }else{
    return obj
  }
}
```

## 41

数组与字符串的同名方法
toString

## 42

断言

assert, promise

指的是一个函数, 判断一个条件是否成立, 不成立就抛出错误, 可以简化条件不成立时直接退出函数的逻辑
一般在函数中判断参数是否符合要求, 不符合时, 抛出错误, 并退出函数

## 42

递归下降

解析表示递归结构的字符串时的一种写法, 解析器只需解析当前目标, 其他目标调用其他对应函数进行解析

## 43

innerHTML 内容的HTML代码
innerText 内容的文本内容
outerHTML 包含元素自身的HTML代码
outerText
textContent 文本节点内容

## 44

描述一个属性的对象?
Object.getOwnPropertyDescriptor(obj, propName)

> 不能输入的QWX文本框

## 45

无法得知用户双击还是单击

## 46
```js
function forof(iterable, iterator){
  if(!iterable,next){
    iterable = iterable[Symbol.iterator]()
  }

  var gen = iterable.next()
  while(!gen.done){
    if(iterator(gen.value) === false){
      break
    }
  }

  iterable.return()
}
```

## 47

/((?<!XX)OO(?=yy))/g => 'XX'

## 48

## 49

## 50

当函数通过bind绑定null时, 当返回的函数作为构造函数调用时, 取消null绑定

```js
Function.prototype.myBind = function(thisArg, ...args){
  var f = this
  return function bound(...args){
    if(new.target === bound){
      return new f(...fixedArgs, ...args)
    }
    return f.call(thisArg, ...fixedArgs, ...args)
  }
}
```

## 51

14-54

## 52

g = x() => 生成器
g.next().value() => return function(f){
  setTimeout(f, d)
}

sleep() ?

先输出1, 等待2秒后, 输出2

## 53

## 54

.end()

## 55

原生数组的高阶方法都不会迭代不存在的下标项(稀疏位置)

规避: 使用for循环, lodash中函数会以正常方式处理稀疏位置, fill

## 56

## 58

## 57

- mouseenter
- mouseleave
- focus/blur

## 59
z`
匹配一个位置, 前后满足或不满足某种情况

## 61

## 62

vanilla.js 原生js ECMA jS

## 63

HTML &
CSS/RegExp/JS \
URL %

## 64
## 65
## 66
## 67
## 68
## 69
## 70
## 71
## 74

## 94

常见于NAT路由器

即NAT路由

## 95

## 96

NAT Net Address Transalte 为了解决ipv4地址不够用的情况

多个主机公用一个公网ip地址

NAT路由为了能够区别自己收到的包应该转给内网的哪台机器, 

## 97

因为曼彻斯特编码携带了时钟信号, 特点就是每个时钟周期都会有信号的跳变

## 98

ifconfig
interface

## 99

链路层, 也存在三层交换机, 不过其工作职责依然是二层, 不过它能够识别ip数据包的一些信息, 可以用来防止arp广播攻击

## 100

主干道上路由器无法存储42亿条目的路由表
必然导致路由表的某一条目对应的所有ip地址都从某一端口出去, 进而对应同一地区.
同一地区的ip则有相同部分, 类似结构

## 101
FIXME 
自动获取ip地址
DHCP 两次广播

## 102

win 资源监视器
linux ss -l 查看监听端口, ss 查看tcp连接 netstat -naop 查看到进程id

## 103

解析域名 域名信息实时在发生变化, 且数据量巨大

## 104

使用信任的证书

## 105

加密解密使用的密钥是否为同一个

## 106

tcp可以半开, 也存在三次挥手的情况

## 107

0.0.0.0 代表本机所有ip地址
255.255.255.255 代表广播地址

## 108

- 物理层: 01信号的传输
- 链路层: 以太网帧的传输
- 网络层: 关心全球两台机器之间的信息传输
- 传输层: 关心两个机器中两个程序间的信息传输
- 应用层: 数据如何使用

## 109

被主干网上路由器认可的ip地址

## 110

仅被局域网设备认可的ip地址

## 111
Maxium Transfer unit

最大传输单元: 指一个包能承载的最大数据量

## 112

http协议在该tcp连接上发送的是字符串, 包括Header

协议的包头中的数据都是以二进制形式编码的

## 113

客户端可以随时结束, 对于DHCP服务器来说, 它无法分辨主机是否仍在使用, 就不会删除掉其ip
长此以往, 可能会分配完可用ip

所以需要续租操作, 不续租时, 取消该ip

## 114

代表对方发送了一个RST位置为1的数据包
Connection Refused
对方没有监听

## 115

NAT路由不知道监听服务器
所以收到的数据包不知应转发给内网中哪台机器, 就会丢弃该数据包

解决: 设置端口转发

Upnp: 内网的程序告诉路由器我在监听, 让路由把特定端口的数据发送给对应机器

## 116

缓存区读取
host文件的读取
解析域名 DNS解析
tcp建立连接
证书交换, 建立tls连接
发送http request
接收response
构建DOM树
渲染页面