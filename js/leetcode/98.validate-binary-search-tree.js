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
    // * 左子节点的值小于root, 右子节点的值大于root
    if(root){
      
      if(root.left && root.left.val >= root.val) return false
      if(root.right && root.right.val < root.val) return false
      ;e
    }
    return true
}
