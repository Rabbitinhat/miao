/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder.length){
    let root = new TreeNode(preorder.shift())
    console.log(root.val)
    let index = inorder.indexOf(root.val)
    console.log(preorder)
    if(index>0 && preorder.length>0){
      root.left = buildTree(preorder, inorder.slice(0, index))
    }else{
      root.left = null
    }
    if(index>=0 && preorder.length>0 && inorder.length>1){
      console.log(preorder)
      root.right = buildTree(preorder, inorder.slice(index+1))
    }else{
      root.right = null
    }
    return root
  }
  return null
};

