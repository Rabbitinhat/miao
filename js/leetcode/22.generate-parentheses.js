/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n, l = 0, r = 0, pares = "", result = []) {
  if (l === n && r === n) {
    if(result.indexOf(pares) === -1)result.push(pares);
  } else {
    if(l < n){
    pares += "(";
    l++;
    generateParenthesis(n, l, r, pares, result);
    // * 还原pares传入时的状态
    pares = pares.slice(0, pares.length-1)
    l--
    }
    if(l > r){
      pares += ")";
      r++;
      generateParenthesis(n, l, r, pares, result);
    }
  }
  return result;
};

