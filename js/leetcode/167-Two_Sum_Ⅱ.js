var twoSum = function(numbers, target) {
  for(let i=0, len=numbers.length-1; i<len; i++){
    var newNum = numbers.slice(i,)
    let j = binarySearch(target - numbers[i], newNum)
    if(j>=0) return [i+1, j+i+1]
  }
};

function binarySearch(key, nums){
let begin = 0
let end = nums.length - 1
let middle = begin + Math.floor((end - begin) / 2)
while(end >= begin){
  if(nums[middle] === key) return middle
  if(nums[middle] > key) {
    end = middle - 1
    middle = begin + Math.floor((middle - begin) / 2)
  }
  if(nums[middle] < key) {
    begin = middle + 1;
    middle = begin + Math.floor((end - begin) / 2)
  }
}
return -1
}

console.log(twoSum([2,7,11,15], 9))

function binarySearch(key, nums){
  let start = 0;
  let end = nums.length-1
  while(start < end){
    if(nums[start] + nums[end] > key){
      end--
    }
    if(nums[start] + nums[end] < key){
      start++
    }
    if(nums[start] + nums[end] === key){
      return [start+1, end+1]
    }
  }
}