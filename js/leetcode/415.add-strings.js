/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = 0
  let sum = ""
  for(let i= num1.length-1, j=num2.length-1; (i>=0 || j>=0); i--, j--){
    if(j < 0){
      result += +num1[i]
    }else if(i < 0){
      result += +num2[j]
    }else{
      result += +num1[i] + (+num2[j])
    }
    sum = result % 10 + sum
    result = (result - result % 10) / 10
  }
  if(result){
    sum = result + sum
  }
  return sum
};


// // * 两个整数字符串相加
// function add(num1, num2){
//   let result = 0
//   let sum = ""
//   for(let i= num1.length-1, j=num2.length-1; (i>=0 || j>=0); i--, j--){
//     if(j < 0){
//       result += +num1[i]
//     }else if(i < 0){
//       result += +num2[j]
//     }else{
//       result += +num1[i] + (+num2[j])
//     }
//     sum = result % 10 + sum
//     result = (result - result % 10) / 10
//   }
//   if(result){
//     sum = result + sum
//   }
//   return sum
// }
