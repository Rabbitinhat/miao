/*
 * @lc app=leetcode id=622 lang=javascript
 *
 * [622] Design Circular Queue
 */
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.head = null;
  this.tail = this.head;
  this.size = 0;
  this.mixSize = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.size < this.mixSize) {
    this.size++;
    // * Queue为空
    let node = {
      val: value,
      next: null
    };
    if (this.head == null) {
      // * head, tail 指向?
      this.head = this.tail = node;
      node.next = this.head;
    } else {
      this.tail.next = node;
      this.tail = node
      node.next = this.head;
    }
    return true;
  }
  return false;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.size > 1) {
    // * 删除头部
    this.head = this.head.next
    this.tail.next = this.head
    this.size--
    return true;
  }else if(this.size === 1){
    this.size--
    this.head = this.tail = null
    return true
  }else{
  return false;
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.head) {
    return this.head.val;
  }
  return -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.tail) {
    return this.tail.val;
  }
  return -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.size === this.mixSize;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
