/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return null
    let status = [nums[0]]
    let maxSta = nums[0]
    for(let i = 1; i<nums.length; i++){
      let max = nums[i]
      let now = nums[i]
      for(let j=i-1; j >= 0; j--){
        now = now + nums[j]
        max = Math.max(max, now)
      }
      status[i] = max
      maxSta = Math.max(max, maxSta)
    }
    return maxSta
};

