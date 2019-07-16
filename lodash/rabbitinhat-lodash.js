var rabbitinhat = function(){
  // ! Array
  function compact(ary){
    let result = []
    for(let element of ary){
      if(element) result.push(element)
    }
    return result
  }

  function concat(ary, ...values){
    let result = []
    // * 先将数组中保存的元素放入新数组中
    for(let element of ary){
      result.push(element)
    }
    // * 对参数数组中的值进行判断
    for(let element of values){
      // * 如果参数为数组
      if(Array.isArray(element)){
        // * 遍历数组元素, 将其push进result数组中
        for(let e of element){
          result.push(e)
        }}
      else{
          // * 不为数组则直接push
          result.push(element)
        }
      }
      return result
    }

    function difference(ary, ...values){
      let result = []
      // * result 作为ary的副本
      result = ary.slice()
      for(let ary of values){
        // * 每次循环都对result重新赋值, 过滤掉额外数组中出现的元素
        result = result.filter(x => binarySearch(x, ary) === -1)
      }
      return result
    }
    // * 二分查找
    function binarySearch(value, ary){
      let start = 0
      let end = ary.length - 1
      while(start <= end){
        let middle = start + Math.floor((end - start) / 2)
        if(ary[middle] > value) end = middle - 1
        if(ary[middle] < value) start = middle + 1
        if(ary[middle] === value) return middle
      }
      return -1
    }
    // * 一种函数, 但并未具体实现; 在元素进行相等性比较时, 会使用该函数进行判断
    // function SameValueZero(a, b){
    //   if(typeof x !== typeof y) return false
    //   if(typeof x === "number"){
    //     if(isNaN(x) && isNaN(y)) return true
    //     if(x !== y) return false
    //     return true
    //   }
    //   return SameValueNonNumber(x, y)
    // }
    // function SameValueNonNumber(x, y){
      
    // }

    function differenceBy(ary, values, comparator){
      let result = []
      result = ary.slice()
      comparator = x => eval(comparator)
      values.forEach(x => comparator)
      result = result.filter(x => x in values)
      return result
    }

    // * flatten flattens array a single level deep
    // * _.flatten(array)
    function flatten(array){
      return [].concat(...array)
    }

    // * flattenDeep 递归展平数组
    // * _.flatten(array)
    function flattenDeep(ary){
      let result = []
      for(let element of ary){
        if(Array.isArray(element)){
          let flatten = flattenDeep(element)
          result.push(...flatten)
        }else{
          result.push(element)
        }
      }
      return result
    }

    // * flattenDepth 展平给定深度
    // * _.flattenDepth(array, [depth=1])
    function flattenDepth(array, depth=1){
      for(let i=0; i<depth; i++){
        array = flatten(array)
      }
      return array
    }
    // ! Collection

    // * predicate对collection中任何值返回true, 中断遍历, some返回true
    // * _.some(collection, [predicate=_.identity])
    function some(ary, predicate){
      // ! eval
      predicate = eval(predicate)
      for(var i=0; i<ary.length; i++){
        if(predicate(ary[i], i, ary)) return true
      }
      return false
    }

    // ! Function

    // * meoize 记忆f执行后的值, 调用同样参数时, 返回存储在缓存中的值
    // * _.memoize(func, [resolver])
    function memoize(func){
      let cache = {}
      return function(arg){
        return cache[arg] ? cache[arg] : cache[arg] = func(arg)
      }
    }

    // * 使用thisArg作为this绑定, partials作为参数, 调用函数func
    // * _.bind(func, thisArg, [partials])
    function bind(func, thisArg, ...partials){
      return function(...args){
        return this.func(partials, args)
      }
    }

    // * 创建一个函数使用相反的arguments调用func
    // * _.flip(func)
    function flip(func){
      return function(...args){
        return func(...args.reverse())
      }
    }

    // * 返回调用predicate的相反结果
    // * _.negate(predicate)
    function negate(predicate){
      return function(args){
        return !predicate(args)
      }
    }

    // * 函数只接受一个参数, 忽略多余参数
    // * _.unary(func)
    function unary(fn){
      return function(...args){
        return fn(arguments[0])
      }
    }


  return {
    // * Array
    compact,
    concat,
    difference,
    differenceBy,
    flatten,
    flattenDeep,
    flattenDepth,

    // * Collection
    some,

    // * Function
    memoize,
    bind,
    flip,
    negate,
    unary,
  }
}()

// console.log(rabbitinhat.compact([0, 1, false, 2, '', 3]))
// var array = [1]
// console.log(rabbitinhat.concat(array, 2, [3], [[4]]))
// console.log(rabbitinhat.difference([1,2,3,4,5,6,7,8],[1,3],[4,8],[6]))
// console.log(rabbitinhat.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'))