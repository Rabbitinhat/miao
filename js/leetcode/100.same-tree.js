/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// * 递归
var isSameTree = function(p, q) {
    if(p === null && q === null){
      return true
    }
    // * p, q只有其中一个节点为空时, 返回false
    if(p === null || q === null){
      return false
    }
    if(p.val === q.val){
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }else{
      return false
    }
};

