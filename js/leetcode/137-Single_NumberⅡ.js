var singleNumber = function(nums) {
    // * 有于其他元素都重复3次, 对nums的元素进行异或操作, 则剩下每个数字为一次的数组
    let result = []
    for(let index of nums){
      result.push(index)
    }
    return result
};

console.log(singleNumber())