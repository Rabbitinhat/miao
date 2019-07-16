//? 输出1000以内的完数
// function isComplete(n){
//   var sum = 1
//   var sum_sqrt = Math.sqrt(n)
//   //如果对sum_sqrt取整时, 对于因数恰好是位于平方根上下取整的整数, 就会被忽略
//   for(var i=1; i<sum_sqrt; i++){
//     if(n % i === 0 && i !== 1) sum += (i + n / i)
//   }
//   //当n为完全平方数时, 只加上一个i即可
//   if(i * i === n){
//     sum += i;
//   }
//   return sum === n ? "YES" : "NO"
// }

// for(let i=1; i<10000+1; i++){
//   if(isComplete(i) === "YES") console.log(i)
// }

let ANCESTRYFILE = JSON.parse(require("./ancestry"));
function calc(life) {
  let sum = 0;
  for (let element of life) {
    sum += element.died - element.born;
  }
  return sum / life.length;
}

console.log(calc(ANCESTRYFILE));

// * 计算19c的平均年龄
function is19c(file) {
  return file.born >= 1800 && file.born < 1900;
}

function age(peo) {
  return peo.died - peo.born;
}

function sum(count, a) {
  return count + a;
}

console.log(
  ANCESTRYFILE.filter(is19c)
    .map(age)
    .reduce(sum) / ANCESTRYFILE.filter(is19c).length
);

// * 算出函数特定位置斜率的函数
function d(f) {
  return function(x) {
    var s = 0.00001;
    var x1 = x - s;
    var x2 = x + s;
    var y1 = f(x1);
    var y2 = f(x2);
    return (y2 - y1) / (x2 - x1);
  };
}

fp = d(x => x * x);
console.log(fp(3));

// * acc(Accumnulator 累加器) cur(current value 当前值) idx(current index 当前索引) src(source Array 原数组)
function average(acc, cur, idx, src) {
  acc = cur + src[idx] / src.length;
  return acc;
}

function average(memo, item, index) {
  return (memo * index + item) / (index + 1);
}
console.log([1, 2, 3, 4, 5, 6].reduce(average));
console.log(
  ANCESTRYFILE.filter(is19c)
    .map(age)
    .reduce(average)
);

// console.log(ANCESTRYFILE
//   .filter(man)
//   .filter(is19C)
//   .map(age)
//   .reduce(average)
// )

// * src[idx] 就为 cur, 初始值为acc
var squares = [1, 2, 3, 4, 5].reduce(function(acc, cur, idx, src) {
  cur = cur * cur;
  acc.push(cur);
  return acc;
}, []);

console.log(squares);

// key value
function keyBy(ary, key) {
  let result = [];
  for (let element of ary) {
    if (element[key]) result.push(element);
  }
  return result;
}

// console.log(keyBy(ANCESTRYFILE, "name"))
// * 返回新对象, 将指定的对象属性值作为新对象的属性名
function keyBy(ary, key) {
  return ary.reduce((acc, cur) => {
    acc[cur[key]] = cur;
    return acc;
  }, {});
}

console.log(keyBy(ANCESTRYFILE, "name")["Philibert Haverbeke"]);

let byName = {};
ANCESTRYFILE.forEach(x => (byName[x.name] = x));
console.log(byName["Philibert Haverbeke"]);

function reduceAncestors(person, f, defaultValue) {
  // * 给定一个人, 计算在某方面的值
  function valueFor(person) {
    // * 最小情况
    if (person == null) return defaultValue;
    // * 给定一个人, 及其父母在某方面的值, 计算该人某方面的值
    else
      return f(
        person,
        valueFor(byName[person.mother]),
        valueFor(byName[person.father])
      );
  }
  return valueFor(person);
}

console.log(
  reduceAncestors(byName[""], function(p, fromFather, fromMother) {
    if (p.name == "") {
      return 1;
    } else {
      return (fromFather + fromMother) / 2;
    }
  })
);

function shareDNA(person, fromMother, fromFather) {
  if (person.name === "Pauwels van Haverbeke") return 1;
  else return (fromMother + fromFather) / 2;
}

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, shareDNA, 0) / 4);

// * 二叉树
// * 二叉链表
let root = {
  val: 3,
  left: null,
  right: null
}
// * N表示空缺的节点
[2, 3, 4, 5, N, 6, N, N, N, 6, 7, N, N]
[(2, 3, 4, 6, 7, 6, 5)];

