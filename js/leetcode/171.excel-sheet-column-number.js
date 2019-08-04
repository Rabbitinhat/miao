
/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0
    for(let i=0; i<s.length; i++){
      let code = s[i].charCodeAt() - 64
      result = result * 26 + code
    }
    return result
};
