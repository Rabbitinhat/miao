var validUtf8 = function(data) {
  let cnt = 0
  for(let i=0; i<data.length; i++){
    // * 计数为0时, 表示是新的编码开始位置
    if(cnt === 0){
      // * 如果小于128, 则为1byte表示
      if(data[i] < 128) continue
      // * 通过无符号右移并且和特定的二进制数字比较判断UTF-8的存储位数
      else if(data[i] >>> 5 === 0b110){
        cnt = 1
        continue
      }
      else if(data[i] >>> 4 === 0b1110){
        cnt = 2
        continue
      }
      else if(data[i] >>> 3 === 0b11110){
        cnt = 3
        continue
      }else{
        // * 当开始位数为0b10时
        return false
      }
    }
    if(cnt > 0){
      // * cnt大于0, 表示在UTF-8编码之中, 判断数字开头两位是否为0b10
      if(data[i] >>> 6 === 0b10){
        cnt--
      }else{
        return false
      }
    }
  }
  // * cnt不为0表示数字小于实际编码长度
  return cnt === 0 ? true : false
};


console.log(validUtf8([237]))