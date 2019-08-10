// @ts-check
var rabbitinhat = function(){
  // SECTION  Array

  /**
   * 将array分割为size长度的数组, 如果数组长度无法完整分割为size大小, 最后一个数组存储剩余的元素
   * @param {array} array 
   * @param {number} size
   * @return `array` 
   */
  function chunk(array, size=1){
    let result = []
    for(var i=0; i+size<array.length; i+=size){
      result.push(array.slice(i, i+size))
    }
    result.push(array.slice(i))
    return result
  }

  /**
   * 
   * @param {array} ary
   * @return `array` 
   */
  function compact(ary){
    let result = []
    for(let element of ary){
      if(element) result.push(element)
    }
    return result
  }
/**
 * 
 * @param {Array} ary 
 * @param  {...any} values 
 */
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

    /**
     * 
     * @param {Array} ary 
     * @param  {...any} values 
     */
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
    /**
     * 
     * @param {Number} value 
     * @param {Array} ary 
     */
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

    /**
     * 
     * @param {Array} ary 
     * @param {Object} values 
     * @param {String} comparator 
     */
    function differenceBy(ary, values, comparator){
      let result = []
      result = ary.slice()
      // FIXME 
      comparator = x => eval(comparator)
      values.forEach(x => comparator)
      result = result.filter(x => x in values)
      return result
    }

    // * flatten flattens array a single level deep
    // * _.flatten(array)
    /**
     * 
     * @param {Array} array 
     */
    function flatten(array){
      return [].concat(...array)
    }

    // * flattenDeep 递归展平数组
    // * _.flatten(array)
    /**
     * 
     * @param {Array} ary 
     */
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
    /**
     * 
     * @param {Array} array 
     * @param {Number} depth 
     */
    function flattenDepth(array, depth=1){
      for(let i=0; i<depth; i++){
        array = flatten(array)
      }
      return array
    }

    /**
     * 
     * @param {array[any]} array 
     * @param {any} value 
     * @param {number} start 
     * @param {number} end
     */
    function fill(array, value, start=0, end=array.length){
      for(let i=start; i<end; i++){
        array[i] = value
      }
      return array
    }

    /**
     * Gets the first element of `array`
     * @param {array} array
     * @returns {*} Returns the first element of `array`
     */
    function head(array){
      return array[0]
    }

    /**
     * 
     * @param {array[any]} array 
     * @param {number} value 
     * @param {number} fromIndex 
     */
    function indexOf(array, value, fromIndex=0){
      if(fromIndex >= 0){
        for(let i=fromIndex; i<array.length; i++){
          if(array[i] === value) return i
        }
        return -1
      }else{
        // FIXME 
        for(let i=fromIndex; i<array.length; i--){
          let index = array.length - 1 - i
          if(array[index] === value) return index
        }
        return -1
      }
    }
    // SECTION Collection

    /**
     * 
     * @param {array} ary 
     * @param {function} predicate 
     * @return boolean
     */
    function every(ary, predicate){
      return ary.reduce((result, x, item, val, ary)=>{
        return result && predicate(item, val, ary)
      }, true)
    }

    /**
     * 调用func时最多传入n个参数, 忽略额外的参数
     * @param {function} func 
     * @param {number} n 
     * @return any
     */
    function ary(func, n=func.length){
      return function(...args){
        return func(...args.slice(0, n))
      }
    }

    /**
     * predicate对ary中任何元素返回true, every返回true; 如果predicate对ary中的元素返回false, 停止继续运算, 返回false
     * @param {array[]} ary 
     * @param {string} predicate
     * @return boolean
     */
    function every(ary, predicate){
      let predicate_f = eval(predicate)
      return !some(ary, negate(predicate_f))
    }

    /**
     * 遍历collection中每个元素, 对其调用iteratee, 返回调用结果组成的数组
     * @param {object | array} collection 
     * @param {function} iteratee
     * @return {array} 
     */
    function map(collection, iteratee){
      let result = []
      for(let ele in collection){
        result.push(iteratee(collection[ele]))
      }
      return result
    }

    /**
     * 
     * @param {array} ary 
     * @param {function} predicate
     * @return boolean
     */
    function some(ary, predicate){
      return ary.reduce((result, x, item, val, ary)=>{
        return result || predicate(item, val, ary)
      }, false)
    }

    // * _.some(collection, [predicate=_.identity])
    /**
     * predicate对collection中任何值返回true, 中断遍历, some返回true
     * @param {Array} ary 
     * @param {string} predicate
     * @return boolean
     */
    function some(ary, predicate){
      // ! eval
      let predicate_f = eval(predicate)
      for(var i=0; i<ary.length; i++){
        if(predicate_f(ary[i], i, ary)) return true
      }
      return false
    }



    // SECTION Function

    /**
     * 调用(called)`func`n次或更多时, 才开始调用(invoke)`func`
     * @param {number} n 
     * @param {function} func 
     * the oppsite of _.before
     */
    function after(n, func){
      let times
      return function(...args){
        times++
        if(times >= n) return func(...args)
      }
    }

    /**
     * meoize 记忆f执行后的值, 调用同样参数时, 返回存储在缓存中的值
     * @param {Function} func 
     */
    function memoize(func){
      let cache = {}
      return function(arg){
        return cache[arg] ? cache[arg] : cache[arg] = func(arg)
      }
    }

    /**
     * 当func调用超过n(>=n)次时, 不再重新调用func
     * @param {number} n 
     * @param {function} func
     * opposite of _.after
     */
    function before(n, func){
      let times = 0
      let result
      return function(...args){
        times++
        if(times < n) return result = func(...args)
        return result
      }
    }

    /**
     * 使用thisArg作为this绑定, 调用函数func, 传入多个参数(保存在partials中)
     * @param {Function} func 
     * @param {Array} thisArg 
     * @param  {...any} partials 
     */
    function bind(func, thisArg, ...partials){
      return function(...args){
        return this.func(partials, args)
      }
    }

    /**
     * 创建一个函数使用相反的arguments调用func
     * @param {Function} func 
     * @return any
     */
    function flip(func){
      return function(...args){
        return func(...args.reverse())
      }
    }

    /**
     * 返回调用predicate的相反结果
     * @param {function} predicate
     * @return function 
     */
    function negate(predicate){
      return function(args){
        return !predicate(args)
      }
    }

    /**
     * * 创建将数组作为参数的函数
     * @param {function} func
     * @return `function` 
     * not use f(...args)
     */
    function spread(func){
      return function(ary){
        return func.apply(null, ary)
      }
    }

    /**
     * func只接受一个参数, 忽略多余参数
     * @param {Function} fn 
     */
    function unary(fn){
      return function(...args){
        return fn(arguments[0])
      }
    }

    // SECTION Util

    /**
     * 传入属性值, 返回一个函数, 参数为object, 返回值为object的属性值p 
     * @param {string} propertyName
     * @return {*}
     */
    function property(propertyName){
      return function(obj){
        return obj[propertyName]
      }
    }


  return {
    // * Array
    chunk,
    compact,
    concat,
    difference,
    differenceBy,

    fill,

    flatten,
    flattenDeep,
    flattenDepth,

    head,
    indexOf,

    // * Collection
    every,

    some,

    // * Function
    after,
    ary,
    before,
    memoize,
    bind,
    flip,
    negate,
    spread,
    unary,
  }
}()

// console.log(rabbitinhat.compact([0, 1, false, 2, '', 3]))
// var array = [1]
// console.log(rabbitinhat.concat(array, 2, [3], [[4]]))
// console.log(rabbitinhat.difference([1,2,3,4,5,6,7,8],[1,3],[4,8],[6]))
// console.log(rabbitinhat.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'))