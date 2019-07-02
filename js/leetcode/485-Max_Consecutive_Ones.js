//!判断数组元素连续为1的最大长度
var findMaxConsecutiveOnes = function(nums) {
  var max = 0
  var counter = 0
  for(let i=0, len=nums.length; i<len; i++){
    //*当数组元素为1时, counter计数
    if(nums[i] === 1){
      counter++
    }else{
      //*数组元素为0时, 将max和counter进行对比, max重置为最大值; counter重置为0
      if(max < counter) max = counter
      counter = 0
    }
  }
  //*遍历数组后, 再将counter和max进行比较一次(数组最后一位为1时, 循环内不会进行比较)
  if(max < counter) max = counter
  return max
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))

var findMaxConsecutiveOnes = function(nums) {
  let max = 0
  // *双指针 i指向1时, 不移动指针; i指向0时, 移动指针; j正常移动, j-i就为1的数量
  for(var i=0, j=0; j<nums.length; j++){
    // *i指向1时, j指向0; 连续排列的1结束, 通过和max进行对比, 保留更大值
    if(nums[i] === 1 && nums[j] === 0){
      if(max < (j-i)) max = (j-i)
      //*将i置为j的位置(之前i为连续1的开头位置)
      i = j
    }
    //*i指向0时, 移动i
    if(nums[i] === 0){
      i++
    }
    //*其他情况下(i指向1, 且j也指向1) i保持不变
  }
  //*循环结束时, j为nums.length, 判断数组最后一个元素是否为1(为1时, 循环结束时不会计算该1的长度)
  if(nums[j-1] === 1){
    if(max < (j-i)) max = (j - i)
  }
  // *返回最大连续1的长度
  return max
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))