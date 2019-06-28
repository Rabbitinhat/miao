var removeDuplicates = function(nums) {
  for(var i=0, j=1; j<nums.length;j++){
          if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
          }
  }
  return i+1
};

console.log(removeDuplicates([1,1,2,2,3,4,5,6,6,6,6]))