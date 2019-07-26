/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    return A[0].map((_, index) => {
      // * 将A变为=>每一行第indx元素组成的数组
      return A.map((row) => row[index])
    })  
};
