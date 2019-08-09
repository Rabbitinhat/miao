/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
 */
var BSTIterator = function(root) {
  this.iterator = getNode(root);
  this.getNext = this.iterator.next();

  function* getNode(root) {
    if (root) {
      yield* getNode(root.left);
      yield root.val;
      yield* getNode(root.right);
    }
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let result = this.getNext.value;
  this.getNext = this.iterator.next();
  return result;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return !this.getNext.done;
};

// let node = {
//   val: 7,
//   right:
//   {
//      val: 15,
//      right: { val: 20, right: null, left: null },
//      left: { val: 9, right: null, left: null } },
//   left: { val: 3, right: null, left: null } }

// let obj = new BSTIterator(node)
// let param_1 = obj.next()
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
