/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(
  n,
  result = [],
  queens = [],
  row = 0,
  banA = [],
  banL = [],
  banR = []
) {
  if (row === n) {
    result.push(queens.slice());
  } else {
    if (banR.length > 0) {
      banR = banR.map(x => x + 1);
    }
    if (banL.length > 0) {
      banL = banL.map(x => x - 1);
    }
    for (let i = 0; i < n; i++) {
      if (
        banA.indexOf(i) === -1 &&
        banR.indexOf(i) === -1 &&
        banL.indexOf(i) === -1
      ) {
        let queen = ".".repeat(n);
        queen = queen.slice(0, i) + "Q" + queen.slice(i + 1);
        queens.push(queen);
        banA.push(i);
        banR.push(i);
        banL.push(i);
        row++;
        solveNQueens(n, result, queens, row, banA, banL, banR);
        row--;
        banA.pop();
        banR.pop();
        banL.pop();
        queens.pop();
      }
    }
  }
  return result;
};

