/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let odd = 1
  for(let even = 0; even < A.length - 1; even += 2){
    if(A[even] % 2 === 1){
      while(A[odd] % 2 === 1 && odd < A.length - 1){
        odd += 2
      }
      let temp = A[even]
      A[even] = A[odd]
      A[odd] = temp
    }
  }
  return A
}

sortArrayByParityII([648,831,560,986,192,424,997,829,897,843])
// @lc code=end

