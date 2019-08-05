/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if(nums.length === 0) return 0
  let status = [1]
  let maxSta = 1
  for(let i = 1; i<nums.length; i++){
    let max = status[0]
    for(let j = 0; j<i; j++){
      if(nums[i] > nums[j]){
        max = Math.max(max, status[j]+1)
      }
    }
    status[i] = max
    maxSta = Math.max(max, maxSta)
  }
  return maxSta
};

