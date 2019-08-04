/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return binary(nums, 0, nums.length-1, target)
  
  function binary(ary, start, end, target){
    if(start > end){
      return -1
    }
    let mid = start + Math.floor((end - start) / 2)
    if(ary[mid] === target) return mid
    else if(target > ary[mid]){
     return binary(ary, mid + 1, end, target)
    }else if(target < ary[mid]){
      return binary(ary, start, mid-1, target)
    }
  }
};
