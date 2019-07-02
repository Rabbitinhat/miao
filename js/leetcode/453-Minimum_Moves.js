// * 相当于每次数组中每个数字都+1, 加+1后, 有一个数字-1
// * 相当于每次数组中有一个数字-1
// * 相加次数也就等于数组中其余数字和最小数字的差的和
var minMoves = function(nums) {
  // * 排序数组
  counter = 0
  nums = nums.sort((a, b)=>(a-b))
  for(let i=1; i<nums.length; i++){
    counter += nums[i] - nums[0]
  }
  return counter
};

console.log(minMoves([-2147483648,-1]))