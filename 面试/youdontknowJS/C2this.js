if(!Function.prototype.bind){
  Function.prototype.bind = function(context, ...args) {
    let self = this;//谨记this表示调用bind的函数
    let fBound = function() {
        //this instanceof fBound为true表示构造函数的情况。如new func.bind(obj)
        // this instanceof fBound 新的this绑定的对象的原型链上存在fBound.prototype(new 操作时, 会进行原型链绑定和this绑定)
        return self.apply(this instanceof fBound ? this : context || window, args);
    }
    fBound.prototype = Object.create(this.prototype);//保证原函数的原型对象上的属性不丢失
    return fBound;
  }
}



// foo.softBind(this, arguments)
if(!Function.prototype.softBind){
  Function.prototype.softBind = function(obj){
    let fn = this
    let argu = [].slice.call(arguments, 2)
    let bound = function(){
      return fn.apply(
        (!this || this === global) ? obj : this,
        argu
      )
    }
    bound.prototype = fn.prototype
    return bound
  }
}

function foo(){
  console.log('name', this.name)
}

var obj1 = {
  name: 'I\'m obj1'
},
obj2 = {
  name: 'I\'m obj2',
  foo: foo
}

foo.softBind(obj1)()
// obj2.foo.softBind(obj1)() => obj1 返回的function仍为默认调用
obj2.foo = foo.softBind(obj1)
// 对象调用
obj2.foo()

var name = 'global'

function a(){
  var name = 'function'
  return () => {
    // this 由a的this决定
    console.log(this.name)
  }
}

var obj1 = {
  name: 'Obj1',
}

var obj2 = {
  name: 'Obj2'
}

obj1.a = a.apply(obj1)
obj1.a()
obj1.a.apply(obj2)

function softBind(fn, obj){
  let argu = [].slice.call(arguments, 2)
  let dbound = function(){
    return fn.apply(
      (!this || this === global) ? obj : this, argu
    )
  }
  dbound.prototype = fn.prototype
  return dbound
}

function foo(){
  console.log('name', this.name)
}

var obj1 = {
  name: 'I\'m obj1'
},
obj2 = {
  name: 'I\'m obj2',
  foo: foo
}

softBind(foo, obj1)()
// obj2.foo.softBind(obj1)() => obj1 返回的function仍为默认调用
obj2.foo = softBind(foo, obj1)
softBind(obj2.foo, obj1)()
// 对象调用
obj2.foo()


// 为Object定义迭代器 iterator
let myObject = {
  a: 2,
  b: 3
}

Object.defineProperty(myObject, Symbol.iterator, {
  enumable: false,
  writable: false,
  configurable: true,
  value: function(){
    let o = this
    let idx = 0
    let ks = Object.keys(o)
    return {
      next: function(){
        return {
          value: o[ks[idx++]],
          done: idx > ks.length
        }
      }
    }
  }
})

let it = myObject[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())



