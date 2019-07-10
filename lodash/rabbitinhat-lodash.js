var rabbitinhat = function(){
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

    // * 多输入参数会保存在arguments中
    function difference(ary, ...values){
      let result = []
      // * 将ary中所有元素
      result = ary.slice()
      for(let ary of values){
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
  return {
    compact,
    concat,
    difference,
  }
}()

// console.log(rabbitinhat.compact([0, 1, false, 2, '', 3]))
// var array = [1]
// console.log(rabbitinhat.concat(array, 2, [3], [[4]]))
console.log(rabbitinhat.difference([1,2,3,4,5,6,7,8],[1,3],[4,8],[6]))