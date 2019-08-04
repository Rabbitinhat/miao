/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let m = i + 1;
      let n = nums.length - 1;
      while (m < n) {
        if (nums[m] + nums[n] + nums[i] === 0) {
          result.push([nums[i], nums[m], nums[n]]);
          while(nums[m] === nums[m + 1] && m + 1 < n){
            m++
          }
          while(nums[n] === nums[n - 1] && n - 1 > m){
            n--
          }
          m++
          n--
        } else if (nums[m] + nums[n] + nums[i] > 0) n--;
        else if (nums[m] + nums[n] + nums[i] < 0) m++;
      }
    }
  }
  return result;
};

