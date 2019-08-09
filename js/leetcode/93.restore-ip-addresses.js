/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s, result = [], parts = []) {
  if(parts.length === 3 && isIPpart(s)){
    result.push(parts.join(".") + "." + s)
  }else if(parts.length < 3){
    // * 当剩余传入的s长度<3(eg. 2) i=2, i=3时, s.slice(0, i)返回相同值, 造成重复项
  for(let i=1; i<=3 && i<=s.length; i++){
    let part = s.slice(0, i)
    if(isIPpart(part)){
      parts.push(part)
      restoreIpAddresses(s.slice(i), result, parts)
      parts.pop()
    }
  }
}
  return result
};

function isIPpart(s){
  if(s[0] === "0"){
    return s.length === 1
  }
  return s.length && s < 256
}
