// Leap Year
function isLeapYear(n) {
  if((n % 4 == 0 && n % 100 != 100) || n % 400 == 0) {
    console.log(`${n} is Leap Year!!`);
  }
}

isLeapYear(2008);

// add 1 to n
function sum(n) {
  return (n + 1) * n / 2; 
}

console.log(sum(200));

//is Prime
function isPrime(n) {
  return ((n % 3 != 0 && n % 5 != 0 && n % 7 != 0) || n == 2 || n == 3 || n == 5 || n == 7 || n == 9) ? true : false;
}

console.log(`${isPrime(19)}, ${isPrime(15)}, ${isPrime(27)}, ${isPrime(23)}`);
console.log(isPrime(3), isPrime(17));
console.log(isPrime(1));