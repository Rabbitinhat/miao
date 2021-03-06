  // Promise

  class myPromise{
    constructor(fn){
      // 为了下文创建的函数, 保存this值
      let self = this
      self.status = 'pending'
      self.data = undefined
      // REVIEW ?
      // resolve callback 集合
      self.onResolvedCallback = []
      // reject callback 集合
      self.onRejectedCallback = []
      
      function resolve(value){
        if(self.status === 'pending'){
          self.status = 'resolved'
          self.data = value
          // 执行相应回调
          for(let i = 0; i<self.onResolvedCallback.length; i++){
            self.onResolvedCallback[i](value)
          }
        }
      }
  
      function reject(reason){
        if(self.status === 'pending'){
          self.status = 'rejected'
          self.data = value
          // REVIEW 在执行then语句时, 当前Promise仍未pending状态时, 存入cache中的内容, 对调用then的Promise的数据进行的相应处理
          for(let i=0; i<self.onRejectedCallback.length; i++){
            self.onRejectedCallback[i](value)
          }
        }
      }
      // 执行callback
      try{
        fn(resolve, reject)
      }catch(e){
        reject(e)
      }
    }
  
    then(onResolved, onRejected){
      let self = this
      let promise2
  
      // onResolved 如果省略则直接忽略
      onResolved = typeof onResolved === 'function' ? onResolved : function(val){
        // myPromise.resolve方法实现
        return val}
      onRejected = typeof onRejected === 'function' ? onRejected : function(reason){
        // myPromise.reject
        return reason
      }
  
      // 三种可能状态
      if(self.status === 'resolved'){
        return promise2 = new myPromise(function(resolve, reject){
          try {
            let x = onResolved(self.data)
            if(x instanceof myPromise){
              // x为myPromise时, 
              x.then(resolve, reject)
            }
            //x为其他值时 
            resolve(x)
          }catch(e){
            reject(e)
          }
        })
      }
  
      if(self.status === 'rejected'){
        return promise2 = new myPromise(function(resolve, reject){
          try{
            let x = onRejected(self.data)
            if(x instanceof myPromise){
              x.then(resolve, reject)
            }
            // REVIEW reject
            reject(x)
          }catch(e){
            reject(e)
          }
        })
      }
  
      if(self.status === 'pending'){
        return promise2 = new myPromise(function(resolve, reject){
          try{
            self.onResolvedCallback.push(function(value){
              try{
                let x = onResolved(self.data)
                if(x instanceof myPromise){
                  x.then(resolve, reject)
                }
                resolve(x)
              }catch(e){
                reject(e)
              }
            })
  
            self.onRejectedCallback.push(function(value){
              try{
                let x = onRejected(self.data)
                if(x instanceof myPromise){
                  x.then(resolve, reject)
                }
                reject(x)
              }catch(e){
                reject(e)
              }
            })
          }catch(e){
            reject(e)
          }
        })
      }
    }
  
    catch(onRejected){
      let self = this
      return self.then(null, onRejected)
    }
  }  


let p = new myPromise((resolve, reject) => {
  return resolve(4)
})
console.log(p)
let p2 = p.then((data) => {
  console.log(data)
  return data
})


// onResolvedCallback
let p3 = p2.then((data) => {
  return new myPromise((resolve, reject) => {
    return new myPromise((resolve, reject) => {
      return resolve(data)
    })
  })
})

p3.then(data => {console.log(data)})

// Promise.resolve
function resolvePromise(promise2, x, resolve, reject){
  let then
  let thenCallOrThrow = false

  // promise2 ? x ?
  if(promise2 === x){
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }

  if(x instanceof Promise){
    if(x.status === 'pending'){
      x.then(function(value){
        resolvePromise(promise2, value, resolve, reject)
      }, reject)
    }else{
      x.then(resolve, reject)
    }
  }

  if((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))){
    try {
      then = x.then
      if(typeof then === 'function'){
        then.call(x, function rs(y){
          // REVIEW thenCalledOrThrow 避免then的重复调用
          if(thenCalledOrThrow) return
          thenCallOrThrow = true
          return resolvePromise(promise2, y, resolve, reject)
        }, function rj(r){
          if(thenCalledOrThrow) return
          thenCallOrThrow = true
          return reject(r)
        })
      }else{
        resolve(x)
      }
    }catch(e){
      reject(e)
    }
  }else{
    resolve(x)
  }
}
