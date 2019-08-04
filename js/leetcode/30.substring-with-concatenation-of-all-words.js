/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let s_ary = []
    let map = new Map()
    let times = new Map()
    let now = new Map()
    let result = []
    if(words.length === 0 || s.length === 0) {return result}
    let len = words[0].length
    for(var i=0; i<s.length; i+=len){
      s_ary.push(s.slice(i, i+len))
    }
    for(var i=0; i<words.length; i++){
      if(!times.get(words[i])){
        times.set(words[i], 1)
      }else{
        times.set(words[i], times.get(words[i]) + 1)
      }
    }
    for(var j=-1, i=0; i<s_ary.length; i++){
      if(words.indexOf(s_ary[i]) < 0){
        j++
        if(i - j === words.length){
          result.push(j * len)
        }
        map = new Map()
        j = i
      }else{
        // * 判断出现次数, 过滤重复项
        if(!now.get(s_ary[i])){
          now.set(s_ary[i], 1)
        }else{
          now.set(s_ary[i], now.get(s_ary[i]) + 1)
        }
        if(map.get(s_ary[i]) !== undefined && now.get(s_ary[i]) > times.get(s_ary[i])){
          if(map.get(s_ary[i]) > j){
          j++
          if(i - j === words.length){
            result.push((j) * len)
            now.set(s_ary[i], map.get(s_ary[i]) - 1)
          }else{
            let count = now.get(s_ary[i])
            now = new Map()
            now.set(s_ary[i], count - 1)
          }
          j = map.get(s_ary[i])
          map.set(s_ary[i], i)
        }
        }else if(map.get(s_ary[i]) == undefined){
          map.set(s_ary[i], i)
        }

      }
    }
    let sign = 1
    for(var w=0; w<words.length; w++){
      if(times.get(words[w]) !== now.get(words[w])){
        sign = 0
      }
    }
  if(sign){
    j++
    if(i - j === words.length){
      result.push((j) * len)
    }
  }
  return result
};

console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]))
