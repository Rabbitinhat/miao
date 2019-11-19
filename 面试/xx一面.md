xx一面比较基础
看来刷leetcode、lodash、掌握基本算法，数据结构，深入原理真有必要，大喵诚不欺我--！

## 代码题

- 说说throttle和debounce的区别，应用场景，实现以下
    + 防抖 
      + 避免某一事件连续, 迅速触发多次时, 事件处理程序触发过多, 使事件处理耗时过长
      + 事件连续触发的时间间隔小于设置时, 事件处理函数不会触发
      + 表单输入
    + 节流
      + 事件连续触发时间间隔小于设置(duration)时, 事件处理函数按照设置的时间间隔连续触发
      + 处理滚动, 鼠标移动, 避免过多计算

```js
  // 节流 throttle
  // 确保事件处理函数按照一定的时间间隔触发
  function throttle(f, duration){
    let timerId
    let lastRunTime = 0
    return function(...args){
      clearTimeout(timerId)
      let now = Date.now()
      if(now - lastRunTime > duration){
        console.log('now')
        f(...args)
        lastRunTime = now
      }else{
        // 间隔时间小于或等于duration
        // 最后触发一次事件时, 触发处理函数
        timerId = setTimeout(() => {
          console.log('after duration')
          f(...args)
          lastRunTime = Date.now()
        }, duration)
      }
    }
  }

  // 防抖
  // 避免事件过多触发时, 事件处理函数减少处理次数
  function debounce(f, duration){
    let timerID
    return function(...args){
      clearTimeout(timerID)
      timerID = setTimeout(() => {f(...args)}, duration)
    }
  }
  

  function throttleEJ(f, duration){
    let sign = 0
    return function(...args){
      let timestamp = Date.now()
      if(!sign){
        setTimeout(
          ()=>{f(...args)
          let after = Date.now()
          console.log('after', after - timestamp)
          sign = 0
        }, duration)
      }
      sign = 1
    }
  }
```

- 给定一个序列arr, 求最长递增子序列
    - 动态规划 Dynamtic Programming
    - 最长, 递增, 子序列(非连续)

```js
var lengthOfLIS = function(nums) {
  if(nums.length === 1) return 1
  if(nums.length === 0) return 0

  let status = new Array(nums.length)
  let max = 0

  for(let i=0; i<nums.length; i++){
    status[i] = 1
    if(max < status[i]){
      max = status[i]
    }
    for(let j=i-1; j>=0; j--){
      if(nums[i] > nums[j] && status[j] + 1 > status[i]){
        status[i] = status[j] + 1
        max = Math.max(max, status[i])
      }
    }
  }
  return max
};
```

- 实现一个深拷贝
  - 普通递归
  - 带环对象深拷贝

```js
// 普通递归
  function cloneDeep(obj){
    let result = {}
    for(let per in obj){
      if(obj.hasOwnProperty(per)){
        if(typeof obj[per] === 'object'){
          result[per] = cloneDeep(obj[per])
        }else{
          result[per] = obj[per]
        }
      }
    }
    return result
  }

// 带环对象
  function cloneDeepC(obj){
    let cache = new Map()

    function clone(obj){
      console.log(cache)
      // 缓存时, 要判断对象是否存在, 而非对象属性名
      if(cache.has(obj)){
        return cache.get(obj)
      }
      // obj 映射 新的 {}
      let result = {}
      cache.set(obj, result)
      for(let per in obj){
        if(obj.hasOwnProperty(per)){
          if(typeof obj[per] === 'object'){
            cache.set(per, obj[per])
            result[per] = clone(obj[per])
          }else{
            result[per] = obj[per]
          }
        }
        return result
      }
    }
    return clone(obj)
  }
```
- 实现一个函数，效果和Object.assign() 相同
  - 复制所有可枚举属性的值
    - 可枚举属性
      - 访问器属性/数据属性
      - `[[Enumerable]]`
      - for...in
      - 赋值, 初始化操作时, 默认值为true
      - Object.defineProperty 默认为false
  - 拷贝属性值, 如果属性值是对象, 只是简单复制引用

```js
  function myAssign(target, source){
    for(let item in source){
      if(source.hasOwnProperty(item)){
        target[item] = source[item]
      }
    }
  }
```

## css基础
- transition和animation的区别
  - transition
    - 过渡, 样式的变化触发, 只有开始和结束两个状态
    - animation
      - 动画
      - 可以设置多个关键帧, 包含多种状态变化
- position的值，absolute已什么为基准
  - 设置的position除static外其他值(一般为设置为relative)的父元素或祖先元素
  - 或者为body
- 伪元素和伪类的区别
  - 伪元素相当于在该元素上添加一个class
  - 伪类则是相当于在该元素内添加额外的元素

## 计算机基础网络
- 了解什么linux的常用命令
  - cd, ifconfig, curl(发送http请求), touch, mkdir, rm, where, ls, dir, mv, vi, ssh, 
- 怎么更改linux的root权限
  - REVIEW
- http 301 302 304状态码
  + 3XX 重定向
  - 301 move permanently 资源永久移动到Location指定位置  重定向
  - 302 move temporarily 资源暂时移动到Location位置
  - 304 未改变 无需再次传输请求内容(使用缓存)
- 在用https的情况下 还有什么安全隐患
  + 证书问题(非法, 伪造)
  + ...(2019-8-29)