// * 将root在数组rootPos位置的一个由数组表达的二叉树; 转换为二叉链表表示
function ary2tree(ary, rootPos = 0) {
  // * 当rootPos为
  if (rootPos >= ary.length || ary[rootPos] === null) {
    return null;
  }
  var root = {
    val: ary[rootPos],
    // * 递归查找left, right子节点位置
    left: ary2tree(ary, rootPos * 2 + 1),
    right: ary2tree(ary, rootPos * 2 + 2)
  };
  return root;
}


// * 树转数组
function tree2ary(pos = 0, root, result = []) {
  if (root) {
    result[pos] = root.val;
    tree2ary(pos * 2 + 1, root.left, result);
    tree2ary(pos * 2 + 2, root.right, result);
  }
  return result;
}

// console.log(tree2ary(0, a, []));

// * 将数组转换为tree, 数组中leaf节点不保存为空的左右子节点
function lcary2tree(ary) {
  // * ary
  if (ary.length === 0) return null;
  // * 设置root节点
  let root = {
    val: ary[0],
    left: null,
    right: null
  };

  let nodes = [root];
  // * 循环数组
  for (let i = 1; i < ary.length; i++) {
    // * 将nodes中保存的上一节点弹出
    let curr = nodes.shift();

    // * left节点放在前面, 因此先判断
    if (ary[i] !== null) {
      let node = {
        val: ary[i],
        left: null,
        right: null 
      };
      curr.left = node;
      nodes.push(node);
    } else {
      curr.left = null;
    }
    i++;
    if (i >= ary.length) break;
    if (ary[i] !== null) {
      let node = {
        val: ary[i],
        left: null,
        right: null
      };
      curr.right = node;
      nodes.push(node);
    }else{
      curr.right = null
    }
  }
  return nodes;
}

function lctree2ary(root) {
  if (root) {
    var result = [];
    var nodes = [root];
    while (nodes.length) {
      var curr = nodes.shift();
      if (curr) {
        result.push(curr.val);
        nodes.push(curr.left, curr.right);
      } else {
        result.push({val: null});
      }
    }
  }
}

let a = lcary2ary([1, 2, 3, 4, 5, 6]);
console.log(a);
console.log(lctree2ary(a))

// * 快排

function quickSort(ary){
  if(ary.length < 2) return ary.slice()
  // * 取得数组中随机元素
  let k = ary[Math.floor(Math.random * ary.legnth)]
  // * 建立3个新的空数组
  let big = []
  let equal = []
  let small = []
  // * time: O(N * logN)
  // * space: O(N)
  for(let i=0; i<ary.length; i++){
    if(ary[i] > k){
      big.push(ary[i])
    }else if(ary[i] < k){
      small.push(ary[i])
    }else{
      equal.push(ary[i])
    }
  }
  // * 每次使用一半的元素长度
  big = quickSort(big)
  small = quickSort(small)
  return [...small, ...equal, ...big]
}

function swap(ary, i, j){
  let temp = ary[i]
  ary[i] = ary[j]
  ary[j] = temp
}
// * 对于所有元素都相同的数组来说, 性能会退化为n*n, 调用栈也会达到n层
function quickSort(ary, start=0, end=ary.length-1){
  let random = Math.floor(Math.random() * (end - start + 1) + start)
  swap(ary, random, ary.length-1)

  let i = start - 1
  for(let j = start; j < end; j++){
    if(ary[j] < ary[end]){
      i++
      swap(ary, i, j)
    }
  }

  // * i指向下一个大于random的值
  i++
  swap(ary, i, end)
  
  quickSort(ary, start, i-1)
  quickSort(ary, i + 1, end)

  return ary

}

// * sort -1 升序 0 1 降序
let array = new Array(20).fill(0).map(x=>Math.floor(Math.random() * 30))
console.log(array)

function countingSort(ary){
  let c_ary = []
  for(let i=0; i<ary.length; i++){
    c_ary[ary[i]] ++
  }
  console.log(c_ary)
  // * 累加数组中数据, 得到每个数据的位置
  for(let i=1; i<c_ary.length; i++){
    c[i] = c[i] + c[i-1]
  }
  // * 根据c_ary的值得到每项的位置
  let result = []
  for(let i=0, len = c_ary[c_ary.length-1]; i<len; i++){
    result[c_ary[i] - 1] = ary[i]
    c_ary[i] -= 1
  }
  return result
}

function bind(f, ...fixedArgs){
  return function(...args){
    return f(...fixedArgs, ...args)
  }
}

function bind(f){
  var fixedArgs = Array.from(arguments).slice(1)
  return function(){
    var args = Array.from(arguments)
    return f.apply(null, fixedArgs.concat(args))
  }
}

