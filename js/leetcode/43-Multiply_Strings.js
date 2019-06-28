var multiply = function(num1, num2) {
  return nTos(sTon(num1) * sTon(num2))
};

// string to number
function sTon(str){
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let result = 0
  //10的n次方
  let dec = 1
  for(let i=str.length-1; i>=0; i--){
    for(let j=0, len=nums.length; j<len; j++){
      if(nums[j] === str[i]){
        result += j * dec
        dec *= 10
      }
    }
  } 
  return result
}

function nTos(num){
  let result = ""
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  if(num === 0){
    return "0"
  }
  while(num>0){
    result = nums[num % 10] + result
    num = (num - num % 10) / 10
  }
  return result
}
console.log(sTon("123456789"))
console.log(sTon("987654321"))
console.log(nTos(0))