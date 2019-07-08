// 
var groupAnagrams = function(strs) {
  var map = { q: 3, w: 5, e: 7, r: 11, t: 13, y: 17, u: 19, o: 23, p: 29, a: 31, s: 37, d: 41, f: 43, g: 47, h: 53, j: 59, k: 61, l: 67, z: 71, x: 73, c: 79, v: 83, n: 89, b: 97, m: 101}
  var getEqual = {}
  for(let word of strs){
    let index = 1
    for(let w of word){
      index *= map[w]
    }
    if(getEqual[index]){
      
    }
  }
};
