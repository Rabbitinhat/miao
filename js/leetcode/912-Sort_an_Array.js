var sortArray = function(nums) {
  if(nums.length < 2){
    return nums.slice()
  }
    let mid = nums.length >>> 1
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)

    left = sortArray(left)
    right = sortArray(right)

    let result = []
    let j = 0
    let i = 0
    while(i < left.length && j < right.length){
      // * 比较大小, 推入较小值, 同时
      result.push(left[i] < right[j] ? left[i++] : right[j++])
    }
    while(i < left.length){
      result.push(left[i++])
    }
    while(j < right.length){
      result.push(right[j++])
    }
    return result
};

console.log(sortArray([5,2,3,1]))