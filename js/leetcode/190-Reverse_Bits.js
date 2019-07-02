var reverseBits = function(n) {
  let sum = 0
  for(let i=0; i<32; i++){
    var b = (n >>> i) & 1
    sum = (sum << 1) + b
  }
  return sum>>>0
};

console.log(reverseBits("000000101001010000"))