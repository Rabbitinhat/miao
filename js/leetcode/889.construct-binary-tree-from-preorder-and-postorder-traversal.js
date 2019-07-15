/*
 * @lc app=leetcode id=889 lang=javascript
 *
 * [889] Construct Binary Tree from Preorder and Postorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
var constructFromPrePost = function(pre, post) {
    if(pre.length){
      var node = new TreeNode(post.pop())
      pre.shift()
      let index = pre.indexOf(post[post.length-1])
      node.right = constructFromPrePost(pre.slice(index), post)
      node.left = constructFromPrePost(pre.slice(0, index), post)
    }else{
      var node = null
    }
    return node
};

// * console.log(constructFromPrePost([1,2,4,5,3,6,7], [4,5,2,6,7,3,1]))

