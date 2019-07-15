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

// function TreeNode(val) {
//      this.val = val;
//      this.left = this.right = null;
// }
var buildTree = function(preorder, inorder) {
  if(inorder.length){
    var root = new TreeNode(preorder.shift())
    let index = inorder.indexOf(root.val)
    root.left = buildTree(preorder, inorder.slice(0, index))
    root.right = buildTree(preorder, inorder.slice(index+1))
  }else{
    var root = null
  }
  return root
};

//console.log(buildTree([3,2,1,4], [1,2,3,4]))
