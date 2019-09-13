## Note

### 6-26

函数本身处在哪个作用域（A），它运行时创建的作用域（B）就在哪个作用域（A）内部
函数本身也是处于一个作用域的。是创建它的函数运行时所创建的作用域

### 6-28

思考：为什么一步两步上楼梯，n 级楼梯的走法正好是 fibb（n)

使用 document.write 绘制 z = sin(x) + cos(y)的三维图像

### 7-01

向文档的解析流里写入内容

文档一里解析完成<双击查看原图 ml>，解析流会关闭

重新 write 会导致重新打开一个解析流，之前的内容会被完全覆盖掉

会冲掉所有的 html 内容，但 js 运行后创建的函数及变量是没有冲掉的

`document.open()` 打开解析流

`document.close()` 关闭解析流

JS 中所有位运算只能整数才能参与, 浮点数参与时，保留整数部分参与, JS 中浮点数的范围远高于 32 位整数的范围, 运算结果以有符号 32 位数理解, 除了>>>运算符，它的运算结果以无符号整数理解, 最后开始的括号如果还没闭合的话，之前开始的括号就不能闭合. 如果任何一个括号内部的括号没有闭合，它自己就不能闭合.

[用 c 语言画直线](https://zhuanlan.zhihu.com/p/30553006)

UTF8 编码特点：
变长
兼容标准 ASCII
容错

数组是值的有序集合, 对象是值的具（有）名（字的）集合

### 7-09

结束条件。
【明确】函数的功能：接收什么参数，做什么事情，返回什么值。认为这个已经正确实现了。

什么时候要返回值，什么时候不需要返回值：

- 执行操作而不求出结果的，一般不需要返回值（排序）
- 计算出一个结果的，往往需要返回值
- 纯函数需要返回值
- 非纯函数（副作用函数）不需要返回值。

### 7-15

排序时不改变相同元素的位置, 就称算法是稳定的

- 冒泡
- 归并
- 插入
- BST 排序(>=root 放在 root 的右边)
- !非就地快排(返回新数组, 相等项会按照原顺序 push 进保存相等项的数组)
  如果改变相同元素的位置, 就为不稳定的
- 选择
- 就地快排(交换时, 会改变原有相等项的位置)

不稳定性的缺点 当元素为对象(或是拥有不同数据时), 当其中一组数据已排好序时, 使用不稳定算法对另一组数据进行排序时, 可能会打乱相同项的另一组已排好数据(会改变相同项的原有顺序)

### 7-16

快排时, 每次遍历时挑选的随机元素, 在遍历完成后位置就会固定

### 7-17

`/** *` 添加 JS 文档

几乎任何对象都有原型的"原型"指用来查找属性的 obj.**proto**(Object.getPrototypeOf(obj)) 原型
每个函数(一般只有函数才有)都有一个原型属性指的是 f.prototype(实例的原型), 原型属性

`Object.prototype.toString.apply([])` 通过`apply()`将`Object.prototype.toString`方法的`this`修改为`apply`的 parameter

```js
function isArray(val) {
  return Object.prototype.toString.call(val) === "[object Array]";
}
```

### 7-18

`Object(a) => typeof a => object`

OOP

表示一个事物的信息是离散存放的, 对这个事物的操作也是离散存放的函数

- 封装: 把表达一个事物的信息及对其可能进行的操作(function/method)放在一起; 隐藏起来, 只通过特定接口传递信息

- 相同的一类对象, 拥有相同的属性和方法(function)
- `class` `Object`
-
- 继承: 一个类获取另一个类的所有属性和方法
- 多态: 有特定一组属性和方法(API, 黑盒)

```js
let rabbit = {
  name: "kat",
  color: "white",
  speak: function() {}
};

// * Dog 继承 Creature
Object.setPrototypeOf(Dog.prototype, Creature.prototype);
```

### 7-19

```js
Object.defineProperty(obj, "foo", { value: 8 } /*属性描述符*/); //-> 不可重写, 不可重新赋值
Object.defineProperty(obj, "bar", {
  value: 9,
  configurable: true /*可重新声明*/
});
```

属性描述符: 构造属性的值, 是否可枚举, 是否可 rewrite, 可否重新声明赋值

```js
Object.assign(),
Object.merge
Object.defineProperties(obj, {a1: {value: 1}, a2: {value: 2}})
Object.keys()
Object.values()
...
```

浅复制, 深复制

<!-- ? 浅赋值, 深赋值 -->

基本类型的 property(Number.property, Array.property,...) 为其基本类型的实例(历史问题, **proto** => Object.property)

函数重载(模仿):

```js
function Complex(real, image) {}
Complex.fromString = function(str) {};
Complex.copy = function(c) {};

// others
Array.of(1, 2, 3, 4, 5);
```

### 7-22

堆(Heap) 数据结构, 也叫优先队列(PriorityQueue)不同于"Heap memory 堆内存"
* 堆内存对应概念是栈内存
* 栈空间指存储正在等待函数调用返回的局部变量的一块内存
* 调用栈指函数之间相互调用及等待的逻辑概念
`JavaScript heap out of memory` 用光可用内存

堆/栈内存中数据的调用和存储

堆=>完全二叉树: 最大堆积(max heap) 其中父节点大于两个子节点, root节点为**最大值**; 最小堆积(minum heap) 父节点小于两个子节点, root节点为**最小值**

主要支持两种操作:
* 取出最值(root节点)
* 向堆中添加值 O(logN)

通过无序数组构建heap O(N*log(N))

操作后不影响原本堆(heap)的性质(添加/删除后重新对heap进行排序)

### 7-25

Hash

最好的Hash算法
* 相同Key值映射的index值相同
* 不同的key值映射的index值不同
* 不同的key值映射出的index值均匀分布

由于key值无法预测, hash算法一定会遇到冲突: 不同key值映射出相同的index

处理冲突
* 开放定址法

实例
* MD5
* sha1

### 8-8

字节序: 大端, 小端
不同字节序的机器进行数据传输时, 可能会导致乱码

编译型(将代码编译为机器码, 不同CPU执行的机器码不同) C C++, Rust

解释型(将代码翻译为语法树, 其他程序读取并执行代码(VM)) JS Python Ruby

半编译型(Java转换为字节码, 通过VM执行)

JS `JIT`(JustInTime)会对代码进行优化, 同时创建代码的编译版本(机器码)

WASM(Web ASM)

### 8-12

ES3 关键字, 保留字无法作为属性名(class => className)

```js
Node.classList => DOMTokenList
Node.classList[add | remove | contains | toString]

node.dataset => //=> return 自定义属性列表
node.classList
node.style.styleName //=>将属性添加到内联样式上
node.innerHTML //=> node内部的HTML代码
node.outerHTML //=> node本身的HTML代码
node.innerText //=> node内的文本内容 是否保留回车受node.style.whiteSpace影响
node.outerText //=> 同innerText
node.textContent //=> 保留回车

select.options => HTMLOptionsCollection
select.selectedIndex => checked状态的option的index
```

### 8-14

某些事件无法阻止(`e.preventDefault()`), eg. scroll, beforeclose

### 8-15

layout

`offsetWidth offsetHeight` 元素本身大小
`clientWidth clientHeight` 元素内容区大小

```js
passive window.addEventListener('click', f, {
  capture: true,
  passive: true //将不会在事件处理函数中调用preventDefault, 浏览器可以事件处理函数运行的同时, 就开始执行默认事件(scroll); 否则会先运行事件处理函数(判断是否阻止默认事件), 再执行默认事件(造成时间的延迟)
})
```

mousewheel/DomMouseScroll

### 8-16

`DOMContentLoaded` DOM Level 3
Newwork 蓝色线表示window.load
readyStateChange => `document.readyState` loading, interactive, complete

```js
document.addEventListener('DOMContentLoaded', function(){
  console.log('DOMContentLoaded')
})

document.onreadystatechange = function(e){
  if(document.readyState === 'complete'){

  }
}
```

模态对话框

Canvas 

### 8-19

BOM (Brower Object Model)
DOM一般指document上提供的相关API(Application Programming Interface, 以函数, 类, 属性, 方法表示的接口, 具体实现则被封装起来)
BOM一般指浏览器中提供的除JS内置API以外
* screen 屏幕
* history 历史记录
* location 地址
* navigator 浏览器本身信息

history

修改当前页面的url
* location.assign(url)
* location.href = url
* location = url

replace() 移除当前历史记录头部项
hash => onhashchange
<a> hash, a.href赋值后会自动将url转换为最简状态

history 不会保存具体的历史记录
* pushState(state, pageTitle, url) 不刷新页面的情况下修改地址栏(无法修改域名) 改变页面内容的情况下, 同时修改url;
  * onpopstate pushState修改地址栏后, 点击`<-` `->`按钮时触发

navigator
* userAgent

window.getComputedStyle
`getComputedStyle(p, 'before').content` window.stop() 停止页面加载

### 8-20

compositionStart/compositionEnd 中文输入法触发

vscode `Ctrl+b` 隐藏侧边栏

### 8-21

```js
var desc = Object.getOwnPropertyDescriptor($0._proto_, 'value')
desc.set.call($0, '9988')
```

### 8-22

```js
  <script
  src="https://code.jquery.com/jquery-3.4.1.slim.js"
  integrity="sha256-BTlTdQO9/fascB1drekrDVkaKd9PkwBymMlHOiG+qLI="
  crossorigin="anonymous"></script>
```

jQuery

全局函数 `jQuery $`

jQuery Object 与 原生DOM Object 

返回原生DOM Node
$('div').get(index/null) 
Array.from($('div'))

return false 阻止默认行为, 阻止冒泡

兼容性
* 1.xx IE6
* 2.xx IE9
* 补丁 小版本号的更新

稀疏数组 不存在下标(项为empty)

### 8-23

<!-- FIXME  -->
Base64

CSS动画事件

* trasitionstart
* transitionend
* animationstart
* animationend

::s.next => s.next.bind(s)

### 8-24

扫雷, 生命游戏, 贪吃蛇

构建board, 判断位置状态

### 8-25

Promise
fetch

Asynchronous Programming

```js
true == 2 //=> false Number(true) => 1
true == 1 //=> true
```

```js
//  ctrl + [  ctrl + ]
// 生成新的li(class为xixi)，包含一个checkbox， 输入值， close
var temp =
  `<li class="isli"> <input type="checkbox" class = "xixi">` +
  nmsl.value +
  `<i class = "close">X</i> </li>`;
// 传入html片段生成相应节点
var li = document.createRange().createContextualFragment(temp);
```

### 8-26

`Media Access Control` 介质访问控制

集线器
载波侦听, 多路访问
指数退避

ARP 广播

网络连接
* 令牌环

ICMP

网关, 掩码

拓扑

分类网络

路由表

tracert

B/S 客户端-服务器模型

客户端和服务器都为进程

网络对于主机而言是一个I/O设备, 接收和发送数据

内存 => 总线 => I/O总线 => 网络适配器

`LAN`(`Local Area NetWork` 局域网, (Ethcrnct)以太网技术) 最低层, 返回最小

以太网段(Ethernet segment) 以太网最小部分

网线(一段连接到主机的网络适配器, 一段连接到集线器) + 集线器(不进行分辨, 将一个端口上收到的数据复制到另一个端口)

主机可以发送一段数据(bits, 称为帧(frame)), 其中包含固定数量的header(源地址, 目的地址, 帧的长度) + 数据内容

使用网线和网桥(bridge) 可以将多个网段进行连接 => (bridge Ethernet 桥接以太网), 网桥之间的电缆的最大带宽和集线器和网桥之间电缆的最大带宽可以不同

使用路由器(`router`)可以将多个不兼容的局域网进行连接, 形成`internet`, 路由器的对每个连接的网络都有一个网络适配器

路由器中包含路由表, 对连接进行分析判断(网桥)

WAN(Wide-Area-NetWork 广域网) 路由器也可以进行电话连接

每台主机和路由器中都包含协议软件

### 8-27

公网IP地址

DHCP: 自动获取IP地址的协议

连接WIFI时可以选择静态IP

关闭DHCP
- 客户端: 取消自动获取IP地址
- 服务端: 取消路由器上的设置

协议: 主机可以发送一段数据(bits, 称为帧(frame)), 其中包含固定数量的header(源地址, 目的地址, 帧的长度) + 数据内容; binary 存储

FIXME
MAC地址 出厂自带
广播

数据使用什么协议, 就按照该协议格式组成数据的结构

抓包软件: 发往主机网卡的独立数据包, 显示以太类型, 负载的位置表明数据使用何种协议, 通常使用ICMP格式编码

ICMP: 互联网控制消息协议
- 报头位置位于IPHeader的160bits
- ping操作, 数据包被扔掉(type 11, code 0-TTL(time to live)超时, )

报文类型
0-Echo Reply
8-Echo Request

ip dst === 0.0.0.1

BE, LE: 大端, 小端 Identifier, Sequence number

IP
通过子网掩码 | IP来判断两台主机是否位于同一局域网中

交换机: 同时进行单播

9-54 REVIEW  以IP作为网络的核心, 将任何物理信息转化为具体的IP

每一台机器包含一个IP地址, 可以发送数据包

传输层协议
- UDP 每个占用16bits
  - 源端口
  - 端口
  - UDP
  - 校验和

UDP只是构造一个数据包进行发送, 并不负责接收信息

端口号: 识别同一台计算机中进行通信的应用程序

10-34 REVIEW 
OS => Browers(DOM, Ajax) => VM中JS browser对VM中的JS进行隔离,
OS => Node.js VM中JS, Node.js中运行的JS可以和OS进行交流

Node.js

dgram 创建socket, 表达UDP端口的对象

socket.send

![createSocket](./createSocket.png)

socket.send(msg.toString().toUppercase, info.port)

1500 - 28 存储UDP数据, 保证在一个数据包内发送数据

MTU 最大传输单元

udpsock.address() => address: '0.0.0.0' 表示任意一个IP, 绑定所有网卡(网络适配器)

局域网: UDP广播

10-59 REVIEW 频道?

广播方式

11-44 REVIEW 广域网末端

很多协议基于UDP => IP => 以太网

DNS协议
解析域名 => IP地址
查询请求 => DNS服务器

DNS报文格式
Queries区域

令程协议: DHCP port: 67, DNS port: 53, NTP(Network Time Protocol) port: 123

网络攻击 NTP放大攻击

路由不会验证数据的合法性, 只关注目的地址
大部分网络设备不会校验来源信息的真实性和合法性

IP协议不会验证来源信息是否合法

IP层 VPN(virtual private network), 希望不同广域网的设备位于同一个局域网中
虚拟网卡(包含IP) => send() 发送数据, 连接时, 每个设备设置虚拟的IP, 使用send发送数据, send调用真实的IP, 将**数据加密**进行发送

设置VPN后, 网络连接中出现一个新的网络连接, 包含一个新的IP地址
VPN setup

IPv4地址不够用 2^32 IPv6 2^128 数据包结构和IPv4存在不同
想要使用IPv6, 就需要所有路由都支持IPv6传输(无法实现)

使用IPv4包裹IPv6数据(两端为IPv6网络, 中间为IPv4网络)

NOTE 
node.addEventListener('event' f) => f为函数变量, 匿名函数, 函数声明时, this值为node(addEventListener作为方法调用, 调用addEventListener的对象, 此时可能发生this的覆盖), 使用箭头函数可以解决这个问题(箭头函数this指向当前域的对象(global, function, class), 本身不绑定this, 从自己的作用域链的上一层继承this)

交换机 发送消息(判断目的地址是否为同一局域网的主机IP, 还是为广域网的主机IP)
从外部发送的消息目的地址为整个局域网的对外IP(广域网IP), 路由将目的地址替换为某个局域网内主机IP, 向外发送时也会将源地址由局域网中主机IP替换为对外的广域网IP(交换机操作)

`NAT` 最初是为了解决IPv4地址不足的问题

改变目的地址`SNAT` 改变源地址`DNAT` 

将受到的消息正确转递给局域网中主机(通过端口号来识别局域网中主机, 端口冲突时,会使用(临近)端口进行替代(发送端口和接受的端口并不相同(映射)), 将其保存在端口映射表(动态, 一定时间内会清除)中, 没有端口时, 使用协议中的ID进行替代)

(交换机 路由)

 端口映射, 路由收到一条发向未发送信息端口的数据时, 会将其丢弃(保障安全, BTC勒索)
 
 级联 多个路由连接 发送消息时, 每经过一个路由, 都会将源地址进行替换; 返回响应时, 也是相同的行为

内网主机可以主动访问外网, 但外网主机无法主动访问内网

远程桌面 win10专业版 注册表 win10远程端口, 端口映射 rd client

其他远程桌面, 额外的中心服务器作为中转

#### TCP

TCP控制程序

TCP抽象方式
- 服务端: 接收消息, 监听 目的IP 目的端口
- 客户端: 多个 源IP 源端口

Connection Object 同一端口, 区分连接对象(不同源端口)来分辨不同消息

TCB

- 确认: 数据包未收到时, 会进行确认
- 同传
- 编号
- 挥手

`ip.src == 10.0.0.191 || ip.dst == 10.0.0.191 && tcp`

relative sequence number 相对序列号(以0, 而非随机数开始)

- Sequence number 序列号
- Acknowledgment number 响应号
- Window size value 窗口大小(协议中留的bits位过少)
- Window size scaling factor 窗口缩放因子
- Cakculated window size 实际窗口大小 = value * scaling factor
- `[PSUH]` 数据直接传输给应用层
- Header Length 头部长度(前两次握手时, 头部额外添加option(选项), 长度要大一些)


TCP 三次握手, 四次挥手

TCP 包头
- 源端口号
- 目标端口
- 顺序号
  - 11:45
  - 随机数开头
- 确认号
  - 回复消息
  - 确认收到的下一个数据包
- 头部长度
  - 头部总行数 4个字节一行
- 保留位
  - URG
  - ACK
    - 确认
  - RST
    - 重置, 发送完毕后立即断开
  - SYN
    - 握手阶段 显示为1
  - FIN
    - 挥手阶段 显示为1
  - 窗口大小

拥塞
SACK 选择性确认: 只确认收到的数据包
时间戳: 

TCP状态转换图

#### 8-29

加密算法
(密钥)
对称加密 (加密解密使用同一密码)
非对称加密
- 使用不同密码, 密钥是一对, 公钥, 私钥
- 使用公钥进行加密, 私钥解密, 无法交换(公钥并不能解密公钥加密的数据)
- RSA

双方分别生成彼此的公私钥(根据算法), 发送数据时会先交换公钥, 私钥则会隐藏. 发送数据时,会使用对方的公钥对数据进行加密, 对方会使用私钥进行解密(非对称加密)

安全: 公钥交换时, 可能会被拦截(?)
解决: 信任链(CA证书 电子签名)

(Certificate Authority) 证书 => 公钥绑定身份信息, 使用证书就可以确认当前公钥发送方和证书绑定的身份信息是否相同

中间人攻击

TLS 先连接确定公钥和身份信息, 协商一个对称加密密钥, 传输时, TLS就会对未加密文件进行加密, 并发送数据

沃通事件

RST flag
Client hello 包含信息
REVIEW 11-57

HTTP协议 request-response协议 报文格式为string
头部信息并不是数据的一部分

Network Response Headers(view source)

无法上网

QQ也无法连接
- 不需要解析域名
普通网页打不开
- DNS 是否正确设置
  - ipconfig/all DNS服务器 ping DNS服务器IP
  - nslookup(w/l)
- 连接目标, 路由转发
  - 目标存在
    - 目标端口是否存在
  - 目标不存在

DNS攻击

防火墙 gfw
- 禁止DNS, DNS污染
  - 使用host, 不通过DNS转发
- 检测数据包内容是否包含敏感词
  - 加密, 通过HTTPs
- 阻止访问目标IP的数据包
  - 连接其他服务器(非黑名单IP)进行转发

- 断开物理连接(海底光缆)
  - 卫星通信

#### c12 JavaScript and the Browser

你不知的JS

只要两者之间连通, 就可以发送http request(去中心化?)

DNS 网域名称系统
DNS(13台根域名服务器, 其他DNS都从根域名服务器接收消息 中心化, 根域名服务器故障时, 会影响全部相关的DNS服务器)

ad hoc 专用的, 特定的,非标定

Networks 网络(物理), Internet 互联网, Web 网络资源组成的网络

FTP传输时, 会携带密码

URL
- [Node URL construct](https://nodejs.org/api/url.html)

负载均衡

### 8-31

扩展运算符 & 剩余运算符
Spread operator (`...`) 展开操作符
Spread syntax 展开语法
扩展运算符

- `var newArray = [...oldArr]` 展开oldArr中的元素, 数组复制
- `var arr = [...Arr-like]` 转换Array-like(DOM)为数组
- `var someEl; [...someEL] = oldArr` 将someEL(数组形式, 返回数组)赋值为oldArr

剩余运算符

### 9-9




