/*
 * @Author: chyon71 
 * @Date: 2019-07-01 23:54:54 
 * @Last Modified by: chyon71
 * @Last Modified time: 2019-07-02 20:44:26
 */
//* 冒泡排序
var sortedSquares = function(A) {
  A = A.map(x=>x*x)
  for(let i=0; i<A.length; i++){
    for(let j=i+1; j<A.length; j++){
      if(A[i] > A[j]){
        A[i] = A[j] + A[i]
        A[j] = A[i] - A[j]
        A[i] = A[i] - A[j]
      }
    }
  }
  return A
};

console.log(sortedSquares([-7,-3,2,3,11]))