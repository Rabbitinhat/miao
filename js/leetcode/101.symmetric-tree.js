/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
  // * 镜像
  // * 将root的右子树翻转和左子树进行比较
  // * 如果root没有左右子树, 返回true
  if(!root || (!root.left && !root.right)) return true
  if(root){
    return sameTree(root.left, invert(root.right))
  }
  return false
};

function invert(root){
  if(root){
    let temp = root.left
    root.left = root.right
    root.right = temp
    invert(root.left)
    invert(root.right)
    return root
  }
  return null
}

function sameTree(root1, root2){
  if(!root1 && !root2) return true
  if(!root1 || !root2) return false
  if(root1.val === root2.val) return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right)
  else return false
}
