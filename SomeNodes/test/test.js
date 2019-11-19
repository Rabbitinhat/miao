function foo(){
  console.log(b)
  return 1
}

var a, b, c
c = {
  get bar(){
    console.log(a)
    return 1
  }
}

a = 10
b = 30

a += foo()
b += c.bar
console.log(a + b)


function asyncify(fn){
  let orig_fn = fn,
  iniv = setTimeout(function(){
    intv = null
    if(fn) fn()
  }, 0)

  fn = null
  return function(){
    if(iniv){
      // setTimeout中的函数还未执行, 使用bind提前传入参数
      fn = orig_fn.bind.apply(orig_fn, [this].concat([].slice.call(arguments)))
    }
  }else{
    // setTimeout中函数已经执行
    orig_fn.apply(this, arguments)
  }
}

// Promise first
if(!Promise.first){
  let count = 0
  Promise.first = function(prs){
    return new Promise(function(reslove, reject){
      prs.forEach(function(pr){
        Promise.resolve(pr).then(resolve, (rej) => {
          // reject计数
          count++
          if(count === prs.length){
            Promise.resolve(rej).then(reject)
          }
        })
      })
    })
  }
}

if(!Promise.none){
  Promise.none = function(prs){
    let result = []
    let count = 0
    return new Promise((resolve, reject) => {
      prs.forEach((pr, idx)=>{
        Promise.resolve(pr).then(null, (data)=>{
          result[idx] = data
          count++
          if(count === prs.length){
            Promise.resolve(result).then(resolve)
          }
        })
      })
    })
  }
}

if(!Promise.any){
  Promise.any = function(prs){
    return new Promise((resolve, reject) => {
      prs.forEach((pr) => {
        Promise.resolve(pr).then(resolve)
      })
    })
  }
}

if(!Promise.last){
  Promise.last = function(prs){
    let count = 0
    return new Promise((resolve, reject) => {
      prs.forEach((pr, idx) => {
          Promise.resolve(pr).then((data) => {
            count++
            if(count === prs.length){
              Promise.resolve(data).then(resolve)
            }
          })
      })
    })
  }
}

if(!Promise.map){
  Promise.map = function(vals, cb){
    return Promise.all(
      vals.map((val) => {
        return new Promise(function(resolve){
          // cb接收两个参数, val值和callback函数
          cb(val, resolve)
        })
      })
    )
  }
}

function foo(bar, baz){
  let x = bar * baz

  return [
    Promise.resolve(x)
    getY(x)
  ]
}

Promise.all(
  foo(10, 20)
).then(function(msgs){
  let x = msgs[0]
  let y = msgs[1]

  console.log(x, y)
})

if(!Promise.wrap){
  Promise.wrap = function(fn){
    return function(){
      // 复制所有参数
      let args = [].slice.call(arguments)
      return new Promise((resolve, reject) => {
        // fn 可以接受一个error-first模式的callback
        fn.apply(null, args.concat((err, v) => {
          if(err) reject(err)
          else resolve(v)
        })
      })
    }
  }
}


