/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let width = board[0].length
  let height = board.length
  let newBoard = Array(height).fill(0).map(it => Array(width).fill(0))
  
    board.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      newBoard[rowIdx][colIdx] = col
    })
  })
    
  newBoard.forEach((row, rowIdx) => {
    row.forEach((cell, colIdx) => {
      let neighbors = 0
      for(let i = rowIdx - 1; i <= rowIdx + 1; i++){
        for(let j = colIdx - 1; j <= colIdx + 1; j++){
          neighbors += newBoard[i] ? ~~newBoard[i][j] : 0
        }
      }
        
    neighbors -= cell
        
      if(cell){
        if(neighbors === 2 || neighbors === 3){
          board[rowIdx][colIdx] = 1
        }else if(neighbors < 2 || neighbors > 3){
          board[rowIdx][colIdx] = 0
        }
      }else{
        if(neighbors === 3) board[rowIdx][colIdx] = 1
      }
    })
  })
};
