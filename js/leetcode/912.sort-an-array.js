/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// * 快排
var sortArray = function(nums) {
  return quickSort(nums)
}

// * 交换数组指定的两项
function swap(ary, i, j){
  let temp = ary[i]
  ary[i] = ary[j]
  ary[j] = temp
}

function quickSort(ary, start=0, end=ary.length-1){
  if(end - start <= 0) return ary
  let random = Math.floor(Math.random() * (end - start + 1) + start)
  swap(ary, random, end)
  let i = start - 1
  for(let j=start; j < end; j++){
    if(ary[j] < ary[end]){
      i++
      swap(ary, i, j)
    }
  }
  i++
  swap(ary, i, end)

  quickSort(ary, start, i-1)
  quickSort(ary, i+1, end)
  return ary
}
