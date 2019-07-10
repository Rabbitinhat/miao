var damiao = function(){
  function compact(ary){
    let result = []
    for(let element of ary){
      if(element) result.push(element)
    }
    return result
  }

  return {
    compact
  }
}()