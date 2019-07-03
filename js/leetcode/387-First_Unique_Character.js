var firstUniqChar = function(s) {
    // * show用来存储数组中对应元素出现次数
    let show = {}

    // ! "".length === 0
    for(let i=0; i<s.length; i++){
      // * 如果show中存在对应属性
      if(s[i] in show){
        // * 次数递增
        show[s[i]]++
      }else{
        // * 第一次出现则新建属性
        show[s[i]] = 1
      }
    }
    
    for(let i=0; i<s.length; i++){
      // * 查找对应属性的出现次数, 为1则为unique
      if(show[s[i]] === 1) return i
    }
    // * 未找到则返回-1
    return -1
};

console.log(firstUniqChar("a"))

var firstUniqChar = function(s) {
  let result = 0
  for(let i of s){
    console.log(`${i} : ${i.charCodeAt()}`)
    result ^= i.charCodeAt()
  }
  console.log(String.fromCharCode(result))
  return s.indexOf(String.fromCharCode(result))
}

console.log(firstUniqChar("leetcode"))