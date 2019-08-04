/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  for(let i=0; i<strs.length; i++){
    let char = strs[i].split("").sort().join("")
    if(map.get(char) === undefined){
      map.set(char, [strs[i]])
    }else{
      map.get(char).push(strs[i])
    }
  }
  let result = []
  map.forEach(x=>result.push(x))
  return result
};

