//!Method 1
var merge = function(nums1, m, nums2, n) {
  //*当n为0时, nums1中剩余的数字无需修改(已排序的数组)
  //*m为0时, 则需要单独将n中剩余的数字添加的nums1的前面
  while (m > 0 && n > 0) {
    //*a为nums2中最大的数字(最后一位数字) b为nums1中最大的数字
    let a = nums2[n - 1];
    let b = nums1[m - 1];
    //*如果a >= b 就将a放在第m+n个数字的位置上(作为排序后的最大元素)
    //*然后将指针前移(n--), 指向更小的数字进行比较
    //*a < b 时, 则修改nums1
    if (a >= b) {
      nums1[m + n - 1] = a;
      n--;
    } else {
      nums1[m + n - 1] = b;
      m--;
    }
  }
  while (n > 0) {
    //*此时, 由于整个有效数字为m+n个, m为0表示nums1中的数字已排好顺序, 那么剩余的n个数字
    //*正好可以放在nums1的前n个位置上
    nums1[n - 1] = nums2[n - 1];
    n--;
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

//!Method 2
var merge = function(nums1, m, nums2, n) {
  if (n === 0) return;
  let j = 0;
  function insert(start, end, ele) {
    let flag = false;
    //*nums1中找到第一个>ele的元素位置
    while (start < end) {
      if (nums1[start] >= ele) {
        //*找到后, 标记flag 中止循环
        flag = true;
        break;
      }
      //*指向下一个元素
      start += 1;
    }
    //*如果存在大于ele的元素
    if (flag) {
      //*通过start得到>ele的元素的值
      let temp = nums1[start];
      //*将值替换为ele
      nums1[start] = ele;
      //*start指向下一个值
      start += 1;
      while (start <= end) {
        //*从start开始循环到数组结尾, 将之后的所有元素后移一位
        let temp2 = nums1[start];
        nums1[start] = temp;
        temp = temp2;
        start += 1;
      }
    }
    //*如果nums1中所有元素都小于ele, 那么将ele放在nums1的结尾处
    else {
      nums1[end] = ele;
    }
  }

  for (let i = m; i < nums1.length; i++) {
    //*对于nums[2]中的每一个数字循环执行insert, 按照顺序插入nums1中
    //*insert in correct position
    insert((start = 0), (end = i), nums2[j]);
    j += 1;
  }
};

//!Method 3
var merge = function(nums1, m, nums2, n) {
  //*将nums1中多余的0去掉
  while (nums1.length > m) {
    nums1.pop();
  }
  //*对于nums2中的每个数字, 将其和nums1中的数字进行比较, 找到应该放置的位置
  for (let i = 0; i < n; i++) {
    //*index标记位置
    var index = searchInsert(nums1, nums2[i]);
    //*利用splice函数将数字插入到nums1中的正确位置
    nums1.splice(index, 0, nums2[i]);
  }
  return nums1;
};

//*在数组中查找数字, 不存在时返回应该放置的位置
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
