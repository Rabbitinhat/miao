// !判断
var hammingDistance = function(x, y) {
  let count = 0
  let i = 1
  // *每次将i左移一位, 和x, y进行&操作保留i对应的位. 进行异或操作, 如果不同结果为i
  while(i!=0){
      if(((x & i) ^ (y & i)) === i ){
          count++
      }
      i <<= 1
  }
  return count
};

var hammingDistance = function(x, y) {
  x = x ^ y
  let counter = 0
  while(x > 0){
      // *通过x & x-1删除x中的1(将x中为1的位转换为0)
      x = x & x - 1
      counter++
  }
  return counter
};
console.log(hammingDistance(1577962638,1727613287))