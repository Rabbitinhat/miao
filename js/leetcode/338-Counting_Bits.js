var countBits = function(num) {
    var list = []
    for(let i=0; i<num+1; i++){
      list.push(countOne(i))
    }
    return list
};

function countOne(n){
  let count = 0;
  while(n>0){
    if((n & 1) === 1) count++
    n >>>= 1
  }
  return count
}

console.log(countBits(5))