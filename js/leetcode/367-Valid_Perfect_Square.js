var isPerfectSquare = function(num) {
  for(var i=0; i * i < num; i++){
    if(i * i === num) return i
  }
  return false
};

console.log(isPerfectSquare(1073741824))