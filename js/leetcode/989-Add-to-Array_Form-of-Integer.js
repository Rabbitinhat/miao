  var addToArrayForm = function(A, K) {
    for(let i=A.length-2; i>=0; i--){
      K = A[i] + K
      if(K > 9){
        A[i] = K % 10
      }
      K = (K- K % 10) / 10
    }
    while(K > 0){
      A.unshift(K % 10)
      K = (K - K % 10) / 10
    }
    return A
};

console.log(addToArrayForm(
  [2,7,0,0,0,9,0,4], 181))