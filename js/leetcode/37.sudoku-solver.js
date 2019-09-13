/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(
  board,
  row = 0,
  col = 0,
  isRow = [[], [], [], [], [], [], [], [], []],
  isCol = [[], [], [], [], [], [], [], [], []],
  isSud = [[], [], []]
) {
  if (col === 9 && row === 8) return 1;
  if (col === 9) {
    row++;
    col = 0;
  }
  if (col === 0 && row % 3 === 0) isSud = [[], [], []];
  let sudIndex = Math.floor(col / 3);
  if (board[row][col] === ".") {
    for (let i = 1; i < 10; i++) {
      if (
        isRow[row].indexOf(i) === -1 &&
        isCol[col].indexOf(i) === -1 &&
        isSud[sudIndex].indexOf(i) === -1
      ) {
        board[row][col] = i + "";
        isRow[row].push(i);
        isCol[col].push(i);
        isSud[sudIndex].push(i);
        if (solveSudoku(board, row, ++col, isRow, isCol, isSud) === 1) {
          return 1;
        }
        col--;
        board[row][col] = "."
        isRow[row].pop();
        isCol[col].pop();
        isSud[sudIndex].pop();
      }
    }
  } else {
    let num = parseInt(board[row][col]);
    if (
      isRow[row].indexOf(num) === -1 &&
      isCol[col].indexOf(num) === -1 &&
      isSud[sudIndex].indexOf(num) === -1
    ) {
      isRow[row].push(num);
      isCol[col].push(num);
      isSud[sudIndex].push(num);
      if (solveSudoku(board, row, ++col, isRow, isCol, isSud) === 1) {
        return 1;
      }
      col--;
    }
  }
};

let data = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
]
console.log(
  solveSudoku(data)
);
console.log(data)
