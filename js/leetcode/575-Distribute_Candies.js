var distributeCandies = function(candies) {
    let kinds = {}
    let count = 0
    for(let i of candies){
      if(kinds[i]){
        kinds[i]++
      }else{
        kinds[i] = 1
        count++
      }
    }
    if(count > candies / 2) return count - (candies / 2)
    else return count
};