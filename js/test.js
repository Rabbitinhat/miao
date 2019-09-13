function calcOne(n) {
  let count = 0;
  // n > 0   
  for (let i = n; i != 0; i >>>= 1) {
    if (i & 1) {
      count++;
    }
  }
  return count;
}

function showInt(n) {
  let num = "";
  for(let i = n; i != 0; i >>>= 1) {
    num = (i & 1) + num;
  }
  return num;
}

console.log(showInt(2e9));
console.log(showInt(2e9 << 1));

console.log(2e9 << 1);

a = parseInt('100000000', 16);
console.log(a);
console.log(showInt(parseInt('1e31'), 2));
console.log(showInt(a));
b = parseInt('1111', 2);
console.log(showInt(b));
console.log(a | b);
console.log(showInt(a|b));
console.log(Number.MAX_VALUE);

function change(n, base){
  var sum = ""
  while(n>0){
    sum = (n % base) + sum
    n = Math.floor(n / base)
  }
  return sum;
}
console.log(change(10, 2))

var b = 2
function ab(){
  console.log(b)
}

function c(){
  var b = 4
  ab()
}
c()


function getCorelationsOf(event){
  var core = {}
  core.name = event
  core.relations = phi(tableFor(event, journal));
  corelations.push(core)
}

function f(x){
  if(x === 0) return 0
  else return 2 * f(x-1) + x * x 
}

console.log(f(4))

function arrayToList3(ary){
  if(ary.length === 0) return null
  else return {value: ary[0], next: arrayToList3(ary.slice(1))}
}

function listToArray(list){
  let result = []
  for(let i=list; i !== null; i = i.next){
    result.push(i.value)
  }
  return result
}

function listToArray(list){
  if(list === null){
    return []
  }else{
    // * ...展开
    return [list.value, ...listToArray(list.next)]
  }
}

console.log(listToArray(arrayToList3([])))

function insert(list, index, value){
  index = index < 0 ? -index : index
  // * 链表为空时
  if(!list){
    list = {
      value: value,
      next: null
    }
  }
  // * 在链表头部添加新节点
  if(index === 0){
    list = {
      value: value,
      next: list
    }
  }
  // * 在链表中添加新节点
  let head = list
  let idx = 0
  // * 遍历链表至要插入位置的前一个链表节点; list.next !== null 当index>list.size, 在list的结尾添加节点
  while(idx++ !== index - 1 && list.next !== null){
    list = list.next
    idx++
  }
  list.next = {
    value: value,
    next: list.next
  }
  return head
}

function nth(list, index){
  // * 参数非链表(null), 索引超过链表长度
  if(!list){
    return undefined
  }
  if(index === 0){
    return list.value
  }else{
    return nth(list.next, index--)
  }
}

// * test
c = 0
// * 存放已计算过的值
var cache = []
function fibb(n){
  if(cache[n]){
    return cache[n]
  }
  c++
  // * 1, 1,
  if(n <= 1) return 1
  var r = fibb(n-1) + fibb(n-2)
  cache[n] = r
  return r
}

// * 过滤掉不符合函数条件的元素, 保留符合条件的元素
function filter(ary, test){
  let result = []
  for(let i=0; i<ary.length; i++){
    if(test(ary[i])) result.push(ary[i])
  }
  return result
}

console.log(filter())

function filter(ary, test){
  let passed = []
  for(let i in ary){
    if(test[i]){
      passed.push[i]
    }
  }
  return passed
}

// * map 返回执行mapper后的数组元素
function map(ary, mapper){
  let result = []
  for(let element in ary){
    result.push(mapper(element))
  }
  return result
}

// * count char
function countChar(str){
  let count = 0
  for(let char of str){
    count++
  }
  return count
}

console.log("Function CountChar")
console.log(countChar("1212adsdsda"))
console.log(`length: ${"1212adsdsda".length}`)
// * emoji 每个字符包含两个code units
console.log(countChar("🐴👟"))
console.log(`length: ${"🐴👟".length}`)

