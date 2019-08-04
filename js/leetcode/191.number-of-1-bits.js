/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // var n = n>>>0
  let count = 0;
  // * n & (n - 1) >= 0 => n & true
  while (n) {
    count++;
    n = n & (n - 1)
  }
  return count
};
