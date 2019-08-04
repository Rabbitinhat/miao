/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ""
  for(let i=0; i < strs[0].length; i++){
    let pre = strt[0][i]
    for(let j=0; j < strs.length; j++){
      if(strs[j][i] !== pre || i >= strs[j].length){
        return strs[0].slice(0, i)
      }
    }
  }
  return strs[0]
};

