/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function(root) {
    if(root){
      // * 左边只有一个叶节点时, 返回左节点的值, 在递归右节点
      if(root.left && !root.left.left && !root.left.right){
        return root.left.val + sumOfLeftLeaves(root.right)
      }
      if(root.right && !root.left){
        return sumOfLeftLeaves(root.right)
      }
      return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
    }
    return 0
};

