/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function(root, result=[]) {
  if(root){
    inorderTraversal(root.left, result)
    result.push(root.val)
    inorderTraversal(root.right, result)
    return result
  }
  return result
};

// // * 将root在数组rootPos位置的一个由数组表达的二叉树; 转换为二叉链表表示
// function ary2tree(ary, rootPos = 0) {
//   // * 当rootPos为
//   if (rootPos >= ary.length || ary[rootPos] === null) {
//     return null;
//   }
//   var root = {
//     val: ary[rootPos],
//     // * 递归查找left, right子节点位置
//     left: ary2tree(ary, rootPos * 2 + 1),
//     right: ary2tree(ary, rootPos * 2 + 2)
//   };
//   return root;
// }
// console.log(ary2tree([1, null, 2, 3]))
// console.log(inorderTraversal(ary2tree([1,null,2,3])))
