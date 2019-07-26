/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var path = path.split("/")
    let prev = path[0]
    let stack = new Stack()
    let result = ""
    // * reduce
    for(let i=0, len = path.length; i<len; i++){
      if(path[i] === "/" || path[i] === "" || path[i] === ".") {
        continue
      }
      if(path[i] === ".."){
        if(stack.stacksize > 0){
          stack.pop()
        }else{
          continue
        }
      }else{
        stack.push(path[i])
      }
    }
    while(stack.stacksize > 0){
      result = "/" + stack.pop() + result
    }
    return result || "/"
};

class Stack{
  constructor(){
    this.top = null
    this.stacksize = 0
  }

  push(val){
    let node = {
      val: val,
      next: null
    }
    this.stacksize++
    if(this.top === null){
      this.top = node
    }else{
      node.next = this.top
      this.top = node
    }
    return this
  }

  pop(){
    if(this.top !== null){
      this.stacksize--
      let temp = this.top
      this.top = this.top.next
      return temp.val
    }
    return undefined
  }

  get size(){
    return this.stacksize
  }
}

//console.log(simplifyPath("/a/../../b/../c//.//"))
