/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]
    // * 保存每个位置的最优解(最大可能金钱数)
    let status = [nums[0], nums[1]]
    // * 保存所有状态中的最大值
    let maxSta = Math.max(status[0], status[1])
    let max = status[0]
    for(let i=2; i<nums.length; i++){
      // * 对每个安全位置(距离>1)和当前位置的金钱和进行比较, 找出最大值
      for(let j=0; j<i-1; j++){
        max = Math.max(max, status[j] + nums[i])
      }
      // * 保存最大值
      status[i] = max
      maxSta = Math.max(maxSta, max)
    }
    return maxSta
};
