//二分法
var my_Sqrt = function(x) {
  var n = x
var middle = n / 2
var first = 0
var base = n
var counter = 20
while(1){
  if(middle * middle - base > .01){
    n = middle
    middle = (n - first) / 2 + first
    continue
  }
  if(base - middle * middle > .01){
    first = middle
    middle = first + (n - first) / 2
    continue
  }
  if(middle * middle === base || Math.abs(middle * middle - base) > .0001){
    break
  }
}
  return middle >= 1 || middle === 0 ? Math.floor(middle) : 1
};

//牛顿迭代法
//Infinity - Infinity => NaN
var mysqrt = function(n){
  let x = 2
  for(let i=0; i<20; i++){
    x = x - (x * x - n) / (2 * x)
  }
  return x
}

console.log(mysqrt(674478281))