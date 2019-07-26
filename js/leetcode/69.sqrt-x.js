/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // * 牛顿迭代法
  let n = 2
  for(let i=0; i<20; i++){
    let temp = n
    n = n - (n * n - x) / (2 * n)
    if(temp === n) break
  }
  return Math.floor(n)
};

