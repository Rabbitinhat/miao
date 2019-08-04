/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if(nums.length === 1) return nums[0]
  if(nums.length === 2) return nums[0] > nums[1] ? nums[1] : nums[0]
    let start = 0
    let end = nums.length - 1
    let mid
    while(start <= end){
      mid = start + Math.ceil((end - start) / 2)
      if(mid === 0) return nums[0]
      if(nums[mid] < nums[mid-1]) return nums[mid]
      if(nums[mid] > nums[end]) start = mid + 1
      if(nums[mid] <= nums[end]) end = mid - 1
    }
};

