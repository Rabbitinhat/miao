/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let cache = new Map()
  let stack = []
  while(true){
    while(root){
      stack.push(root)
      root = root.left
    }
    if(stack.length === 0) break
    root = stack.pop()
    if(cache.get(k - root.val)) return true
    cache.set(root.val, 1)
    root = root.right
  }
  return false
};

// var root ={
//   val: 5,
//   right:
//   {
//      val: 6,
//      right:{ val: 7, right: null, left: null },
//      left: null },
//   left:
//   {
//      val: 3,
//      right:{ val: 4, right: null, left: null },
//      left:{ val: 2, right: null, left: null } } }

// console.log(findTarget(root, 28))
