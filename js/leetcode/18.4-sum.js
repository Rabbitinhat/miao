/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let j = 0; j < nums.length - 2; j++) {
    if (j == 0 || nums[j] !== nums[j - 1]) {
      for (let i = j+1; i < nums.length - 1; i++) {
        if (i === j+1 || nums[i] !== nums[i - 1]) {
          let m = i + 1;
          let n = nums.length - 1;
          while (m < n) {
            if (nums[m] + nums[n] + nums[i] + nums[j] === target) {
              result.push([nums[j], nums[i], nums[m], nums[n]]);
              while (nums[m] === nums[m + 1] && m + 1 < n) {
                m++;
              }
              while (nums[n] === nums[n - 1] && n - 1 > m) {
                n--;
              }
              m++;
              n--;
            } else if (nums[m] + nums[n] + nums[i] + nums[j] > target) n--;
            else if (nums[m] + nums[n] + nums[i] + nums[j] < target) m++;
          }
        }
      }
    }
  }
  return result;
};

