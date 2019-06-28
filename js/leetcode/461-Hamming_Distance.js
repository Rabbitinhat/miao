var hammingDistance = function(x, y) {
  let count = 0
  let i = 1
  while(i!=0){
      if(((x & i) ^ (y & i)) === i ){
          count++
      }
      i <<= 1
  }
  return count
};

console.log(hammingDistance(1577962638,1727613287))