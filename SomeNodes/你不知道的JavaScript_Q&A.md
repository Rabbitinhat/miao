# 中卷

## 附录A.2

---

宿主对象
- 由运行环境提供的非ECMAScript的Object(DOM, BOM, Node中的Object), 包含一些默认属性和方法

script
- script 标签中的代码和内联的代码彼此更独立, 共享global object, 可以调用其他标签内声明的变量, 但不同标签中的变量不存在变量提升

## 异步和性能

---

异步: 现在时刻执行的语句, 和未来某个时刻执行的语句, 之间会存在事件间隔
>如何表达和控制持续一段时间的程序行为


### 事件循环

事件循环的每一轮称为一个`tick`

#### 什么是事件循环

存在一个持续运行的循环操作, 每次执行时, 如果事件队列中存在要执行的事件时, 队列头部的事件就会进入循环中进行执行, 回调函数就是其中的一个事件

### 并行线程, 多线程时的问题

并行: 关于同时发生(执行)的事件

> 多线程编程, 共享内存地址, 语句执行顺序不同造成的不确定结果

### JavaScript的完整运行特性

不同函数的运行顺序可能不同, 但每个函数(代码块)的所有语句都会完整执j行, 中间不会同时执行其他语句

### 并发

并发的概念

- 两个或以上数量的进程同时执行(虚拟进程, 并非是硬件概念上, 而指应用上的一个任务, **多个任务同时执行**)

JS中的并发

- 由于JS中只能在同一时间运行单事件, 并发发生时, 每个事件也只是在事件循环中依次执行

> 单线程事件循环是并发的一种形式

#### 并发中的交流, 并发交互

在发生并发时, 不同进程(任务)中的数据会发生交流, 此时并发中, 任务执行的顺序不同会导致结果发生改变

#### 解决并发交互问题

通过在函数中添加对数据状态的判断来处理具体情况

#### 协作

当一个需要长期运行的进程发生时(处理大量数据, 等待时间较长的响应等操作), 可能会阻塞其他事件的操作, 此时可以通过将数据分割处理(每次只处理特定长度的数据, 剩余部分通过`setTimeout`延迟处理)

> 严格说来，setTimeout(..0) 并不直接把项目插入到事件循环队列。定时器会在有机会的时候插入事件
> 在Node.js 中，类似的方法是process.nextTick(...)

### 任务

任务队列

> 它是挂在事件循环队列的每个tick 之后的一个队列。在事件循环的每个tick 中，可能出现的异步动作不会导致一个完整的新事件添加到事件循环队列中，而会在当前tick 的任务队列末尾添加一个项目（一个任务）。

任务队列会优先于setTimout语句执行(setTimeout中事件位于不同的事件循环中)

### 语句顺序

JS执行时, 编译器可能发生重排序(不按照书写顺序执行JS代码), 可能会产生副作用

## CallBack 回调

---

回调是JavaScript异步的基本单元

### 使用回调的问题

- 回调地狱: 过多地使用回调会造成程序的复杂度增加, 追踪代码运行困难
- 信任问题: 当使用第三方API的回调函数时, 无法保证callback使用的正确性(使用latch, 类型检查, 分离回调(用于正确的回调函数和用于错误的回调函数), 'error-first'风格(将回调函数的第一个参数用于捕获错误)), 和无法追踪回调的执行

回调执行时间的不确定性
- 超时
- 执行过早

### 更好的异步方法

- 更同步, 顺序执行的方式
- 能够确保回调的执行

## Promise

未来值

### 判断一个值是否为Promise

接收到的值可能是原生的Promise, 也可能是库, 框架自己实现的Promise(? 暂时性问题)

thenable
- 判断该值是否为具有then()方法的object
    + duck typing - 根据一个值的形态(存在的属性, 方法)来判断一个值的类型
- 这种判断方法可能会造成错误
    + 将本身或原型中带有then的方法判断为Promise

### 信任问题

Promise.resolve(Promise/thenable(带有then方法的非Promise对象)/其他值(number, string...))
- 可以确保返回一个Promise, 值得信任的值
    + 传入Promise, 返回同一个Promise
    + 传入非Promise, 非thenable的值, 得到这个值填充的Promise
    + 传入thenable, 返回一个Promise值, 不会产生干扰

### 链式

Promise的链式调用
- Promise.then 始终返回一个新的Promise
- then中的返回值会作为返回的Promise的完成值(resolve), 产生的错误作为返回Promise的reject捕获的值
- then中如果省略resolve处理函数, 默认会将传入then的值作为返回Promise中的相应结果

### 命名

在reject中传入Promise/thenable值
- reject不会展开传入的Promise/thenable值(如resolve), 而是作为接收reject的方法(then, catch)传入的值


### 错误处理

捕获异步错误
- error-first的回调风格
    + callback函数的第一个参数接收error对象
- 分离回调 Promise
    + 一个函数处理错误, 一个函数处理成功 

### Promise错误问题

如果Promise的执行过程中发生错误, 而没有后续的reject处理函数(未捕获), 则会静默失败

### 如何解决

### Promise模式

- 链式
- Promise.all
    + 传入array, 返回array
    + 传入[], 立即返回[]
- Promise.race
    + 传入[]时, 返回的Promise为pending状态

### 并发迭代, 异步迭代

异步的数组方法

Promise的数组方法

### 局限性

- 顺序的错误处理
- 只操作单一值
    + 使用一个值封装多个数据
    + 将不同信息作为不同的Promise
- 单决议
    + 一旦完成(resolve, reject), promise的状态就会固定
- 转化callback函数为Promise函数
- Promise操作无法取消, 对外界完全封闭


## 生成器 Generator

作用?
- 控制异步操作流程

### 输入输出

建立双向数据传递

- 调用生成器函数, 构造了一个迭代器对象
- 通过调用迭代器对象.next(), 启动生成器, 使其运行至下一个yield语句位置
- yield 更新迭代器对象的值(?), 并暂停函数运行
- res.next(val) val会在暂停的yield位置抛出
- 最后一个迭代器对象的value由return语句的返回值组成

### 多个迭代器

使用迭代器可以建立不同函数之间的交替运行, 而非每个函数完整运行后在执行下一个函数
从而可以产生不同中结果

### 生成器产生值

for...of 自动迭代标准迭代器(array, iterator)

{done: false, value:nextVal}
{done: true, value:endVal}

iterable(可迭代) 包含迭代器的对象, next()方法

ES6 在Object中包含迭代器

[Symbol.iterator]: function(){
    return this
}

```js
// 可迭代对象
let something = (function(){
// 使用闭包创建一个共有值
  let nextVal

  return {
    [Symbol.iterator]: function(){
      console.log(this)
      return this
    },
    next: function(){
      if(nextVal === undefined){
        nextVal = 1
      }
      else{
        nextVal = (3 * nextVal) + 6
      }
      return {done: false, value: nextVal}
    }
  }
})()

let count = 0
for(let i of something){
  console.log(i)
  count++
  if(count > 20){
    break
  }
}
```

> 从ES6 开始，从一个iterable 中提取迭代器的方法是：iterable 必须支持一个函数，其名称是专门的ES6 符号值Symbol.iterator

向迭代器调用return('message')终止迭代