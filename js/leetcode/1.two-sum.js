/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()  
  for(let index in nums){
    map.set(nums[index], index)
  }
  for(let i=0; i<nums.length; i++){
    let a = map.get(target - nums[i])
    if(a !== undefined && parseInt(a) != i){
      return (a > i ? [i, parseInt(a)] : [parseInt(a), i])
    }
  }
};
