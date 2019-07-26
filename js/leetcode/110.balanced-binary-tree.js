/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function(root) {
  return depth(root) > -1 ? true : false
  function depth(root){
    // * lf, lr 即表示深度, 也判断是否位平衡树(-1)
      if(root){
        // * 如果非平衡树, 直接返回-1
        var lf = depth(root.left)
        if(lf === -1) return -1
        var lr = depth(root.right)
        if(lr === -1) return -1
        // * 如果深度差小于1, 则返回当前深度(1 + 左右子树深度较大值)
        if(Math.abs(lf - lr) <= 1) return 1 + Math.max(lf, lr)
        // * 深度差>1, 不为平衡树
        else return -1
      }
      // * 位于leaf时, 深度为0
      return 0
    }
};

