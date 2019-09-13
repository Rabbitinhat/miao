/*
 * @lc app=leetcode id=529 lang=javascript
 *
 * [529] Minesweeper
 */
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let result = board[click[0]][click[1]]
    
    if(result === 'M') board[click[0]][click[1]] = 'X'
    if(result === 'E'){
    let mines = 0
    for(let i=click[0] - 1; i <= click[0] + 1; i++){
      for(let j = click[1] - 1; j <= click[1] + 1; j++){
        if(board[i] !== undefined && board[i][j] !== undefined){
          if(board[i][j] === 'M') mines++
        }
      }
    }
    if(mines === 0){
      board[click[0]][click[1]] = 'B'
      for(let i=click[0] - 1; i <= click[0] + 1; i++){
        for(let j = click[1] - 1; j <= click[1] + 1; j++){
          if(board[i] !== undefined && board[i][j] !== undefined){
            updateBoard(board, [i, j])
          }
        }
      }
    }else{
      board[click[0]][click[1]] = '' + mines
    }
  }
  return board
};

