// ! Method 1
// * time required : O(n)
var minimumTotal = function (triangle) {
  //  * 减少重复操作, 保存计算后的值
  var map = {}
  return findPath(0, 0)
  // * 递归
  function findPath(n, j) {
    // * 已n, j为索引
    let index = n + "," + j
    // * 如果map存在对应项, 就返回储存的值
    if(map[index]){
      return map[index]
    }
    // * 基准情况(查询到最后一行(最后一个数组元素))
    if (n === triangle.length - 1) {
      // * 返回当前数组值
      return triangle[n][j]
    } else {
    // * 否则, 为当前数组值 + 当前位置的下一行数字和右边数字的最小值
    // * 将当前结果存储在map中, 返回map当前项
      map[index] = triangle[n][j] + Math.min(findPath(n + 1, j), findPath(n + 1, j + 1))
      return map[index]
    }
  }
};

console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]))
