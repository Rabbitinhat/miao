// * 给定两个二进制数字的字符串, 返回和(同样也为字符串)
var addBinary = function(a, b) {
  // * 将字符串分割翻转为数组(翻转为了便于计算)
    a = a.split("").reverse()
    b = b.split("").reverse()
    // * 找出较长的数组
    let max = a.length >= b.length ? a : b
    let min = a.length >= b.length ? b : a
    // * sum为每位相加之和
    let sum = 0

    for(var i=0, j=0; i<max.length; i++, j++){
      if(j < min.length){
        // * 较短数组仍然未遍历到终点时
        sum += +max[i] + (+min[j])
      }else{
        // * 较短数组已经计算完毕, 但sum仍然>0(存在进位)
        sum += +max[i]
      }
      // * 需要进位
      if(sum >= 2){
        max[i] = sum % 2
        // * 进位数值
        sum = (sum - sum % 2) / 2
      }else{
        // * 不需进位时
        max[i] = sum
        // * sum重置为0
        sum = 0
      }
     }
    //  * 如果遍历完最大数组后, 仍然存在进位
     if(sum > 0){
      //  * max[max.length]位为添加1
       max[i] = 1
     }
    //  * 将max翻转转换为字符串返回
     return max.reverse().join("")
}

console.log(addBinary("1010", "1011"))