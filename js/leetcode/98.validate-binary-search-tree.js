/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // * prev 初始值要小于树的最小值
    let prev = -Infinity
    return traverse(root)
    function traverse(root){
      if(root){
        // * 对左子树进行递归操作
        if(!traverse(root.left)) return false
        // * 位于左子树时, prev为左节点值
        // * 位于右子树时, prev为root值
        if(root.val <= prev) return false
        prev = root.val
        if(!traverse(root.right)) return false
        return true
      }
      return true
    }
  }
