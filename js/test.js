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

function change(n, base){
  var sum = ""
  while(n>0){
    sum = (n % base) + sum
    n = Math.floor(n / base)
  }
  return sum;
}
console.log(change(10, 2))

var b = 2
function ab(){
  console.log(b)
}

function c(){
  var b = 4
  ab()
}
c()


function getCorelationsOf(event){
  var core = {}
  core.name = event
  core.relations = phi(tableFor(event, journal));
  corelations.push(core)
}

function f(x){
  if(x === 0) return 0
  else return 2 * f(x-1) + x * x 
}

console.log(f(4))