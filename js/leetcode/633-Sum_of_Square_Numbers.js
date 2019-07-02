// * 二分查找
var judgeSquareSum = function(c) {
  for(let i = 0; i * i <= c; i++){
    if(binarySearch(0, c, c - i*i)) return true
  }
  return false
};
function binarySearch(start, end, key){
  while(start <= end){
    let middle = start + Math.floor((end - start) / 2)
    if(middle * middle == key) return true
    else if(middle * middle > key) end = middle - 1
    else if(middle * middle < key) start = middle + 1
  }
  return false
}

// * 双指针
var judgeSquareSum = function(c) {
  let end = Math.floor(Math.sqrt(c))
  for(let i = 0; i <= end;){
    if(i * i + end * end === c) return true
    else if(i * i + end * end < c) i++
    else if(i * i + end * end > c) end--
  }
  return false
};
console.log(judgeSquareSum(8))