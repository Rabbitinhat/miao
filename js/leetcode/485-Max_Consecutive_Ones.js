var findMaxConsecutiveOnes = function(nums) {
  var max = 0
  var sign = 0
  var counter = 0
  for(let i=0, len=nums.length; i<len; i++){
    if(nums[i] === 1 && sign === 0){
      sign = 1
      counter++
    }else if(nums[i] === 1 && sign === 1){
        counter++
    }else if(nums[i] === 0 && sign === 1){
      if(max < counter) max = counter
      sign = 0
      counter = 0
    }else{
        continue
    }

  }
  if(max < counter) max = counter
  return max
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))