// function a(a){
//   return function b(b){
//     return function c(c){
//       return a * c * b
//     }
//   }
// }

// var x = a(6)
// var y = x(7)
// var z = y(3)

// var primelist = [2]
// function count_primes(n){
//   var count = 0
//   for(let i=2; i<n; i++){
//     if(isPrime(i)) count++
//   }
//   return count
// }

// function isPrime(n){
//   if(n < 2) return false
//   for(let i=0; primelist[i] <= Math.sqrt(n); i++){
//     if(n % primelist[i] === 0) return false
//   }
//   if(n > primelist[primelist.length-1]) primelist.push(n)
//   return true
// }

// console.log(count_primes(100))
// console.log(primelist)

// // ?
// function isHappy(n) {
//   var sum = 0
//   while(n > 0){
//     var d = n % 10
//     sum += d * d
//     n = (n - d) / 10
//   }

//   if(sum === 1) return true
//   if(sum === 4) return false
  
//   return isHappy(sum)
// }

function getPoint(x, y){
  var result = []
  
  function getPoint2(start_x, start_y, history){
    if(start_x == x && start_y == y){
      result.push(history)
    }else if(start_x <= x && start_y <= y){
      getPoint2(start_x + 1, start_y, history + " right ")
      getPoint2(start_x, start_y + 1, history + " top ")
    }
  }
  getPoint2(0, 0, "")
  return result
}

console.log(getPoint(4, 5))

function inputTheReverse(n){
  if(n !== 1){
    let x = +prompt()
    inputTheReverse(n-1)
    console.log(x)
  }
}