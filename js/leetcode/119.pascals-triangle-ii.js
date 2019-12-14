/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex) {
//     let preview = []
//     for(let i=0; i<=rowIndex; i++){
//       let row = new Array(i+1).fill(0)
//       row = row.map((item, idx, row) => {
//         if(idx === 0 || idx === row.length-1){
//           return 1
//         }
//         item = preview[idx-1] + preview[idx]
//         return item
//       })
//       preview = row
//     }
//     return preview
// };

// var getRow = function(rowIndx){
//   let res = []
//   res.push(1)
//   let t = rowIndx
//   let b = 1
//   let current = 1
//   for(let i=1; i<rowIndx+1; i++){
//     current *= t
//     current /= b
//     t--
//     b++
//     res.push(current)
//   }
//   return res
// }


var getRow = function(rowIndex){
  let res = []
  for(let i=1; i<=rowIndex+1; i++){
    res.push(getPasNum(rowIndex+1, i))
  }
  return res
}

function getPasNum(row, col){
  if(col === 1 || col === row) return 1
  let up = 1
  let down = 1
  for(let i=1; i<=col-1; i++){
    down *= row-i
    up *= i
  }
  return down/up
}

// @lc code=end

