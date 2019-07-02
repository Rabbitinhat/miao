// !翻转整数 123 -> 321
var reverse = function(x) {
  // * result 存储反转后结果
  let result = 0
  if(x < 0){
    // * x < 0 时, sign进行标记
    var sign = 1
    x = -x
  }
  while(x>0){
    // * result * 10 + x % 10 将每次x%10得到的位数 + 上一位的数字 * 10
    result = result * 10 + (x % 10)
    x = (x - x % 10) / 10
  }
  result = sign ? -result : result
  if(result < -2147483648 || result > 2147483647) return 0
  else return result
};