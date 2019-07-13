/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) return 0
  // * 如果当前节点非leaf, 当前深度+1 继续向非空子树进行递归
  if(!root.left && root.right) return 1 + minDepth(root.right)
  if(!root.right && root.left) return 1 + minDepth(root.left)
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};
