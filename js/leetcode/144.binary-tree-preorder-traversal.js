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
var preorderTraversal = function(root) {
  if(root && !root.left && !root.right){
    return root.val
  }
  if(root && (root.left || root.right)){
    return [] .concat(root.val, (preorderTraversal(root.left)),(preorderTraversal(root.right)))
  }
};

