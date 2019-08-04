/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // *　使用hash map 保存数组值和对应索引
    let map = new Map()
    let max = 0
    for(let i=0; i<s.length; i++){
      // * 如果字符为非重复项， 保存在map中
      if(map.get(s[i]) === undefined){
        map.set(s[i], i)
      }else{
        // * 字符串中两个相邻字符为重复项
        if(i - map.get(s[i]) === 1){
          // * 判断map中非重复项个数是否为最大值
          if(max < map.size) max = map.size
          // * 清空map， 保存当前字符
          map = new Map()
          map.set(s[i], i)
        }else{
          // * 如果不相隔字符为重复项
          // * 判断map中非重复项个数是否为最大值
          if(max < map.size) max = map.size
          // * 删除map中，重复项第一次出现位置之前的所有字符
          for(let e of map){
          if(e[1] < map.get(s[i])) map.delete(e[0])
          }
          // * 重置重复项的索引
          map.set(s[i], i)
        }
      }
    }
    return max > map.size ? max : map.size
};
