/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.heap = nums.slice(0, k)
  this.compare = (a, b) => b - a
  this.k = k
  heapity(this.heap, this.compare)
  for(let i=k; i<nums.length; i++){
    if(nums[i] > this.heap[0]){
      shift(nums[i], this.heap, this.compare)
    }
  }
  return this
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  // console.log(this.heap)
  // console.log(this.k)
  if(this.heap.length < this.k || this.heap.length === 0){
    // console.log("one")
    this.heap.push(val)
    heapity(this.heap, this.compare)
  }
  else if(val >= this.heap[0]){
    // console.log("two")
    shift(val, this.heap, this.compare)
    // console.log(this.heap)
  }
  return this.heap[0]
};

function swap(ary, i, j){
  let temp = ary[j]
  ary[j] = ary[i]
  ary[i] = temp
}
function heapity(ary, compare){
  let currIdx = (ary.length - 2) >> 1
  for(let i=currIdx; i >=0; i--){
    _heapDown(i, ary, compare)
  }
}

function _heapDown(currIdx, ary, compare){
  // console.log("_heapDown")
  if (currIdx < ary.length) {
    let maxIdx = currIdx;
    let lIdx = currIdx * 2 + 1;
    let rIdx = currIdx * 2 + 2;
    if (ary[lIdx] !== undefined && (compare(ary[lIdx], ary[maxIdx]) > 0)){
      maxIdx = lIdx
      // console.log("maxIdx" + maxIdx)
    }
    if (ary[rIdx] !== undefined && (compare(ary[rIdx], ary[maxIdx]) > 0)) maxIdx = rIdx;
    if (maxIdx !== currIdx) {
      swap(ary, maxIdx, currIdx);
      _heapDown(maxIdx, ary, compare);
    }
  }
}

function _heapUp(ary, currIdx, compare){

  if(currIdx > 0){
    let minuIdx = currIdx
    let fIdx = (currIdx - 1) >> 1
    if(compare(ary[fIdx], ary[minuIdx]) < 0){
      minuIdx = fIdx
    }
    if(minuIdx !== fIdx){
      swap(ary, minuIdx, fIdx)
      _heapUp(ary, minuIdx, compare)
    }
    return this
  }
}

function shift(temp, ary, compare){
  ary[0] = temp
  let currIdx = 0
  // console.log("shift")
  _heapDown(currIdx, ary, compare)
}


/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


