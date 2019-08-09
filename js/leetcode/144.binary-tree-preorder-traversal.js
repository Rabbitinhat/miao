/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
var preorderTraversal = function(root, result=[]) {
  if(root){
    result.push(root.val)
    preorderTraversal(root.left, result)
    preorderTraversal(root.right, result)
    return result
  }
  return result
};

