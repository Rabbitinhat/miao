/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === "0" || num2 === "0") return "0"
  let result = ""
  for(let i=num2.length-1, j=""; i>=0; i--, j = j + "0"){
      let sum = multi(num1, num2[i])
      result = add(sum + j, result)
    }
  return result
};

// * 计算一个乘数和另一个乘数的1个位相乘
function multi(num1, num2){
  let result = 0
  let sum = ""
  for(let i=num1.length-1; i>=0; i--){
    result += (num1[i] * num2)
    sum = result % 10 + "" + sum
    result = (result - result % 10) / 10
  }
  if(result){
    sum = result + "" + sum
  }
  return sum
}

// * 两个整数字符串相加
function add(num1, num2){
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
}

// console.log(multi("23", "2"))
// console.log(add("23", "83"))
// console.log(multiply("23", "83"))
