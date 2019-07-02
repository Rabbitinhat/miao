//*判断平方数
//! Method 1
var isPerfectSquare = function(num) {
  //*循环查找
  for(var i=0; i * i <= num; i++){
    if(i * i === num) return true
  }
  return false
};

console.log(isPerfectSquare(1073741824))

//! Method 2
//*二分法查找
var isPerfectSquare = function(num) {
  if(num === 1) return true
  //*从0开始也可, 添加1的判断可以加快执行速度
  let start = 1
  let end = num
  while(start <= end){
    //*因为只选择有整数平方根的数字, 使用Math.floor取整
    let middle = start + Math.floor((end - start) / 2)
    if(middle * middle === num) return true
    if(middle * middle > num) end = middle - 1
    if(middle * middle < num) start = middle + 1
  }
  return false
};

console.log(isPerfectSquare(1073741824))