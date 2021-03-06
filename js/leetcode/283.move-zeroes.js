/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let tail = nums.length-1
    for(let i=0; i<tail;){
      if(nums[i] === 0 && nums[tail] !== 0){
        nums[i] = nums[tail]
        nums[tail] = 0
        tail--
      }else if(nums[i] === 0 && nums[tail] === 0){
        tail--
      }else{
        i++
      }
    }
};

