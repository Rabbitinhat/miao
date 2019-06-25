//递归, 超时
var climbStairs = function(n){
  if(n === 0){
    return 1;
  }
  if(n < 0){
    return 0;
  }
  return climbStairs(n-1) + climbStairs(n-2) 
};

console.log(climbStairs(44))