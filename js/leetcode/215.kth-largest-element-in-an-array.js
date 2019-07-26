/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // * 第K大的元素, 则如果按升序排列, 则元素右边有K-1个元素
  return quickSort(nums, k-1)
};

// * 使用快排进行排序
function quickSort(ary, k, start = 0, end = ary.length-1){
  // * end <= start 时, 数组只有一个元素, 直接返回ary[start/end]
  if(end - start <= 0) return ary[start]

  let random = Math.floor(Math.random() * (end - start + 1) + start)
  let i = start - 1
  let middle =  ary[random]
  swap(ary, random, end)
  // * j => (start, end]
  for(let j=start; j<end; j++){
    if(ary[j] < middle){
      i++
      swap(ary, i, j)
    }
  }
  i++
  swap(ary, i, end)
  // * 得到i右边元素个数
  let index = ary.length - i - 1
    // * 大于则递归random右边
    if(index > k){
    return quickSort(ary, k, i+1, end)
    // * 小于则递归random左边 
    }else if(index < k){
    return quickSort(ary, k, start, i-1)
    }else{
    // * 位于K位置, 直接返回数组值
    return ary[i]
    }
}

function swap(ary, i, j){
  let temp = ary[i]
  ary[i] = ary[j]
  ary[j] = temp
}


