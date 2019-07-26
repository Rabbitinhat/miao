/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */
/**
 * Initialize your data structure here.
 */

//  * listSize [1, end] index [0, end]
var MyLinkedList = function() {
    this.head = null
    this.tail = null
    this.listSize = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index(>=0)
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index >= this.listSize || index < 0 || this.head === null) {return -1}
    let node = this.head
    for(let i=0; i<index; i++){
      node = node.next
    }
    return node.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = {
      val: val,
      next: null
    }
    this.listSize++
    if(!this.head){
      this.head = this.tail = node
    }else{
      node.next = this.head
      this.head = node
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = {
      val: val,
      next: null
    }
    this.listSize++
    if(!this.head){
      this.head = this.tail = node
    }else{
      this.tail.next = node
      this.tail = node
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index(>=0)
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  // * 索引长度大于链表长度(索引可以为最后一个节点的next(null))
    if(index > this.listSize) return undefined
  // * index为负数， 或index为0时(指向头部) 
    if(index <= 0) {
      // * addAtHead, addAtTail 包含 listSize++
      this.addAtHead(val)
      return undefined
    }
  // * 索引指向最后一个节点的next(null)
    if(index === this.listSize){
      this.addAtTail(val)
      return undefined
    }
    this.listSize++
    let node = this.head
    let newnode = {
      val: val,
      next: null
    }
    // * 找到待插入位置的前一个节点
    for(let i=0; i<index-1; i++){
      node = node.next
    }
    newnode.next = node.next
    node.next = newnode
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index(>=0)
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index >= this.listSize || index < 0) return undefined
  // * 长度为1时, 删除节点后, 将tail也重置为null
  if(this.listSize === 1) this.tail = null
  this.listSize--
  if(index === 0){
    this.head = this.head.next
    return undefined
  }
  let node = this.head
  // * 找到待删除节点的前一个节点
  for(let i=0; i<index-1; i++){
    node = node.next
  }
  // * 如果待删除节点为最后一个节点
  if(!node.next.next){
    node.next = null
    this.tail = node
  }else{
    node.next = node.next.next
  }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

