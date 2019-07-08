var sortList = function(head) {
  if(!head && !head.next){
    return head
  }
  let slow = head
  let fast = head
  
  // * O(N / 2)
  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
  }
  let left = head
  let right = slow.next
  slow.next = null

  left = sortList(left)
  right = sortList(right)
  return mergeTwoLists(left, right)
};

// * 
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

// var sortList = function(head){
//   let p = head
//   let dummy = newListNode()
//   let prev = dummy
//   prev.next = p
//   while(){
//     if(p.val > p.next.val){

//     }
//     p = p.next
//   }
// }

function bubbleSort(ary){
  for(let i=0, len=ary.length; i<len; i++){
    for(let j=i+1; j<len; j++){
      if(ary[i] > ary[j]){
        ary[i] = ary[i] + ary[j]
        ary[j] = ary[i] - ary[j]
        ary[i] = ary[i] - ary[j]
      }
    }
  }
  return ary
}

function bubbleSort(ary){
  for(var j = ary.length - 2; j>= 0; j--){
    var swap = false
    for(var i=0; i<=j; i++){
      if(ary[i] > ary[j]){
        ary[i] = ary[i] + ary[j]
        ary[j] = ary[i] - ary[j]
        ary[i] = ary[i] - ary[j]
      }
    }
    if(swap == false) break
  }
  return ary
}

// * 交换数组指定的两项
function swap(ary, i, j){
  ary[i] = ary[i] + ary[j]
  ary[j] = ary[i] - ary[j]
  ary[i] = ary[i] - ary[j]
}

function bubbleSort(ary){
  // * 每遍历一次数组, 找出最大值; 剩余项继续排列, j为每次遍历终点之后的位置, 并随着每次遍历逐步减少
  for(let j=ary.length-1; j>0; j--){
  // * 找出相邻两项的最大值, 遍历一边数组后, 数组中的最大项移动到末尾
    for(let i=0;i < j; i++){
    if(ary[i] > ary[i+1]){
      swap(ary, i, i+1)
    }
    }
  }
}

console.log(bubbleSort([1, 2, 4, 6, 2, 1, 235, 444, 34, 23, 22, 10]))

// * 归并排序
function mergeSort(ary){
  if(ary.length < 2){
    return ary.slice()
  }
  let mid = ary.length >> 1
  let left = ary.slice(0, mid)
  let right = ary.slice(mid)

  left = mergeSort(left)
  right = mergeSort(right)

  var result = []  
  var i=0
  var j=0
  while(i < left.length && j < right.length){
    result.push(left[i] < right[j] ? left[i++]: right[j++])
  }
  while(i < left.length){
    result.push(left[i++])
  }
  while(j < right.length){
    result.push(right[j++])
  }
  return result
}

console.log(bubbleSort([1, 2, 4, 6, 2, 1, 235, 1, 1,1, 1, 1]))

var obj = {
  a: {
    b: {
      c: {
        a: 1,
        b: obj
      }
    }
  }
}

console.log(obj)

// * TDZ let赋值的变量
var b = {
  num: 2,
  before: b
}
var a = {
  num: 1,
  next: b
}

console.log(a.next)

// * 双向链表 $id $ref
