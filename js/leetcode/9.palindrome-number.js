/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false  
  let reverse = 0
  let prev = x
    while(prev>0){
      reverse = reverse * 10 + (prev % 10)
      prev = (prev - prev % 10) / 10
    }
    return reverse === x
};

