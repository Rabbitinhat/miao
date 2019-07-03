var singleNumber = function(nums) {
    let result = 0
    // * 由于 a ^ a == 0 ,b ^ 0 === b 所以对nums的所有元素进行异或操作, 只为一个的元素就为最后结果
    for(let i=0; i<nums.length; i++){
      result ^= nums[i]
    }
    return result
};


// * 映射
var singleNumber = function(nums){
  let count = {}
  let result = []
  for(let i of nums){
    // * 记录出现过的元素
    if(count[i]){
      count[i]++
    }else{
      count[i] = 1
    }
  }
  // * 有顺序的序列使用 of 来迭代; 无顺序则使用 in
  for(let j in count){
    if(count[j] === 1) result.push(j)
  }
  return result
}