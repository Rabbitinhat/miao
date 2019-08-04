/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 1) return nums[0] === target ? 0 : -1
    let start = 0
    let end = nums.length-1
    let mid
    while(start <= end){
      mid = start + Math.floor((end - start) / 2)
      if(nums[mid] === target) return mid
      if((target < nums[mid] && nums[mid] < nums[end]) || (target < nums[mid] && target > nums[end]) || (nums[mid] < nums[end] && target > nums[end])){
        end = mid - 1
        continue
      }
      if((target > nums[mid] && nums[mid] > nums[end]) || (target < nums[mid] && nums[mid] < nums[end]) || (target < nums[end] && nums[mid] > nums[end])){
        start = mid + 1
        continue
      }
      if(target === nums[end]){
        return end
      }
      if(target === nums[start]){
        return start
      }
      return -1
    }
    return -1
};

console.log(search([1, 2, 3, 4, 5], 4))
