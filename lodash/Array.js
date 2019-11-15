function reverse(array){
  let len = array.length-1
  while(len--){
    array.push(array[len])
  }
  array = array.slice((array.length)/2)
  console.log(array)
  return array
}

reverse([1, 2, 3])

/**
 * 返回value应位于array中的最小位置(升序排列)
 * @param {number} array 
 * @param {number} value 
 */
function sortedIndex(array, value){
  for(let i=0; i<array.length; i++){
    if(value <= array[i]){
      return i
    }
  }
  return array.length
}

console.log(sortedIndex([1, 2, 2, 2, 2, 2, 3], 0))


/**
 * 返回参数中所有数组的独特的值(去掉重复项)组成的数组
 * @param  {...any} arrays 
 */
function union(...arrays){
  console.log(arrays)
  let result = []
  let newAry = []
  let cache = {}
  // flat
  arrays.forEach((item) => {
    newAry = newAry.concat(item)
  })
  
  newAry.forEach((item) => {
    if(!cache[item]){
      cache[item] = 1
      result.push(item)
    }
  })
  return result
}

console.log(union([2], [1, 2]))
console.log(union([2], [1,2], [3,4]))


// iteratee

function unionBy(...args){
  console.log(arrays)
  let method = args[args.length-1]
  let result = []
  let newAry = []
  let cache = {}
  // flat
  arrays.forEach((item) => {
    newAry = newAry.concat(item)
  })
  
  newAry.forEach((item) => {
    item = method(item)
    if(!cache[item]){
      cache[item] = 1
      result.push(item)
    }
  })
  return result
}
