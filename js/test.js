function calcOne(n) {
  let count = 0;
  // n > 0   
  for (let i = n; i != 0; i >>>= 1) {
    if (i & 1) {
      count++;
    }
  }
  return count;
}

function showInt(n) {
  let num = "";
  for(let i = n; i != 0; i >>>= 1) {
    num = (i & 1) + num;
  }
  return num;
}

console.log(showInt(2e9));
console.log(showInt(2e9 << 1));

console.log(2e9 << 1);

a = parseInt('100000000', 16);
console.log(a);
console.log(showInt(parseInt('1e31'), 2));
console.log(showInt(a));
b = parseInt('1111', 2);
console.log(showInt(b));
console.log(a | b);
console.log(showInt(a|b));
console.log(Number.MAX_VALUE);

