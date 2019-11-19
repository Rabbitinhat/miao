try {
  module.exports = Promise
}catch(e){}

function Promise(executor){
  let self = this

  self.status = 'pending'
  self.onResolvedCallback = []
  self.onRejectedCallback = []

  function resolve(value){
    if(value instanceof Promise){
      return value.then(resolve, reject)
    }
    // 非Promise值时, 异步执行resolve
    setTimeout(function(){
      if(self.status === 'pending'){
        self.status = 'resolved'
        self.data = value
        // for(let i=0; i < self.onResolvedCallback.length; i++){
        //   self.onResolvedCallback[i](value)
        // }
      }
    })
  }

  function reject(reason){
    setTimeout(function(){
      if(self.status === 'pending'){
        self.status = 'rejected'
        self.data = reason
        for(let i=0; i<self.onRejectedCallback.length; i++){
          self.onRejectedCallback[i](reason)
        }
      }
    })
  }

  try {
    executor(resolve, reject)
  }catch(e){
    reject(e)
  }
}

// Promise.resolve, 对不同类型x值进行处理
function resolvePromise(promise2, x, resolve, reject){
  let then
  // 避免重复调用
  let theCalledOrThrow = false

  if(promise2 === x){
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }

  if(x instanceof Promise){
    if(x.status === 'pending'){
      x.then(function(v){
        resolvePromise(promise2, v, resolve, reject)
      }, reject)
    }else{
      x.then(resolve, reject)
    }
    return 
  }

  if((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))){
    try {
      then = x.then
      if(typeof then === 'function'){
        then.call(x, function rs(y){
          if(theCalledOrThrow) return
          thenCalledOrThrow = true
          return resolvePromise(promise2, y, resolve, reject)
        },
        function rj(r){
          if(theCalledOrThrow) return
          theCalledOrThrow = true
          return reject(r)
        }
        )
      }else{
        resolve(x)
      }
    }catch(e){
      if(theCalledOrThrow) return
      theCalledOrThrow = true
      reject(e)
    }
  }else{
    resolve(x)
  }
}

Promise.prototype.then = function(onResolved, onRejected){
  let self = this
  // 返回的新的Promise值
  let promise2

  onResolved = typeof onResolved === 'function' ? onResolved : function(v){
    return v
  }

  onRejected = typeof onRejected === 'function' ? onRejected : function(r){
    // 直接抛出错误
    throw r
  }

  if(self.status === 'resolved'){
    return promise2 = new Promise(function(resolve, reject){
      // REVIEW 异步执行
      setTimeout(function(){
        try {
          let x = onResolved(self.data)
          // REVIEW 异步拿到promise2的值
          // FIXME 此时拿到的Promise2值什么
          console.log('Promise2==============>', promise2)
          resolvePromise(promise2, x, resolve, reject)
        }catch(reason){
          reject(reason)
        }
      })
    })
  }

  if(self.status === 'rejected'){
    return promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        try {
          let x = onRejected(self.data)
          resolvePromise(promise2, x, resolve, reject)
        }catch(e){
          reject(e)
        }
      })
    })
  }

  if(self.status === 'pending'){
    return promise2 = new Promise(function(resolve, reject){
      self.onResolvedCallback.push(function(value){
        try{
          let x = onResolved(value)
          resolvePromise(promise2, x, resolve, reject)
        }catch(r){
          reject(r)
        }
      })

      self.onRejectedCallback.push(function(reason){
        try {
          let x = onRejected(reason)
          resolvePromise(promise2, x, resolve, reject)
        }catch(r){
          reject(r)
        }
      })
    })
  }
}

Promise.prototype.catch = function(onRejected){
  return this.then(null, onRejected)
}

Promise.deferred = Promise.defer = function(){
  let dfd = {}
  dfd.promise = new Promise(function(resolve, reject){
    dfd.resolve = resolve
    dfd.reject = reject
  })

  return dfd
}