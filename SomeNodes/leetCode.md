# LeedCode

## 6-19

<!-- [perfect-number](https://leetcode.com/problems/perfect-number/) -->

<!--* [ugly-number](https://leetcode.com/problems/ugly-number/) -->

<!--! [sqrtx](https://leetcode.com/problems/sqrtx/) 牛顿迭代法-->

<!-- [valid-perfect-square](https://leetcode.com/problems/valid-perfect-square/) -->

<!-- [happy-number](https://leetcode.com/problems/happy-number/) 数字规律-->

<!-- [palindrome-number](https://leetcode.com/problems/palindrome-number/) -->

<!--! [powx-n](https://leetcode.com/problems/powx-n/) -->

<!--!(n & n - 1) [power-of-three](https://leetcode.com/problems/power-of-three/) -->

<!--!(n & n - 1) [power-of-four](https://leetcode.com/problems/power-of-four/) -->

<!--!(n & n - 1) [power-of-two](https://leetcode.com/problems/power-of-two/) -->

<!--!(n & n - 1) [hamming-distance](httzps://leetcode.com/problems/hamming-distance/) -->

<!-- [self-dividing-numbers](https://leetcode.com/problems/self-dividing-numbers/) -->

<!-- [base-7](https://leetcode.com/problems/base-7/) -->

<!--! 规律总结 [add-digits](https://leetcode.com/problems/add-digits/) -->

<!-- [reverse-integer](https://leetcode.com/problems/reverse-integer/) -->

## 6-25

<!-- [binary-gap](https://leetcode.com/problems/binary-gap/description/) -->

<!--! unsigned integer [reverse-bits](https://leetcode.com/problems/reverse-bits/description/) -->

<!--! sqrt 双指针 [sum-of-square-numbers](https://leetcode.com/problems/sum-of-square-numbers/description/) -->

<!-- [number-of-1-bits](https://leetcode.com/problems/number-of-1-bits/description/) -->

## 6-26

<!-- [move-zeros](https://leetcode.com/problems/move-zeroes/) -->

<!--! var b = (nums.length) * (nums.length + 1) /2
    return b-a
     [missing-number](https://leetcode.com/problems/missing-number/) -->

<!-- [plus-one](https://leetcode.com/problems/plus-one/) -->

<!-- [max-consecutive-ones](https://leetcode.com/problems/max-consecutive-ones/) -->

<!-- [fizz-buzz](https://leetcode.com/problems/fizz-buzz/) -->

<!-- [search-insert-position](https://leetcode.com/problems/search-insert-position/) -->

<!-- [merge-sorted-array](https://leetcode.com/problems/merge-sorted-array/) -->

<!-- [remove-duplicates-from-sorted-array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) -->

<!-- [two-sum-ii-input-array-is-sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) -->

<!--? [counting-bits](https://leetcode.com/problems/counting-bits/) -->

## 6-27

[multiply-strings](https://leetcode.com/problems/multiply-strings/description/)

[add-strings](https://leetcode.com/problems/add-strings/description/)

[add-binary](https://leetcode.com/problems/add-binary/description/)

[add-to-array-form-of-integer](https://leetcode.com/problems/add-to-array-form-of-integer/description/)

## 6-28

[maximum](https://leetcode.com/problems/maximum-subarray/) 此题与 Max Consecutive Ones 本质是一样的。

NOTE 数组中所有元素相邻项差之和 [minimum-moves-to-equal-array-elements](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/)
NOTE 数组中所有项和中间项的差之和 [minimum-moves-to-equal-array-elements-2](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/)
NOTE 可以外层循环数组第一项字符串, 内层循环数组值[longest-common-prefix](https://leetcode.com/problems/longest-common-prefix/)

NOTE 进制转换, 注意一下余数的表示[excel-sheet-column-number](https://leetcode.com/problems/excel-sheet-column-number/)
[excel-sheet-column-title](https://leetcode.com/problems/excel-sheet-column-title/) 这两个题目的实质是进制转换。

NOTE 6-28-14-35 斐波那契數列 [ climbing-stairs](https://leetcode.com/problems/climbing-stairs/description/)

NOTE  二分, 但要考慮多種情況(length為1, 2; length>3時, 最小元素位於數組内部, 每次選取中點, 儅中點的數組值>end, 判斷右邊; 否則判斷左邊)[find-minmum-in-rotated-sorted-array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) 二分法，不过情况比一般的二分都要复杂一些

FIXME  邊界判斷 [search-in-rotated-sorted-array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/) 与上题相同的题目，代码稍做修改应该可以过

FIXME if判斷, switch語句 [integer-to-roman](https://leetcode.com/problems/integer-to-roman/)

FIXME [roman-to-integer](https://leetcode.com/problems/roman-to-integer/)

REVIEW [distribute-candies](https://leetcode.com/problems/distribute-candies/)

NOTE 使用遞歸時, 記得保存return value[binary-search](https://leetcode.com/problems/binary-search/description/) 标准二分

NOTE Stack [valid-parentheses](https://leetcode.com/problems/valid-parentheses/)

REVIEW [utf-8-validation](https://leetcode.com/problems/utf-8-validation/description/)

REVIEW 數組排序 [squares-of-a-sorted-array](https://leetcode.com/problems/squares-of-a-sorted-array/) 双指针

NOTE 遍歷數組, 每位數字%10, /10為進位[add-to-array-form-of-integer](https://leetcode.com/problems/add-to-array-form-of-integer/description/) 水题

## 7-03

NOTE 映射, 遍歷數組兩邊 [first-unique-character-in-a-string](https://leetcode.com/problems/first-unique-character-in-a-string/description/)

NOTE 映射, hashTable [two-sum](https://leetcode.com/problems/two-sum/description/)

REVIEW  判斷字符相同?(將單詞分割排序再轉換為字符串作爲key值保存在map中(str.split("").sort().join("")), 最後forEach返回map中的值) [group-anagrams](https://leetcode.com/problems/group-anagrams)

NOTE 異或排除相等項或map記錄出現次數 [single-number](https://leetcode.com/problems/single-number)
(上题可以用全部异或做，也可以用映射做

NOTE 規律 [happy-number](https://leetcode.com/problems/happy-number)
此题如何不知道 happy number 会进入 4 的循环，则需要用映射记录出现过的数

NOTE 建立鍵盤中所有字母的映射, 按照行分別賦值0,1,2; 對數組中每個單詞的字符進行遍歷, 使用[0,0,0]記錄字母所在行的位置, 遍歷一邊單詞后, 將[0, 0, 0]中三個值相加判斷是否只需要一行
[keyboard-row](https://leetcode.com/problems/keyboard-row)

[distribute-candies](https://leetcode.com/problems/distribute-candies)
去重过程需要用映射

FIXME 使用map存储每个需要查找的字符在每个字符串的位置, 对已有的字符的位置进行更新 [find-common-characters](https://leetcode.com/problems/find-common-characters/description/)

NOTE a只需判断是否有效, 注意Array高级函数中返回false并不能中止程序, every速度慢于forEach
[valid-sudoku](https://leetcode.com/problems/valid-sudoku)

<!-- ! [isomorphic-strings](https://leetcode.com/problems/isomorphic-strings) -->

[longest-substring-without-repeating-characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## 7-04

[triangle](https://leetcode.com/problems/triangle/description/)

TODO a斐波那契数列, 找不出相关项
[unique-paths](https://leetcode.com/problems/unique-paths/)

[maximum-subarray](https://leetcode.com/problems/maximum-subarray/description/)

[linked-list](https://leetcode.com/tag/linked-list/)

[swap-nodes-in-pairs](https://leetcode.com/problems/swap-nodes-in-pairs)

## 7-11

[recover-binary-search-tree](https://leetcode.com/problems/recover-binary-search-tree/description/)

[minimum-depth-of-binary-tree](https://leetcode.com/problems/minimum-depth-of-binary-tree)

[construct-string-from-binary-tree](https://leetcode.com/problems/construct-string-from-binary-tree/description/)

[same-tree](https://leetcode.com/problems/same-tree)

[maximum-depth-of-binary-tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)

[path-sum](https://leetcode.com/problems/path-sum/description/)

[invert-binary-tree](https://leetcode.com/problems/invert-binary-tree)

[merge-two-binary-trees](https://leetcode.com/problems/merge-two-binary-trees)

## 7-12

<!-- [symmetric-tree](https://leetcode.com/problems/symmetric-tree) -->

<!-- [construct-binary-tree-from-inorder-and-postorder-traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal) -->

<!-- [construct-binary-tree-from-preorder-and-inorder-traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal) -->

<!-- ![binary-tree-lev el-order-traversal](https://leetcode.com/problems/binary-tree-level-order-traversal) -->

<!-- * [maximum-depth-of-n-ary-tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree) -->

<!-- [construct-binary-tree-from-preorder-and-postorder-traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal) -->

<!-- [sum-of-left-leaves](https://leetcode.com/problems/sum-of-left-leaves) -->

[serialize-and-deserialize-binary-tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/)

[binary-tree-preorder-traversal](https://leetcode.com/problems/binary-tree-preorder-traversal)

[binary-tree-postorder-traversal](https://leetcode.com/problems/binary-tree-postorder-traversal)

[binary-tree-inorder-traversal](https://leetcode.com/problems/binary-tree-inorder-traversal)

[delete-node-in-a-bst](https://leetcode.com/problems/delete-node-in-a-bst)

[insert-into-a-binary-search-tree](https://leetcode.com/problems/insert-into-a-binary-search-tree)

[sort-an-array](https://leetcode.com/problems/sort-an-array/) 建议每种算法都交一遍

[complex-number-multiplication](https://leetcode.com/problems/complex-number-multiplication/description/)

## 7-16

<!-- [kth-largest-element-in-an-array](https://leetcode.com/problems/kth-largest-element-in-an-array/description/ -->

<!-- [majority-element](https://leetcode.com/problems/majority-element/description/ -->

<!-- !（快排要消除重复项）[third-maximum-number](https://leetcode.com/problems/third-maximum-number/description/ -->

## 7-18

<!-- * [transpose-matrix](https://leetcode.com/problems/transpose-matrix/description/) -->

## 7-21

<!-- [kth-largest-element-in-a-stream](https://leetcode.com/problems/kth-largest-element-in-a-stream) -->
[merge-k-sorted-lists](https://leetcode.com/problems/merge-k-sorted-lists)

## 7-23

[lowest-common-ancestor-of-a-binary-tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree)

[lowest-common-ancestor-of-a-binary-search-tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree)

[balanced-binary-tree](https://leetcode.com/problems/balanced-binary-tree)

```js
function balanced(root){
  if(root){
    // * dl, dr 既表示数的深度, 也表示是否为平衡树
    // * 如果root不为平衡树, 则返回-1
    // * 如果root为平衡树, 则返回深度
    // * 
    var dl = balanced(root.left)
    if(dl === -1) return -1
    var dr = balanced(root.right)
    if(dr === -1) return -1
    if(Math.abs(dl - dr) <= 1) return Math.max(dl, dr) + 1
    else{return -1} 
  }
  return 0
}
```

[validate-binary-search-tree](https://leetcode.com/problems/validate-binary-search-tree)
```js
let previous = -Infinity
function traverse(root){
  if(root){
    if(!traverse(root.left)) return false
    if(root.val <= previous) return false
    previous = root.val
    if(!traverse(root.right)) return false
  }
  return true
}
```

[minimum-distance-between-bst-nodes](https://leetcode.com/problems/minimum-distance-between-bst-nodes)

## 7-24

[simplify-path](https://leetcode.com/problems/simplify-path/)

## 7-25
[evaluate-reverse-polish-notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/
)
## 7-26

[container-with-most-water](https://leetcode.com/problems/container-with-most-water/) two sum变形