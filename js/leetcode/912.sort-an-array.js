/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
// * 选择排序
// * time: O(N^2)
// * space: O(1) 空间复杂度和使用的变量有关
for(let i=0; i<nums.length-1; i++){
  let minPos = i
  for(let j=i+1; j<nums.length; j++){
    if(nums[minPos] > nums[j]) minPos = j
  }
  swap(nums, i, minPos)
}
return nums
}

// * 交换数组指定的两项
function swap(ary, i, j){
  let temp = ary[i]
  ary[i] = ary[j]
  ary[j] = temp
}

