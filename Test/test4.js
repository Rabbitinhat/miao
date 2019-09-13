// 05
// 生成器
class Ary{
  constructor(n = 0){
    this = {}
    this.size = n
    for(let i=0; i<n; i++){
      this[i] = undefined
    }
  }

  get length(){
    return this.size
  }
  set length(len){
    if(len > this.size){
      for(let i=this.size; i<len; i++){
        this[i] = undefined
      }
    }else if(len < this.size){
      for(let i=len; i<this.size; i++){
        delete this[i]
      }
    }
  }

  slice(n){
    let revalue = new Array()
    if(Math.abs(n) >= this.size){
      return revalue
    }else{
      let sta = n > 0 ? n : this.size + n
      for(let i=sta, j=0; i<this.size; i++, j++){
        revalue[j] = this[i]
      }
    }
  }

  splice(idx, num, ...replace){

  }

  map(f){
    for(let i=0; i<this.size; i++){
      this[i] = f(this[i], i)
    }
  }

  forEach(f){
    for(let i=0; i<this.size; i++){
      f(this[i])
    }
  }

  some(f){
    for(let i=0; i<this.size; i++){
      if(f(this[i])) return true
    }
    return false
  }
  every(f){
    for(let i=0; i<this.size; i++){
      if(!f(this[i])) return false
    }
    return true
  }

}


var a = [,2,5,,,] //=>[empty, 2, 5, empty, empty, empty]

