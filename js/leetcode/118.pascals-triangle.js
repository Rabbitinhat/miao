/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = []
    for(let i=0; i<numRows; i++){
      let val = new Array(i+1).fill(0)
      val = val.map((item, j, val) => {
        if(j === 0 || j === val.length-1){
          item = 1
          return item
        }else{
          item = output[i-1][j-1] + output[i-1][j]
          return item
        }
      })
      output.push(val)
    }
    return output
};
// @lc code=end

