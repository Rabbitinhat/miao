var removeElements = function(head, val) {
  let list = head
  if(head.val === val){
    list = head.next
  }
  while(list !== null){
    if(list.next === val){
      list.next = list.next.next
    }
  }
  return head
};