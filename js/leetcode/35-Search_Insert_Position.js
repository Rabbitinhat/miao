//!给定一个sorted数组和一个target值, target存在, 返回target在数组中的位置; 不存在, 返回应该放置的位置
function searchInsert(nums, target) {
  //*二分法, 确定首尾
  let start = 0;
  let end = nums.length - 1;
  // if(nums[end] < target) return end + 1
  // if(nums[start] > target) return start
  while (start <= end) {
    //*设置中点, 使用Math.floor得到整数(向下取整, 偏向start)
    let middle = start + Math.floor((end - start) / 2);
    //*如果中点位置的值为目标值, 则返回中点的位置
    if (nums[middle] === target) return middle;
    //*如果大于
    if (nums[middle] > target) {
      //*当中点为start时(end和start相邻或end和start相等) 此时, 目标值就小于数组的最小值(应在当前位置插入目标值)
      if (middle === start) return start;
      //*不是最小情况时, end重置为中点左边的值
      end = middle - 1;
    }
    //*小于
    if (nums[middle] < target) {
      //*当中点为start时(start和end的相等(相邻时, 由于Math.floor向下取整, middle为start, 此时仍需继续计算))
      //*此时目标值就大于数组的最大值, 则应放在end的下一个位置上
      if (middle === end) return end + 1;
      //*不是最大情况, 则start重置为中点右边值
      start = middle + 1;
    }
  }
}

//*利用循环找到第一个等于或大于target的数组元素的位置
function searchInsert(nums, target) {
  for(var i=0; nums[i] < target; i++){
  }
  //*如果大于数组中的全部元素, 此时i值为nums.length
  return i
}
console.log(searchInsert([1,2, 7, 10], 8))