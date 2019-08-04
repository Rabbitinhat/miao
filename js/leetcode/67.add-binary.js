/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = 0
  let sum = ""
  for(let i= a.length-1, j=b.length-1; (i>=0 || j>=0); i--, j--){
    if(j < 0){
      result += +a[i]
    }else if(i < 0){
      result += +b[j]
    }else{
      result += +a[i] + (+b[j])
    }
    sum = result % 2+ sum
    result = (result - result % 2) / 2
  }
  if(result){
    sum = result + sum
  }
  return sum
};

