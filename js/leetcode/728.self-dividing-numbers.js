/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let result = []
  for(let i=left; i<=right; i++){
      let sign = 1
      let num = i
      while(num>0){
          let bit = (num % 10)
          if(bit === 0){
              sign = 0
              break
          }
          if(i % bit !== 0){
              sign = 0
              break
          }
          num = (num - bit) / 10
      }
      if(sign){
          result.push(i)
      }
  }
  return result
};

