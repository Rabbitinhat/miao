var moveZeroes = function(nums) {
  let len = nums.length
  for(var i=0, j=0; j<nums.length; j++){
      if(nums[j] !== 0 && nums[i] === 0){
        nums[i] = nums[j]
        nums[j] = 0
        i++
      }else if(nums[i] !== 0){
        i++
      }
  }
  return nums
};

console.log(moveZeroes([0,1,0,3,12]))