/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // * 递归, root存在, 交换root节点的左子树,右子树
    if(root){
      let temp = root.left
      root.left = root.right
      root.right = temp
      invertTree(root.left)
      invertTree(root.right)
      return root
    }
    // * 否则返回null
    return null
};

