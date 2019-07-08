// * 循环
var swapPairs = function(head) {
  let index = head
  let dummy = {
    value: undefined,
    next: null
  }
  let prev = dummy
  prev.next = index
  while(index !== null && index.next !== null){
    let b = index.next
    index.next = b.next
    b.next = index
    prev.next = b
    prev = index
    index = index.next
  }
  // * 
  return dummy.next
};

// * 递归
var swapPairs = function(head){
   if(!head && !head.next){
     return head
   }
   let a = head
   let b = a.next
   let c = b.next
   b.next = a
   a.next = c
   c = swap(c)
   return b
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
console.log(swapPairs(ArrayToList([1,2,3,4])))

function reverseList(head){
  if(!head || !head.next){
    return head
  }
  
  
}

function reverseList(head){
  let a = null
  let b = head
  let c = head.next
  while(c !== null){
    b.next = a
    a = b
    b = c
    c = c.next
  }
  return b
}