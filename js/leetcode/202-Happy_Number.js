//!happy number: 数字的不同位数的平方和循环相加最终为1
var isHappy = function(n) {
  let sum = 0
  //*根据规律判断, 非Happy number的不同位数字平方和循环相加总会为4
  while(sum !== 4){
    //*每次相加结果, 在一轮循环开始时重置为0
    sum = 0
    while(n > 0){
      //*每一位数字平方循环相加
      sum += (n % 10) * (n % 10)
      n = (n - n % 10) / 10
    }
    //*n替换为相加结果
    n = sum
    //*结果为1, 就跳出循环
    if(sum === 1) return true
  }
  return false
};

console.log(isHappy(4))

//!Method 2 将数字转换为数组, 利用数组高级函数计算每位数字平方和; 使用数组保存每次相加结果, 发生重复就false

var isHappy = function(n){
  let counter = {}
  let sum = 0
  while(true){
    sum = 0
    while(n > 0){
      sum += (n % 10) * (n % 10)
      n = (n - n % 10) / 10
    }
    if(sum === 1) return true
    n = sum
    if(sum in counter){
      return false
    }else{
      counter[sum] = sum
    }
  }
}

console.log(isHappy(19))