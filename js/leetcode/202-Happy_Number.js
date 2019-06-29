var isHappy = function(n) {
  let sum = 0
  while(sum !== 4){
    sum = 0
    while(n > 0){
      sum += (n % 10) * (n % 10)
      n = (n - n % 10) / 10
    }
    n = sum
    if(sum === 1) return true
  }
  return false
};

console.log(isHappy(4))