function fib(num){
  if(num === 0) return 1
  if(num === 1) return 1
  return fib(num - 1) + fib(num - 2)
}

console.log(fib(10))

a = [1, 2, 7]
console.log(a.indexOf(2, -3))
console.log(a.indexOf(2, -1))