// @ts-check
// * 移除倒数n个链表节点
var removeNthFromEnd = function(head, n) {
  // * 先遍历找出链表长度
  let length = 0
  let list1 = head
  while(list1 !== null){
    list1 = list1.next
    length++
  }
  // * 如果删除位置为头节点(一个节点时也是相同情况)
  if(length === n){
    head = head.next
  }
  else if(length > n){
  let list2 = head
  // * 遍历至length-n处
  // * 数字是有效的(会小于链表长度?)
  for(let i=2; i<=length-n; i++){
    // * 第一循环时, list就指向第二个节点
    list2 = list2.next
  }
  // * 到达删除位置的前一个位置
  // * 删除下一个节点
  let temp = list2.next.next
  list2.next = temp
  }
  return head
};

// * Method 2 将链表节点包裹在一个新链表中
var removeNthFromEnd = function(head, n) {
  let list = head
  let dummy = {
    node: undefined,
    before: null
  }
  let prev = dummy
  while(list !== null){
    let node = {
      node: list,
      before: null
    }
    list = list.next
    node.before = prev
    prev = node
  }
  console.log(dummy.before)
}

var removeNthFromEnd = function(head, n) {
  let d = 0
  let removeCount = (head) => {
    if(head){
    let head = removeCount(head.next)
    d++
    if(d === n+1){
      head.next = head.next.next
    }
    return head
  }
}
  removeCount(head)
  return head
}