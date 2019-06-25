# Point

## 问题
- 7: 输入一个数，输出其是否是7的倍数或各个位上是否有7（25：NO，27：YES，21：YES)
- sort: 输入3个数，按从小到大顺序输出
- narcissistic: 输入一个数判断其是否为水仙花数，输出"YES"/"NO"
- narcissistics: 输出1000以内的水仙花数
- palindrom: 输入一个数，判断其是否为一个一个回文数"YES"/"NO"
- weekday: 输入年份与月份，输出这此年此月的第一天为星期几（0对应周日，1对应周一）
- complete-number: 输入一个数判断其是否为完数，输出"YES"/"NO"
- complete-numbers: 输出1000以内的完数
- prime: 输入一个数判断其是否为素数数，输出"YES"/"NO"
- primes: 输出100以内的素数
- itob: 输入一个数，输出其字符串形式
- lcf&lcm: 输入两个数，分别输出它们的最大公约数和最小公倍数
- sqrt: 输入一个数，输出其平方根，精确到小数点后3位
- 使用优化算法计算a的n次方, 即当n为偶数时, 只需要计算a的n/2次方后再平方一次即可, 当n为奇数时，计算a的(n-1)/2次方的值平方后再乘以a即可, 依次类推.

## 解答

```js
var q = +prompt()
var isEm = prompt()

var p = 8

if (q > 1000) {
  p += Math.ceil((q - 1000) / 500) * 4
}

if (isEm === 'y') {
  p += 5
}

console.log(p)


if (isEm == 'y') {
  if (q < 1000) {

  } else {

  }
} else {
  if (q > 1000) {

  } else {

  }
}



if (q < 1000 && isEm == 'n') {

} else if (q > 1000 && isEm == 'n') {

} else if (q < 1000 && isEm == 'y') {

} else if (q > 1000 && isEm == 'y') {

}
```

```js
var n = +prompt()
var age
var sum = 0

for(var i = 0; i < n; i++) {
  age = +prompt()
  sum = sum + age
}

console.log(sum / n)
```

```js
var n = +prompt()
var max = -Infinity
var min = Infinity

for(var i = 0; i < n; i++) {
  score = +prompt()
  if (score > max) {
    max = score
  }
  if (score < min) {
    min = score
  }
}

console.log(max - min)
```

```js
var n = +prompt()
var max = -Infinity
var min = Infinity
debugger
for(var i = 0; i < n; i++) {
  score = +prompt()
  if (score > max) {
    max = score
  }
  if (score < min) {
    min = score
  }
}

console.log(max - min)
```

```js
var n = +prompt()
var c1 = 0
var c5 = 0
var c10 = 0

for (var i = 0; i < n; i++) {
  var x = +prompt()
  if (x == 1) {
    c1++
  }
  if (x == 5) {
    c5++
  }
  if (x == 10) {
    c10++
  }
}

console.log(c1,c5,c10)
```

```js
var a = 1
var b = 1


var n = 5

for (var i = 0; i < n; i++) {
  b = b + a
  a = b - a
}

console.log(b)
```

```js
var n = +prompt()
var count = 0

for (var i = 0; i < n; i++) {
  var number = +prompt()

  var last = number % 10
  number = (number - last) / 10
  
  while (number > 0) {
    var digit = number % 10
    last -= digit
    if (last < 0) {
      break
    }
    number = (number - digit) / 10
  }

  if (last > 0) {
    count++
  }
}

console.log(count)


// ch0105/26升级版
```

```js
var n = +prompt()
var sign = n > 0 ? 1 : -1
n = Math.abs(n)
var sum = 0

while (n > 0) {
  var digit = n % 10
  sum = sum * 10 + digit
  n = (n - digit) / 10
}

console.log(sign * sum)

// ch0105/29

var n = +prompt()
var sum = 0

while (n != 0) {
  var digit = n % 10
  sum = sum * 10 + digit
  n = (n - digit) / 10
}

console.log(sum)
```

```js
var n = +prompt()
var k = +prompt()

if (n % 19 == 0) {
  while (n > 0) {
    var digit = n % 10
    if (digit === 3) {
      k--
    }
    n = (n - digit) / 10
  }
  if (k == 0) {
    console.log('YES')
  } else {
    console.log('NO')
  }
} else {
  console.log('NO')
}
/* 0105/30 */
```

```js
var n = +prompt()
var m = +prompt()

for(var light = 1; light <= n; light++) {
  var isLightOn = true

  for(var p = 1; p <= m; p++) {
    if (light % p == 0) {
      isLightOn = !isLightOn
    }
  }

  if (!isLightOn) {
    console.log(light)
  }
}
//105.31
```

```js
var n = +prompt()

var a = 1
var b = 1
var sum = 0

for(var i = 0; i < n; i++) {
  b = b + a
  a = b - a
  sum += b / a
  console.log(b / a)
}

console.log(sum)
//105.32
```

```js
var n = +prompt()
var result = 0

for (var i = 1; i <= n; i++) {
  var fac = 1

  for(var j = 1; j <= i; j++) {
    fac *= j
  }

  result += fac
}

console.log(result)
//105.34
```

