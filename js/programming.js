//? 输出1000以内的完数
// function isComplete(n){
//   var sum = 1
//   var sum_sqrt = Math.sqrt(n)
//   //如果对sum_sqrt取整时, 对于因数恰好是位于平方根上下取整的整数, 就会被忽略
//   for(var i=1; i<sum_sqrt; i++){
//     if(n % i === 0 && i !== 1) sum += (i + n / i)
//   }
//   //当n为完全平方数时, 只加上一个i即可
//   if(i * i === n){
//     sum += i;
//   }
//   return sum === n ? "YES" : "NO"
// }

// for(let i=1; i<10000+1; i++){
//   if(isComplete(i) === "YES") console.log(i)
// }

let ANCESTRYFILE = JSON.parse(require("./ancestry"))
function calc(life){
  let sum = 0
  for(let element of life){
    sum += element.died - element.born
  }
  return sum / life.length
}

console.log(calc(ANCESTRYFILE))

// * 计算19c的平均年龄
function is19c(file){
  return file.born >= 1800 && file.born < 1900
}

function age(peo){
  return peo.died - peo.born
}

function sum(count, a){
  return count + a
}

console.log(ANCESTRYFILE.filter(is19c).map(age).reduce(sum) / (ANCESTRYFILE.filter(is19c).length))

// * 算出函数特定位置斜率的函数
function d(f){
  return function(x){
    var s = 0.00001
    var x1 = x - s
    var x2 = x + s
    var y1 = f(x1)
    var y2 = f(x2)
    return (y2-y1) / (x2-x1)
  }
}

fp = d(x=>x*x)
console.log(fp(3))

// * acc(Accumnulator 累加器) cur(current value 当前值) idx(current index 当前索引) src(source Array 原数组)
function average(acc, cur, idx, src){
  acc = cur + (src[idx] / src.length)
  return acc
}
console.log([1, 2, 3, 4, 5, 6].reduce(average))
console.log(ANCESTRYFILE.filter(is19c).map(age).reduce(average))
