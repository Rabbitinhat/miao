/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let code = "A".charCodeAt()
  if(n == 1) return "A"
    // let letter = []
    // for(let i=0; i<26; i++){
    //   letter.push(String.fromCharCode(code + i))
    // }
    let result = ""
    while(n > 0){
      n = n - 1
      result = String.fromCharCode(n % 26 + code) + result
      n = Math.floor((n - (n % 26)) / 26)
    }
    return result
};
