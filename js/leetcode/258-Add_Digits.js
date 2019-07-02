var addDigits = function(num) {
  var result = num
  while(result>9){
    // *result为每位数字的和, 每次循环重置为0
    result = 0
    // *计算每位的和
    while(num > 0){
      result += num % 10
      num = (num - num % 10) / 10
      }
      // *num重置为result
      num = result
    }
    return result
};

var addDigits = function(num) {
  // * 数字分布存在规律
  // * 1 + (num - 1) % 9 因为9的倍数%9为0 
  return num === 0 ? 0 : 1 + (num - 1) % 9;
};

console.log(addDigits(199))