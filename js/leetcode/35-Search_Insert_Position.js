var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    // if(nums[end] < target) return end + 1
    // if(nums[start] > target) return start
    while(start <= end){
      let middle = start + Math.floor((end - start) / 2)
      if(nums[middle] === target) return middle
      if(nums[middle] > target) {
        if(middle === start) return start
        end = middle - 1
      }
      if(nums[middle] < target){
        if(middle === end) return end + 1
        start = middle + 1
      }
    }
};

console.log(searchInsert([1,2, 7, 10], 8))