var addDigits = function(num) {
  var result = num
  while(result>9){
    num = result
    result = 0
    while(num > 0){
     result += num % 10
      num = (num - num % 10) / 10
      }
    }
  return result
};

var addDigits = function(num) {
  return 1 + (num - 1) % 9;
};

console.log(addDigits(199))