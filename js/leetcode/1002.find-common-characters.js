/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let result = []
    let map = []
    for(let i=0; i<A.length; i++){
      map[i] = new Map()
    }
    for(let i=0; i<A[0].length; i++){
      let sign = 1
      for(let j=0; j<A.length; j++){
        let oldpos = map[j].get(A[0][i])
        if(oldpos == undefined) oldpos = 0
        let pos = A[j].indexOf(A[0][i], oldpos)
        if(pos === -1){
          sign = 0
          break
        }else{
          map[j].set(A[0][i], pos+1)
        }
      }
      if(sign){
        result.push(A[0][i])
      }
    }
    return result

};

console.log(commonChars(["bbddabab","cbcddbdd","bbcadcab","dabcacad","cddcacbc","ccbdbcba","cbddaccc","accdcdbb"]))
