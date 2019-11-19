  // 最长递增子序列
function LIS(nums){
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
}

// LIS([10,9,2,5,3,7,101,18])

// Proxy
let handler = {
  get: function(target, name){
    return name in target ? target[name] : 37
  }
}

// 已target为基础, 构建的代理对象实例
// 添加默认值
let p = new Proxy({}, handler)

// console.log(p.a) //=> 37
// console.log(p.b) //=> 37

// 添加类型验证
let validator = {
  set: function(obj, prop, value){
    if(prop === 'age'){
      if(!Number.isInteger(value)){
        throw new Error('Input must be an Integer!!!!')
      }
      if(value > 200){
        throw new RangeError('The age seems Invalid')
      }
    }

    obj[prop] = value
  }
}

let person = new Proxy({}, validator)

person.firstname = 'foo'
person.lastname = 'bar'
person.age = 10
console.log(person)

// 扩展构造函数
function extend(sup, base){
  // 拿到base构造函数(读取 base.prototype的constructor属性值)
  let descriptor = Object.getOwnPropertyDescriptor(
      base.prototype, 'constructor'
    )
  // 修改base的实例的原型属性
  // Object.create创建__proto__属性值为sup.prototype的对象
  base.prototype = Object.create(sup.prototype)
  let handler = {
    construct: function(target, args){
      // 创建__proto__属性值为base.prototype的对象
      let obj = Object.create(base.prototype)
      this.apply(target, obj, args)
      // obj具有sup, base的全部实例方法和属性?
      return obj
    },
    apply: function(target, that, args){
      // 为that调用了sup, base构造函数
      sup.apply(that, args)
      base.apply(that, args)
    }
  }
  let proxy = new Proxy(base, handler)
  console.log('Before===========>', descriptor.value.toString())
  descriptor.value = proxy
  console.log('After=============>', descriptor.value.toString())
  Object.defineProperty(base.prototype, 'constructor', descriptor)
  return proxy
}

let Person = function(name){
  this.name = name
}

let Boy = extend(Person, function(name, age){
  this.age = age
})

Boy.prototype.sex = 'M'

let Peter = new Boy('Peter', 13)
console.log('Peter===========>', Peter)
console.log(Peter.sex)

let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval){
    let oldval = obj[prop]
    if(prop === 'selected'){
      // oldval = true
      if(oldval){
        oldval.setAttribute('aria-selected', 'false')
      }
      if(newval){
        newval.setAttribute('aria-selected', 'true')
      }
    }
    obj[prop] = newval
  }
})

// view.selected set obj=>view prop=>selected newval=>document.get...
// let i1 = view.selected = document.getElementById('item-1')


console.log('\nAPPLY, CALL, BIND================>\n')
let array = ['a', 'b']
let elements = [0, 1, 2]
// 将array作为参数数组, apply会传递0, 1, 2作为push的参数
array.push.apply(array, elements)
console.log(array)

let numbers = [5, 6, 2, 3, 7]

let max = Math.max.apply(null, numbers)
let min = Math.min.apply(null, numbers)

console.log(max, min)


// bind
// window.x
this.x = 9

let modules = {
  x: 81,
  getX: function(){return this.x}
}

console.log(modules.getX()) //=>9

let retrieveX = modules.getX.bind(modules)
console.log(retrieveX())
