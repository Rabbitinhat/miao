//Power_of_Four 判断是否是4的倍数
var isPowerOfFour = function(num) {
  //排除0和非2的倍数
  if(num > 0 && !(num & (num - 1))){
      return false || (0x55555555 & num)
  }
  return false
};

console.log(isPowerOfFour(16))