var isUgly = function(num) {
  if(num < 0) num = -num
  if(num === 1) return true
  while(num !== 1){
    let sign = 0
    if(num % 2 === 0){
      num /= 2
      sign = 1
    }
    if(num % 3 === 0){
      num /= 3
      sign = 1
    }
    if(num % 5 === 0){
      num /= 5
      sign = 1
    }
    if(sign === 0) return false
  }
  return true
};

console.log(isUgly(-2147483648))