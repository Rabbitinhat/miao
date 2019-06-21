function lcf(a, b){
  let max = a > b ? a : b
  let min = a < b ? a : b
  
  // 如果较大值能被较小值整除
  if(max % min === 0) return min
  
}