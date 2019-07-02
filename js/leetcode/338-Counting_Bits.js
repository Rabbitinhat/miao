// * 计算小于等于数字的所有数字1的个数
var countBits = function(num) {
  var list = [];
  for (let i = 0; i < num + 1; i++) {
    list.push(countOne(i));
  }
  return list;
};

function countOne(n) {
  let count = 0;
  while (n > 0) {
    if ((n & 1) === 1) count++;
    n >>>= 1;
  }
  return count;
}

console.log(countBits(5));

var countBits = function(num) {
  var result = [0];
  for (var i = 1; i <= num; i++) {
    // * result[i & (i - 1)] 通过i&(i-1)来去掉i中的一个1
    // * 当i只有1个1时, 去掉1后就和0相同, 奇数个1时, 去掉1后和i-1的1的个数相同
    result[i] = 1 + result[i & (i - 1)];
  }
  return result;
};

console.log(countBits(5));
