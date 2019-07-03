var findWords = function(words) {
    let keyboard = {
      rowone: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      rowtwo: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      rowthree: ["z", "x", "c", "v", "b", "n", "m"]
    }
    let result = []
    for(let word of words){
      let count = {oneline: 1}
      for(let w of word){
        w = w.toLowerCase()
        if(keyboard.rowone.indexOf(w) !== -1){
          if(count["rowtwo"] || count["rowthree"]){
            count["oneline"] = 0
            break
          }else{
            count["rowone"] = 1
          }
        }
        if(keyboard.rowtwo.indexOf(w) !== -1){
          if(count["rowone"] || count["rowthree"]){
            count["oneline"] = 0
            break
          }else{
            count["rowtwo"] = 1
          }
        } 
        
        if(keyboard.rowthree.indexOf(w) !== -1){
          if(count["rowone"] || count["rowtwo"]){
            count["oneline"] = 0
            break
        }else{
          count["rowthree"] = 1
        }
      }
    }
    if(count["oneline"] !== 0) result.push(word) 
    }
    return result
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))