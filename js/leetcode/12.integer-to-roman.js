/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = ""
  if(num >= 1000){
    result += "M".repeat(Math.floor(num / 1000))
    num = num % 1000
  }
  if(num >= 900){
    result += "CM".repeat(Math.floor(num / 900))
    num = num % 900
  }
  if(num >= 500){
    result += "D".repeat(Math.floor(num / 500))
    num = num % 500
  }
  if(num >= 400){
    result += "CD".repeat(Math.floor(num / 400))
    num = num % 400
  }
  if(num >= 100){
    result += "C".repeat(Math.floor(num / 100))
    num = num % 100
  }
  if(num >= 90){
    result += "XC".repeat(Math.floor(num / 90))
    num = num % 90
  }
  if(num >= 50){
    result += "L".repeat(Math.floor(num / 50))
    num = num % 50
  }
  if(num >= 40){
    result += "XL".repeat(Math.floor(num / 40))
    num = num % 40
  }
  if(num >= 10){
    result += "X".repeat(Math.floor(num / 10))
    num = num % 10
  }
  if(num >= 9){
    result += "IX".repeat(Math.floor(num / 9))
    num = num % 9
  }
  if(num >= 5){
    result += "V".repeat(Math.floor(num / 5))
    num = num % 5
  }
  if(num >= 4){
    result += "IV".repeat(Math.floor(num / 4))
    num = num % 4
  }
  if(num >= 1){
    result += "I".repeat(Math.floor(num / 1))
  }
  return result
};


