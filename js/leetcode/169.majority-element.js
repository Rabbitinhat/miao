/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // * 投票算法: 将元素的出现次数相减, 最后次数仍然>0的为所求的值
  // * count: node记录出现的数组元素, times记录出现次数;
  let count = {
    node: nums[0],
    times: 1
  }
  for(let i=1; i<nums.length; i++){
    // * 遍历数组, 如果当前数组元素和count中保存的数组元素不同
    if(count.node !== nums[i]){
      // * 如果当前times值=0, 则将node替换为当前数组元素
      if(count.times <= 0){
        count.node = nums[i]
      }else{
        // * 如果times>=1 则抵消一次
        count.times--
      }
    }else{
      // * 如果相同，time加一
      count.times++
    }
  }
  // * 返回最后count中保存的数组元素
  return count.node
};
