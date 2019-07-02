var convertToBase7 = function(num) {
  let result = ""
  // * num为负数时, sign赋值为1作为标记
  if(num < 0){
      var sign = 1
      num = -num
  }
  // * 循环 % 7 得到base7的结果
  if(num === 0) return "0"
  while(num > 0){
      result = (num % 7) + reuslt
      num = (num - num % 7) / 7
  }
  // * 检测标记, 添加正负号
  return sign ? "-" + result : result
};