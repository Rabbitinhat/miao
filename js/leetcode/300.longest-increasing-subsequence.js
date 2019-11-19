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
  if(nums.length === 1) return 1
  if(nums.length === 0) return 0

  let status = new Array(nums.length)
  let max = 0

  for(let i=0; i<nums.length; i++){
    status[i] = 1
    if(max < status[i]){
      max = status[i]
    }
    for(let j=i-1; j>=0; j--){
      if(nums[i] > nums[j] && status[j] + 1 > status[i]){
        status[i] = status[j] + 1
        max = Math.max(max, status[i])
      }
    }
  }
  return max
};

