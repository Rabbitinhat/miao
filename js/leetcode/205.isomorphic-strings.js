/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // '"32767"\n"65535"'
  let result = {}
  for(let i=0; i<s.length; i++){
    if(result[s[i]]){
      if(result[s[i]] !== t[i]){
        return false
      }
    }else{
      result[s[i]] = t[i]
    }
  }
  return true
};

