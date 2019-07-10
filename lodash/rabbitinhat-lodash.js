var rabbitinhat = function(){
  function compact(ary){
    let result = []
    for(let element of ary){
      if(element) result.push(element)
    }
    return result
  }

  return {
    compact,
  }
}()

// console.log(rabbitinhat.compact([0, 1, false, 2, '', 3]))