```js
var result = 0

for(var i = 1; i <= 21; i++) {
  if (i % 7 != 0) {
    var n = i
    while(n > 0) {
      var digit = n % 10
      if (digit == 7) {
        break
      }
      n = (n - digit) / 10
    }
    if (n == 0) {
      result += i * i
    }
  }
}

console.log(result)
//105.39
```

```js
var n = 6

var give = 1
var sum = 0

for(var i = 0, j = 0; i < n; j++, i++) {
  if (j == give) {
    j = 0
    give++
  }
  sum += give
  
}

console.log(sum)
//105.45
```

```js
var isRelatedWith7 = function(n) {
  if (n % 7 == 0) {
    return true
  } else {
    while (n > 0) {
      var digit = n % 10
      if (digit == 7) {
        return true
      }
      n = (n - digit) / 10
    }
    return false
  }
}

var getNumber = function(hint) {
  return +prompt(hint)
}


var num = getNumber('请输入')

if (isRelatedWith7(num)) {
  console.log('YES')
} else {
  console.log('NO')
}
```

```js
var isPrime = function(n) {
  if (n < 2) {
    return false
  }

  var sqrt_n = Math.floor(Math.sqrt(n))

  for(var i = 2; i <= sqrt_n; i++) {
    if (n % i == 0) {
      return false
    }
  }

  return true
}

```

```js
for (var i = 1; i < 10000; i++) {
  
  var n = i
  var m = n
  // 153
  var width = 0


  while (m > 0) {
    width++
    var digit = m % 10
    m = (m - digit) / 10
  }

  m = n

  var sum = 0
  while (m > 0) {
    var digit = m % 10
    var product = 1
    for (var i = 0; i < width; i++) {
      product *= digit
    }
    sum += product
    m = (m - digit) / 10
  }

  if (sum == n) {
    console.log(n)
  } else {
    //console.log('NO')
  }
}
```

```js

/**
 * 返回数值m在十进制下的位宽
 */
var getDigitWidth = function(m) {
  var width = 0
  if (m == 0) {
    return 1
  }
  while (m > 0) {
    width++
    var digit = m % 10
    m = (m - digit) / 10
  }
  return width
}

/**
 * 返回a的n次方，n为整数
 */
var power = function(a, n) {
  var result = 1

  for (var i = 0; i < n; i++) {
    result *= a
  }

  return result
}

/**
 * 判断数值n是否为一个水仙花数
 */
var isNarcissistic = function(n) {
  var width = getDigitWidth(n)
  var m = n

  var sum = 0

  while (n > 0) {
    var digit = n % 10
    sum += power(digit, width)
    n = (n - digit) / 10
  }

  if (sum == m) {
    return true
  }
  return false
}

var printNarcissisticsBelow10000 = function(){
  for (var i = 1; i < 10000; i++) {
    if (isNarcissistic(i)) {
      console.log(i)
    }
  }
}

printNarcissisticsBelow10000()

```

```js
var isPalindrom = function(n) {
  var width = getDigitWidth(n)


  for (var i = 1; i <= n / 2; i++) {
    var right = Math.floor(n / power(10, i - 1)) % 10
    var left = Math.floor(n / power(10, width - i)) % 10

    if (right !== left) {
      return false
    }
  }

  return true
}


var isPalindrom2 = function(n) {
  var sum = 0
  var m = n

  while (n > 0) {
    var digit = n % 10
    sum = sum * 10 + digit
    n = (n - digit) / 10
  }

  return sum == m
}

```

```js
var isCompleteNumer = function(n) {
  var sum = 1

  var sqrt_n = Math.floor(Math.sqrt(n))

  for (var i = 2; i <= sqrt_n; i++) {
    if (n % i == 0) {
      if (i == n / i) {//平方根
        sum += i
      } else {//非平方根
        sum += i + (n / i)
      }
    }
  }

  return sum == n
}

var isCompleteNumer3 = function(n) {
  var sum = 1

  var sqrt_n = Math.floor(Math.sqrt(n))

  for (var i = 2; i < sqrt_n; i++) {
    if (n % i == 0) {
      sum += i + (n / i)
    }
  }

  if (sqrt_n * sqrt_n == n && sqrt_n !== n) {
    sum += sqrt_n
  }

  return sum == n
}


var isCompleteNumer2 = function(n) {
  var sum = 1

  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      sum += i
    }
  }

  return sum == n
}
```

```js
//计算z的二进制形式中1的个数
z = z & (z - 1) z !== 0
z & (z - 1) === 0 z
//能被 2**n 整除

//happy number 
```


### LeedCode

[perfect-number](https://leetcode.com/problems/perfect-number/)
[ugly-number](https://leetcode.com/problems/ugly-number/)
[sqrtx](https://leetcode.com/problems/sqrtx/)
[valid-perfect-square](https://leetcode.com/problems/valid-perfect-square/)
[happy-number](https://leetcode.com/problems/happy-number/)
[palindrome-number](https://leetcode.com/problems/palindrome-number/)
[powx-n](https://leetcode.com/problems/powx-n/)
