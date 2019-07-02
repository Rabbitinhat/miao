var isValid = function(s){
  let parenthess = []
  for(let i=0, len=s.length; i<len; i++){
    if(s[i] === ")" && parenthess[parenthess.length-1] === "("){
      parenthess.pop()
    }
    else if(s[i] === "}" && parenthess[parenthess.length-1] === "{"){
      parenthess.pop()
    }
    else if(s[i] === "]" && parenthess[parenthess.length-1] === "["){
      parenthess.pop()
    }
    else{
      parenthess.push(s[i])
    }
  }
  if(parenthess.length === 0){
    return true
  }else{
    return false
  }
}