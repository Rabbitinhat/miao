var missingNumber = function(nums) {
  let n = 0
  for(let i=0; i<=nums.length; i++){
    n += i
  }
  for(let i=0; i<nums.length; i++){
    n -= nums[i]
  }
  return n
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))