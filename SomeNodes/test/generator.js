// function *foo(val){
//   let x = yield 2
//   z++
//   let y = yield(x * z)
//   console.log(x, y, z)
// }

// let z = 1

// let it1 = foo()
// let it2 = foo()

// let val1 = it1.next().value //=> 2
// let val2 = it2.next().value //=> 2

// val1 = it1.next(val2 * 10).value //=> 40
// val2 = it2.next(val1 * 5).value //=> 600

// it1.next(val2 / 2) //=> x: 20 z:3 y:300
// it2.next(val1/4) //=> x:200 z:3 y:10


// function step(gen){
//   let it = gen()
//   let last

//   return function(){
//     // 将上一次yield返回的的last重新yield回函数中
//     last = it.next(last).value
//     console.log('Last==========>', last)
//   }
// }

// let a = 1
// let b = 2

// function *foo(){
//   a++
//   yield
//   b = b * a
//   a = (yield b) + 3
//   console.log('A ==========>', a)
// }

// function *bar(){
//   b--
//   yield
//   a = (yield 8) + b
//   console.log('A==============>', a)
//   b = a * (yield 2)
//   console.log('B=========>', b)
// }

// let s1 = step(foo)
// let s2 = step(bar)

// s2() //b-- 1
// s2() //last 8 s1 last 8
// s1() // a++ 2 s2 last undefined
// s2() // a = 9 s2 last 2

// s1() // b = 9 s1 last 9

// s1() // a = 12 last undefined
// s2() // b = 22 last undefined

