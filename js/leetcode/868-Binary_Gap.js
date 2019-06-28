var binaryGap = function(N) {
  let begin = 0
  let dis = 0
  let max = dis;  
  while(n > 0){
    if(n & 1 === 1){
      if(!begin){
        begin = 1
      }else{
        begin = 0
        if(max < dis){
          max = dis
        }
      }
    }
    n >>= 1
    if(begin){
      dis++
    }
  }
  return max
};

binaryGap(22)
binaryGap(5)