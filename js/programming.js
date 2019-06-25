//? 输出1000以内的完数
function isComplete(n){
  var sum = 1
  var sum_sqrt = Math.sqrt(n)
  //如果对sum_sqrt取整时, 对于因数恰好是位于平方根上下取整的整数, 就会被忽略
  for(var i=1; i<sum_sqrt; i++){
    if(n % i === 0 && i !== 1) sum += (i + n / i)
  }
  //当n为完全平方数时, 只加上一个i即可
  if(i * i === n){
    sum += i;
  }
  return sum === n ? "YES" : "NO"
}

for(let i=1; i<10000+1; i++){
  if(isComplete(i) === "YES") console.log(i)
}