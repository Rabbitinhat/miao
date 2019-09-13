/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var nineMap = new Array(3).fill(0).map(it => (it = new Map()));
  var rowMap = new Array(board[0].length).fill(0).map(it => (it = new Map()));
  let sign = true
  board.forEach((row, rowIdx) => {
    let colMap = new Map();
    if (rowIdx % 3 === 0)
      nineMap = new Array(3).fill(0).map(it => (it = new Map()));
    row.forEach((col, colIdx) => {
      if (col !== ".") {
        if (rowMap[colIdx].get(col) !== undefined) sign = false
        else rowMap[colIdx].set(col, 1);

        if (colMap.get(col) != undefined) sign = false
        else colMap.set(col, 1);

        let nineIdx = Math.floor(colIdx / 3);
        if (nineMap[nineIdx].get(col) !== undefined) sign = false
        else nineMap[nineIdx].set(col, 1);
      }
    });
  });
  return sign;
};

console.log(isValidSudoku([
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
