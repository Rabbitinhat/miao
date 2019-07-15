/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function(inorder, postorder) {
    // * 递归
    // * time: O(logN)
    // * space: O(n)
    // * inorder数组不为空
    if(inorder.length>0){
      // * 通过postorder找到当前节点(根节点)的值, 创建新节点
      var node = new TreeNode(postorder.pop())
      // * 找到inorder中对应根节点的位置
      let index = inorder.indexOf(node.val)
      // * 进行递归运算
      node.right = buildTree(inorder.slice(index+1), postorder)
      node.left = buildTree(inorder.slice(0, index), postorder)
    }else{
      // * 为`[]`时 返回null中止递归
      var node = null
    }
    return node
};
