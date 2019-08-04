/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b)
    let mid = nums[0 + Math.floor((nums.length - 1) / 2)]
    let sum = 0
    for(let i=0, len = nums.length; i<len; i++){
      sum += Math.abs(mid - nums[i])
    }
    return sum
};

