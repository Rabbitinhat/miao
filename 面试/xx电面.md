* 遍历一个对象的属性，怎么遍历，for in 有什么缺点，怎么解决
  - for in 会遍历出对象原型链上的可枚举属性
  - object.hasOwnProperty(propertyname)
  - Object.keys() 返回object中可枚举属性名组成的数组

* call，apply，bind怎么用，有什么区别，bind之后的函数跟原函数有什么区别
  - .bind/call/apply(this, ...args)
  - bind 返回一个新函数, 其中传入的参数指定了this和部分参数作为返回函数的初始参数
  - call/apply 执行函数, 其中this值, 函数参数为传入的参数
  - call 可以传入多个参数, apply 则传入一个参数数组(也可以使用`arguments`对象作为参数)
* 对this的理解，箭头函数的this
  - 在函数调用(执行)时, 会生成执行上下文(记录), 其中包含函数的调用位置(调用栈中显示), 参数, this就是其中一个属性
  - 只有在函数调用时, this的值才会被确定
  - 根据函数的调用方式不同, this的绑定也不同
    - 默认绑定(独立函数调用) global对象(window, Object), 严格模式时, 为undefined
    - 对象调用绑定 调用函数的obj
      - 使用apply, call 强制绑定函数的this值
      - this绑定的隐式修改
        + 对象中的方法作为普通函数调用而非通过对象调用
        - 不是使用对象调用, 而是将对象中的方法赋值给其他变量进行调用
        - 变量赋值
        - 回调函数调用
    - 显式绑定
      - 通过apply, call, bind指定函数的this
    - 构造函数调用
      - 通过`new`对函数进行调用
      - 会将创建的新对象作为被调用函数的this绑定
      - JS中构造函数只是被new操作符调用的普通函数
        + 执行new操作的过程
          * 创建新对象
          * 绑定新对象的原型(__proto__)
          * 将构造函数的this绑定为新对象
          * 默认返回该新对象(函数不返回其他对象时)
    - 优先级
      - 默认绑定 < 对象调用绑定 < 硬绑定 < 构造函数绑定
      - 同时使用bind和new操作符时, bind函数会进行判断生成的函数是否被new调用, 来对this进行修改
    - this的意外修改
      - apply, call, bind传入null, undefined作为this时, 执行默认绑定(global)
        - Bug: 当使用库函数(其他), 可能带有this绑定的函数时, 会修改this的绑定
        - 可以设置一个{}作为this传入apply/..., 避免污染全局变量
        - Object.create(null) 可以创建不带任何属性的空对象({}仍包含__proto__属性, 指向Object.prototype)
        - null不存在原型(__proto__)
    - 间接引用
      - (a = obj.foo)() 将对象中的方法的引用传递给其他变量, 执行时this为默认绑定(global/window)
    - `Arrow Function` 箭头函数
      - 根据外层作用域的this来决定this的值
      - this确定后, 无法被修改
* 判断数组类型有哪些方法，用instanceof 判断数组类型有什么缺点
  * Array.isArray(val)
  * `Object.prototype.toString.call(val) === '[object Array]'`
  * val instanceof constructor 检测constructor.prototype是否存在于val的原型链上
  * 不同环境下(window,global)的Array对象可能不同(Array.prototype !== window.frames[0].Array.prototype), 将外部传入的array和当前环境的Array构造函数对比时, 可能返回false
* 说一下你对原型链的理解
  * 实例的__proto__等于它的构造函数的prototype属性
  * 用什么办法获取一个对象的原型，除了__proto__以外
    * Object.getPrototypeOf()
    * a.constructor.prototype
  * 原型链的最上面是啥？
    * Object.prototype
    * Object.prototype.__proto__ 为 null
    * null没有`[[Prototype]]`/__proto__
  * Object.create()这个函数在干嘛？
    * 以传入的对象为原型创建一个对象
  * null有原型吗？
    * 没有

* ES6相关
  * let const 跟var有什么区别？
     * 变量提升的问题，let const 有变量提升吗？class有变量提升吗？可以不声明就使用吗？涉及到临时死区
     * 块级作用域的理解，我们怎么模拟一个块级作用域
     * 
  * promise怎么给下面的then传值
     * 突然发现自己不太会了。。。！！
     ```js
       Promise.resolve(5).then(res=>{
          return 5
        },rej=>{}).then(f1,f2)
     ```
     * promise视频再看一看
  * 用过proxy吗，用过ArrayBuffer吗
  * 用过Symbol吗，用过Symbol.for吗
  * 用过ES6新的数据结构吗

* 说一下XSS和CSRF，怎么防范
* 网络五层模型？TCP属于什么，IP属于什么，http属于什么？TLS属于什么
* 说一下https的验证方式
  * 我说了非对称加密交换对称加密的秘钥，用对称加密进行信息的交换，然后问我是不是交换秘钥之后一直都是用这个秘钥
  * 为啥不用非对称加密进行信息加密？我说性能不好，问我啥性能？为啥？
* 什么叫跨域，具体哪些东西不同才叫跨域？
  * 跨域怎么解决？
  * jsonp解决跨域有什么缺陷
  * cors，知道option请求吗，什么时候会有，在浏览器里面查看过吗
  * 为什么复杂请求就要先发一个option请求，具体是怎么通信的
  * 哪些叫复杂请求
* express 中间件机制，
* 用过原生node写东西吗？知道node的流吗？用过event-emitter吗
* Vue
  * 说一下响应式，Object.defineProperty的getter和setter分别做了啥
  * 用过slot吗
  * nextTick，什么时候需要用到它？这个没答好,确实没有深刻理解
  * vue3.0了解吗(我说我用的就是3.0啊 hhh 暴漏了)
* React
  * React 生命周期说一下，shouldComponentUpdate有什么用？ComponentWillReceiveProps用过吗
  * purecomponet 和component有什么区别
  * reset 用过吗？ref用过吗
  * react16有什么新特性

* 面试总结应该是十动然拒吧，觉得我学的还不错，学习方向没问题，聊的蛮愉快，但是框架不熟。