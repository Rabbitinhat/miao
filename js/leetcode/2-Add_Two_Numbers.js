// * 链表
var addTwoNumbers = function(l1, l2) {
  let count = 0
  let dummy = new ListNode(0)
  console.log(dummy)
  let result = dummy
  while(l1 !== null || l2 !== null){
    if(l1 !== null && l2 !== null){
      count += l1.val + l2.val
    }else if(l1 == null){
        count += l2.val
    }else{
        count += l1.val
    }
    let index = 0
    if(count > 9){
      index = count % 10
      count = (count - count % 10) / 10
    }else{
      index = count
      count = 0
    }
    let node = new ListNode(index)
    if(l2 !== null) l2 = l2.next
    if(l1 !== null) l1 = l1.next
    result.next = node
    result = node
  }
  if(count > 0){
    let node = new ListNode(count)
    result.next = node
  }
  return dummy.next
};

var addTwoNumbers = function(l1, l2) {
  let count = 0
  let head = l2
  while(l1 !== null && l2 !== null){
    if(count > 9){
      l2 = count % 10
      count = (count - count % 9) / 9
    }else{
      l2 = count
      count = 0
    }
    l1 = l1.next
    l2 = l2.next
  }
  if(l1 !== null && l2 === null){
    l2 = l1
  }
  while(l2 !== null){
    count += l2.val
    if(count > 9){
      l2.val = count % 10
      count = (count - count % 10) / 10
    }else{
      l2.val = count
      count = 0
    }
    l2 = l2.next
  }
  if(count > 0){
    let node = new ListNode(count)
    l2 = node
  }
  return head
}

function ArrayToList(ary){
  let dummy = {
    value: undefined,
    next: null
  }
  let prev = dummy
  for(let i=0; i<ary.length; i++){
    let node = {
      value: ary[i],
      next: null
    }
    prev.next = node
    prev = node
  }
  
return dummy.next
}

console.log(addTwoNumbers(ArrayToList([2,4,3]), ArrayToList([5,6,4])))