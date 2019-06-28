var fizzBuzz = function(n) {
  let nums = []
  for(let i=1; i<n+1; i++){
    let result = ""
    if(i % 3 === 0){
      result = "Fizz"
    }
    if(i % 5 === 0){
      result += "Buzz"
    }
    nums.push(result || (i + ""))
  }
  return nums
};

console.log(fizzBuzz(15))