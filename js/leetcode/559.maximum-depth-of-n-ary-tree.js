/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root){
      if(root.children === []){ return 1 }
      return 1 + root.children.reduce((max, a) => {
        let dep = maxDepth(a)
        return max < dep ? dep : max
      }, 0)
    }
    return 0  
};
