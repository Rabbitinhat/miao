/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(!root || (!root.left && !root.right)) return true
  if(root){
    return same(root.left, invert(root.right))
  }
  return false
};

function invert(root){
  if(root){
    let temp = root.left
    root.left = root.right
    root.right = temp
    invert(root.left)
    invert(root.right)
    return root
  }
  return null
}

function same(root1, root2){
  if(!root1 && !root2) return true
  if(!root1 || !root2) return false
  if(root1.val === root2.val) return same(root1.left, root2.left) && same(root1.right, root2.right)
  else return false
}
// function ary2tree(ary, rootPos){
//   if(rootPos > ary.length-1 || ary[rootPos] === null){
//     return null
//   }
//   var root = {
//     val: ary[rootPos],
//   }
//   root.left = ary2tree(ary, rootPos * 2 + 1)
//   root.right = ary2tree(ary, rootPos * 2 + 2)
//   return root
// }

// console.log(hasPathSum(ary2tree([5,4,8,11,null,13,4,7,2,null,null,null,1], 0), 22))

