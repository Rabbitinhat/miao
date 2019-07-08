// * 时间复杂度O(N)
var mergeTwoLists = function(l1, l2) {
  let prev = new ListNode(undefined)
  prev.next = l1
  let head = prev
  // * 合并链表, 排序链表
  while(l1!== null && l2 !== null){
    // * 当l1 l2都未到结尾时
    if(l1.val >= l2.val){
      let newnode = l2
      l2 = l2.next
      newnode.next = l1
      prev.next = newnode
      prev = newnode
      
    }else{
      prev = l1
      l1 = l1.next
    }
  }
  if(l1 === null){
    prev.next = l2
  }
  return head.next
};

// * 递归
var mergeTwoLists = function(head){
  if(!l1 || !l2){
    return l1 || l2
  }
  if(l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }else{
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}