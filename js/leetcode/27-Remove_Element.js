var removeElement = function(nums, val) {
  for(var i=0, j=0; j<nums.length; j++){
    if(nums[i] !== val){
      i++
    }else if(nums[i] === val && nums[j] !== val){
      nums[i] = nums[j]
      nums[j] = val
      i++
    }else{
      continue
    }
  }
  return i
};
console.log(removeElement([0,1,2,2,3,0,4,2], 2))