- 你用过哪些跨域方法
  + jSONP
  + CORS
  + iframe
- cors说一下
  + REVIEW 跨域


## git

- git flow的过程
  + 扩展了一系列脚本使用git来管理复杂项目的工作流程(workflow)``
  + 模式中包含两个长期分支
    * 存在于整个产品的生命周期中
    * master: 包含发布的产品代码
    * develop: 新功能的开发, 待整合进master中的代码
  + 具体的开发工作使用额外的短期分支
    * 开发结束后就会删除
  + 开发流程
    * 开发新功能 git flow feature start/finish featureName
      - finish 命令会将功能整合进develop分支中
    * 发布新版本 git flow release start/finish 版本号
      - 基于develop
      - finish后 将内容同时整合进develop和master两个分支中
    * hotfix git flow hotfix start/finish hotfixName
      - 基于master分支(基于产品代码的修复)
      - 代码会同时整合进develop/master
- 用过git reset, git revert吗
  + git reset
    * 用于修改私有分支(短期分支)
    * 重置git中head, index, working directory 的状态, 为上一次提交时的文件状态
    * git reset --soft HEAD~ 重置HEAD位置
    * git reset --mixed HEAD~ 重置Index位置
    * git reset --hard HEAD~ 重置working directory(会清除实际文件内容的改动)
    * git reset filename.ext (git add 的相反操作) 重置Index区中的文件为上一次提交状态
  + git revert
    * 撤销一个提交的同时会创建一个新的提交
    * 常用于改变公共分支(长期分支)
  + git revert git reset 都会修改working directory中的文件内容

## js
- 基本数据类型
  + number string boolean undefined null System(es6)
- symbol是基本数据类型，还是引用数据类型，有什么用
  + 基本数据类型
  + 创建一个独特值
- 怎么判断一个数据类型是否是数组
  + Array.isArray
  + Object.prototype.toString.call(obj) === '[object Array]'
- ES6 知道什么说说
  + promise
  + let const
    * 无变量提升
    * 括号作用域
  + await async
    * 同步操作异步流程
  + arrow function
    * this 为调用其的作用域中的this
    * this值存在后无法修改
  + Symbol
    * REVIEW 
    * 基本类型
    * 独特值
  + Map
    * 映射
    * 作为缓存
  + generator
    * 生成器函数
    * 中断函数调用
  + 解构赋值
  + 剩余参数 展开操作符
- proxy了解过吗
  + let newproxy = new Proxy(target, handler)
  + 使用自定义的行为(赋值, 读取, 创建新实例...)代理对象的基本操作行为
- class里的static字段是干嘛的
  + 为class的构造函数添加自身方法
  + 创建的实例无法使用
  + Array.from Array.of
- promise的race是什么 finnaly是什么
  + race, 参数为promise组成的array, 其中最先返回的promise作为结果, 忽略其他
  + finally, 无论调用的Promise的状态是resolve或reject, finally的参数(函数)都会被调用, 类似于try catch中的finally语句
- 箭头函数和普通函数的区别
  + this

## vue
- vue-router的h5(history?)模式
  + REVIEW 
  + router的核心原理是更新视图但不请求页面
  + 利用HTML的History Interface提供的新功能 history.pushState(), history.replaceState()
  + 这两种方法都具有更新路由, 但不会发送新的请求的特性, 实现更新视图但不请求页面
  + mode: 'history'
  + 注意, 当用户不通过页面跳转而是直接输入URL进行访问, 此时程序的后端需要能够处理该URL的路由, 否则会返回404
  + 可以对路由的请求(get)进行判断, 如果没有资源返回, 则返回index.html(主页)页面, 同时没有匹配任何路由时(可以在router最后添加一个对其他路由的判断), 返回404
- vue-router的原理
  + router的核心原理是更新视图但不请求页面
  + 由两种主要模式
    * hash,只路由中`#`和后续的值, 原本是用于访问页面中元素(带有特定ID)位置, 当这个值变化时, 浏览器并不会发送获取新页面的请求; hash改变也会添加新的历史记录
    * `hashchange` hash变化时触发 window.location.hash 可以访问到hash值
    * history, 两种新方法 history.pushState() history.replaceState()
- v-model的原理
  + 语法糖
  + :value @input(input)/@change(checkbox/radio...) 实现双向绑定
- 响应式原理
  + 通过数据变化, 修改虚拟DOM, 在根据虚拟DOM的变化对页面元素进行修改
  + 数据驱动
  + 当Vue实例初始化时, vue会将data属性(对象)中的属性通过Object.defineProperty转化为同名的getter, setter函数, 当数据发生变化时, 相应的getter, setter函数就会被调用, 同时为每个属性添加相应的watcher对象, 用于监视属性的变化,  触发重新渲染, 修改虚拟DOM, 将变化反应到页面中
  + 对于Object/Array类型, 直接修改属性值无法触发重新渲染, this.$forceUpdate() 触发重新渲染
  + DOM异步渲染, 数据变化时, 对应的DOM修改是异步操作, 并非立即执行变化, 如果想要在修改数据后立即对DOM进行操作, 则可以使用Vue.nextTick, this.$nextTick()方法, (事件循环, Tick) 等待DOM异步渲染完成后, 进行数据操作