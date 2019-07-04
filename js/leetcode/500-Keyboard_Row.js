// // ! Method 1
// var findWords = function(words) {
//     let keyboard = {
//       rowone: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
//       rowtwo: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
//       rowthree: ["z", "x", "c", "v", "b", "n", "m"]
//     }
//     let result = []
//     for(let word of words){
//       let count = {oneline: 1}
//       for(let w of word){
//         w = w.toLowerCase()
//         if(keyboard.rowone.indexOf(w) !== -1){
//           if(count["rowtwo"] || count["rowthree"]){
//             count["oneline"] = 0
//             break
//           }else{
//             count["rowone"] = 1
//           }
//         }
//         if(keyboard.rowtwo.indexOf(w) !== -1){
//           if(count["rowone"] || count["rowthree"]){
//             count["oneline"] = 0
//             break
//           }else{
//             count["rowtwo"] = 1
//           }
//         } 
        
//         if(keyboard.rowthree.indexOf(w) !== -1){
//           if(count["rowone"] || count["rowtwo"]){
//             count["oneline"] = 0
//             break
//         }else{
//           count["rowthree"] = 1
//         }
//       }
//     }
//     if(count["oneline"] !== 0) result.push(word) 
//     }
//     return result
// };



// ! Method 2
// * time Required: N^2 ?
var findWords = function(words){
  // * 创建对象保存26个字母
  // * 不同行分别赋值为0, 1, 2
  var letter = { q: 0, w: 0, e: 0, r: 0, t: 0, y: 0, u: 0, i: 0, o: 0, p: 0,
 a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1,
 z: 2, x: 2, c: 2, v: 2, b: 2, n: 2, m: 2}
  let result = []
  // * 循环遍历数组
  for(let word of words){
    // * 使用length为3的数组保存单词的字符状态
    let sign = [0, 0, 0]
    for(let w of word){
      // * 对应对象值的数组位置的值固定为1
      sign[letter[w]] = 1
    }
    // * 将数组中的所有元素相加, 若为一行, 则结果为1
    if((sign[0] + sign[1] + sign[2]) === 1) result.push(word)
  }
  return result
}

console.log(findWords(["Hello","Alaska","Dad","Peace"]))