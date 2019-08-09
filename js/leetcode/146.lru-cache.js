/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.top = null;
  this.old = null;
  this.map = new Map();
  this.maxSize = capacity;
  this.size = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let node = this.map.get(key);
  if (node) {
    updateNode(node, this);
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = {
    key: key,
    value: value,
    next: null,
    prev: null
  };
  if (!this.map.get(key)) {
    this.map.set(key, node);
    this.size++;
    if (this.size <= this.maxSize) {
      if (!this.top) {
        this.top = this.old = node;
      } else {
        this.top.next = node;
        node.prev = this.top;
        this.top = node;
      }
    } else {
      this.map.delete(this.old.key);
      node.prev = this.top;
      this.top.next = node;
      this.top = node;
      this.old.next.prev = null;
      this.old = this.old.next;
      this.size--;
    }
  } else {
    let oldNode = this.map.get(key);
    oldNode.value = value;
    updateNode(oldNode, this);
  }
};

function updateNode(node, obj) {
  if (node) {
    let prev = node.prev;
    let next = node.next;
    if (prev || next) {
      if (prev && next) {
        prev.next = next;
        next.prev = prev;
        obj.top.next = node;
        node.prev = obj.top;
        node.next = null;
        obj.top = node;
      } else if (prev === null) {
        next.prev = prev;
        obj.old = next;
        obj.top.next = node;
        node.prev = obj.top;
        node.next = null;
        obj.top = node;
      }
    }
  }
}
// var cache = new LRUCache(1)
// cache.put(1, 1)
// cache.put(2, 2)
// cache.put(3, 3)
// cache.get(3)
// cache.get(2)
// cache.get(12)
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