// ＊ reduce
function reduce(ary, reducer, initialVal=ary[0]){
  let i = arguments.length === 2 ?  1 : 0
  for(; i<ary.length; i++){
    initialVal = reducer(initialVal, ary[i])
  } 
  return initialVal
}
console.log(reduce([1, 2, 3, 4], (a,b)=>a+b))

console.log(reduce([1, 2, 3, 4], (a, b)=>a*b), 1)

console.log([1, 2, 3, 4, 5].reduce(function(memo, item){
  return memo > item ? memo : item
}, 0))

// * 对数组方法传入数组元素返回NaN, 而reduce自动发送4个参数, current value; ary; reducer function; 
console.log([1, 2, 3, 4, 5].reduce(Math.min))

console.log(reduce([1,2,3,4,5], Math.min ))

// ! Counting Sorting
console.log("Counting Sort")

// * sort -1 升序 0 1 降序
let array = new Array(8).fill(0).map(x=>Math.floor(Math.random() * 30))

function countingSort(ary){
  let c_ary = []
  for(let i=0; i<ary.length; i++){
    if(c_ary[ary[i]]){
      c_ary[ary[i]]++
    }else{
      c_ary[ary[i]] = 1
    }
  }
  if(c_ary[0] === undefined) c_ary[0] = 0
  // * 累加数组中数据, 得到每个数据的位置
  for(let i=1; i<c_ary.length; i++){
    if(c_ary[i] !== undefined){
      c_ary[i] = c_ary[i-1] + c_ary[i]
    }else{
      c_ary[i] = c_ary[i-1]
    }
  }
  // * 根据c_ary的值得到每项的位置
  // * i = c_ary[c_ary.length-1] 倒着输入result, 保证算法稳定性 
  let result = []
  for(let i = c_ary[c_ary.length-1] - 1; i>=0; i--){
    result[c_ary[ary[i]] - 1] = ary[i]
    c_ary[ary[i]] -= 1
  }
  return result
}

console.log(array)
console.log(countingSort(array))

function countSort(ary){
  const c = []
  for(let i=0; i<ary.length; i++){
    const j = ary[i]
    c[j] >= 1 ? c[j]++ : c[j] = 1
  }
  let D = []
  for(let j=0; j<c.length; j++){
    if(c[j]){
      while(c[j] > 0){
        D.push(j)
        c[j]--
      }
    }
  }
  return D
}

var sortArray = function(nums) {
  const C = []
  for(let i=0; i<nums.length; i++){
    const j = nums[i]
    C[j] >= 1 ? C[j]++ : C[j] = 1
  }
  let D = []
  for(let j=0; j<C.length; j++){
    if(C[j]){
      while(C[j]>0){
        D.push(j)
        C[j]--
      }
    }
  }
  return D
}

console.log(sortArray(array))

// NOTE tag string 標簽字符串
// NOTE strings參數為模板字符串被占位符分隔后的字符串數組
function template(strings, ...keys){
  return (function(...values){
    var dict = values[values.length-1] || {}
    // ANCHOR 保留模板字符串中字符串部分
    var result = [strings[0]]
    keys.forEach(function(key, i){
      var value = Number.isInteger(key)? values[key] : dict[key]
      result.push(value, strings[i+1])
    })
    return result.join('')
  })
}

var t1Closure = template`Hi! ${0}goo${1}d${0}!`
console.log(t1Closure('Y', 'A'))
var t2Closure = template`JavaScript ${0}${'foo'}`
console.log(t2Closure('Hello', {foo: 'World'}))

function isEqual(value, other) {
  if (value !== value && other !== other) return true;
  if (isObject(value) && isObject(other)) {
      const valueKeys = Object.keys(value);
      const otherKeys = Object.keys(other);
      if (valueKeys.length !== otherKeys.length) return false;
      for (let item in value) {
         if (isEqual(value[item], other[item])) { 
              continue;
          } else {
              return false;
          }
      }
      return true
  }
  return value === other;
}