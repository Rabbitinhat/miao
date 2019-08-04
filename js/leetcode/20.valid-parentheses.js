/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
      ")" : "(",
      "}" : "{",
      "]" : "["
    }
    let stack = []
    for(let i=0; i<s.length; i++){
      if(s[i] === '(' || s[i] === "[" || s[i] === "{"){
        stack.push(s[i])
      }else{
        if(stack.pop() === map(s[i])) coutinue
        else return false
      }
    }
    return stack.length === 0 ? true : false
};

