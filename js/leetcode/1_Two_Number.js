var twoSum = function(nums, target) {
  // * 存储数字的位置
  let show = {}
  for(let i=0; i<nums.length; i++){
    // * 如果target减去当前数组值的结果存在于show中
    // * 表示 找到正确值, 返回结果
    let other = target - nums[i]
    if(other in show){
      // * 
      console.log(show)
      return [show[other], i]
    }else{
      // * 不存在则保存当前数组值
      show[nums[i]] = i
    }
  }
};

console.log(twoSum([11,7,2,15], 13))