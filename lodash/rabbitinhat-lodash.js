// @ts-check
var rabbitinhat = (function() {
  // ANCHOR  Array

  /**
   * 将array分割为size长度的数组, 如果数组长度无法完整分割为size大小, 最后一个数组存储剩余的元素
   * @param {array} array
   * @param {number} size
   * @return `array`
   */
  function chunk(array, size = 1) {
    let result = [];
    for (var i = 0; i + size < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    result.push(array.slice(i));
    return result;
  }

  /**
   *
   * @param {array} ary
   * @return `array`
   */
  function compact(ary) {
    let result = [];
    for (let element of ary) {
      if (element) result.push(element);
    }
    return result;
  }
  /**
   *
   * @param {Array} ary
   * @param  {...*} values
   */
  function concat(ary, ...values) {
    let result = [];
    // * 先将数组中保存的元素放入新数组中
    for (let element of ary) {
      result.push(element);
    }
    // * 对参数数组中的值进行判断
    for (let element of values) {
      // * 如果参数为数组
      if (Array.isArray(element)) {
        // * 遍历数组元素, 将其push进result数组中
        for (let e of element) {
          result.push(e);
        }
      } else {
        // * 不为数组则直接push
        result.push(element);
      }
    }
    return result;
  }

  /**
   *
   * @param {Array} ary
   * @param  {*} values
   */
  function difference(ary, ...values) {
    let result = [];
    // * result 作为ary的副本
    result = ary.slice();
    for (let ary of values) {
      // * 每次循环都对result重新赋值, 过滤掉额外数组中出现的元素
      result = result.filter(x => binarySearch(x, ary) === -1);
    }
    return result;
  }
  // * 二分查找
  /**
   *
   * @param {Number} value
   * @param {Array} ary
   */
  function binarySearch(value, ary) {
    let start = 0;
    let end = ary.length - 1;
    while (start <= end) {
      let middle = start + Math.floor((end - start) / 2);
      if (ary[middle] > value) end = middle - 1;
      if (ary[middle] < value) start = middle + 1;
      if (ary[middle] === value) return middle;
    }
    return -1;
  }
  // * 一种函数, 但并未具体实现; 在元素进行相等性比较时, 会使用该函数进行判断
  // function SameValueZero(a, b){
  //   if(typeof x !== typeof y) return false
  //   if(typeof x === "number"){
  //     if(isNaN(x) && isNaN(y)) return true
  //     if(x !== y) return false
  //     return true
  //   }
  //   return SameValueNonNumber(x, y)
  // }
  // function SameValueNonNumber(x, y){

  // }

  /**
   *
   * @param {Array} ary
   * @param {Object} values
   * @param {String} comparator
   */
  function differenceBy(ary, values, comparator) {
    let result = [];
    result = ary.slice();
    // FIXME
    comparator = x => eval(comparator);
    values.forEach(x => comparator);
    result = result.filter(x => x in values);
    return result;
  }

  /**
   * 返回从头部去掉n个元素后剩余的数组
   * @param {array} array
   * @param {number} n
   * @return {array}
   */
  function drop(array, n = 1) {
    return array.slice(n);
  }

  /**
   * 返回从尾部去掉n个元素后剩余的数组
   * @param {array} array
   * @param {number} n
   * @return {array}
   */
  function dropRight(array, n = 1) {
    if (n > array.length) return [];
    else return array.slice(0, array.length - n);
  }

  /**
   * 相反方向执行dropWhile
   * @param {array} array
   * @param {function} predicate
   * @return {array}
   */
  function dropRightWhile(array, predicate) {
    let predicate_f = iteratee(predicate);
    for (let i = array.length - 1; i >= 0; i--) {
      if (!predicate_f(array[i])) return dropRight(array, array.length - i - 1);
    }
    return [];
  }

  /**
   * 传入一个array和函数, 数组执行drop操作, 直到函数遍历数组元素返回false, 返回剩余的数组
   * @param {array} array
   * @param {function} predicate
   * @return {array}
   */
  function dropWhile(array, predicate) {
    let predicate_f = iteratee(predicate);
    for (let i = 0; i < array.length; i++) {
      if (!predicate_f(array[i])) return drop(array, i);
    }
    return drop(array, array.length);
  }

  /**
   * 将array从start, 到end之前的位置的值填充为value
   * @param {array} array
   * @param {*} value
   * @param {number} start
   * @param {number} end
   * @return {array}
   */
  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }

  /**
   * 迭代collection, 返回第一个执行predicate返回true的元素索引
   * @param {array} collection
   * @param {function} predicate
   * @param {number} fromIndex
   * @return {number | undefined}
   */
  function findIndex(collection, predicate, fromIndex = 0) {
    let predicate_F = iteratee(predicate);
    for (let i = fromIndex; i < collection.length; i++) {
      if (predicate_F(collection[i])) return i;
    }
    return undefined;
  }

  /**
   * 从尾部迭代collection, 返回第一个执行predicate返回true的元素索引
   * @param {array} array
   * @param {function} predicate
   * @param {number} fromIndex
   * @return {number}
   */
  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    let predicate_F = iteratee(predicate);
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate_F(array[i])) return i;
    }
    return -1;
  }

  /**
   * toPairs的翻转, 从[key, value]的数组返回object
   * @param {array} pairs
   */
  function fromPairs(pairs) {
    let result = {};
    for (let pair of pairs) {
      result[pair[0]] = pair[1];
    }
    return result;
  }

  /**
   * 展平一层数组
   * @param {Array} array
   */
  function flatten(array) {
    return [].concat(...array);
  }

  /**
   * 递归展平数组
   * @param {Array} ary
   */
  function flattenDeep(ary) {
    let result = [];
    for (let element of ary) {
      if (Array.isArray(element)) {
        let flatten = flattenDeep(element);
        result.push(...flatten);
      } else {
        result.push(element);
      }
    }
    return result;
  }

  /**
   * 展平给定深度的数组
   * @param {Array} array
   * @param {Number} depth
   */
  function flattenDepth(array, depth = 1) {
    for (let i = 0; i < depth; i++) {
      array = flatten(array);
    }
    return array;
  }

  /**
   * Gets the first element of `array`
   * @param {array} array
   * @returns {*} Returns the first element of `array`
   */
  function head(array) {
    return array[0];
  }

  /**
   * 从fromIndex位置开始到末尾查找数组中元素值为value的索引
   * @param {array[*]} array
   * @param {number} value
   * @param {number} fromIndex
   */
  function indexOf(array, value, fromIndex = 0) {
    fromIndex = fromIndex % array.length;
    fromIndex = fromIndex >= 0 ? fromIndex : array.length + fromIndex;
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === value) return i;
    }
    return -1;
  }

  /**
   * 从fromIndex位置开始到首部, 查找数组中元素值为value的索引
   * @param {array} array
   * @param {*} value
   * @param {number} fromIndex
   */
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    if (fromIndex > array.length - 1) fromIndex = array.length - 1;
    fromIndex = fromIndex >= 0 ? fromIndex : array.length + fromIndex;
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] === value) return i;
    }
    return -1;
  }

  /**
   * 返回数组中除了最后一个元素外其他元素
   * @param {array} array
   * @return {array}
   */
  function initial(array) {
    return array.slice(0, array.length - 1);
  }

  /**
   * 传入多个array, 返回共有值组成的数组
   * @param {array[]} arrays
   * @return {array}
   */
  function intersection(...arrays) {
    let result = arrays[0].filter(x =>
      arrays.every(val => val.indexOf(x) > -1)
    );
    return result;
  }

  /**
   * 传入多个array, 返回根据传入iteratee比较后相同的值组成的数组
   * @param  {...any} args
   * @return {array}
   */
  function intersectionBy(...args) {
    let iteratee_f = iteratee(args.pop());
    let arrays = args.slice();
    return arrays[0].filter(x =>
      arrays.every(val => iteratee_f(val) === iteratee_f(x))
    );
  }

  /**
   * 转换array为string, 以separator作为分隔符
   * @param {array} array
   * @param {*} separator
   * @return {string}
   */
  function join(array, separator) {
    let result = "";
    for (let i = 0; i < array.length - 1; i++) {
      result += array[i] + "" + separator;
    }
    result += array[array.length - 1];
    return result;
  }

  /**
   * 返回数组的末尾元素
   * @param {array} array
   * @return {*}
   */
  function last(array) {
    return array[array.length - 1];
  }

  /**
   * 从array中删除values中包含的值, 会改变数组本身
   * @param {array} array
   * @param  {...*} values
   * @return {array}
   */
  function pull(array, ...values) {
    return (array = array.filter(x => values.indexOf(x) === -1));
  }

  /**
   * 从array中删除调用predicate返回true的值, 返回删除值组成的数组, 会改变数组本身
   * @param {array} array
   * @param {function} predicate
   * @return {array}
   */
  function remove(array, predicate) {
    let predicate_F = iteratee(predicate);
    let result = array.filter(x => predicate(x));
    pull(array, result);
    return result;
  }

  // ANCHOR Collection

  /**
   * 迭代collection, 返回第一个执行predicate返回true的元素
   * @param {array | object} collection
   * @param {function} predicate
   * @param {number} fromIndex
   */
  function find(collection, predicate, fromIndex = 0) {
    let predicate_F = iteratee(predicate);
    // let keys = collection.keys()
    for (let i = fromIndex; i < collection.length; i++) {
      if (predicate_F(collection[i])) return collection[i];
    }
    return undefined;
  }

  /**
   *
   * @param {array} ary
   * @param {function} predicate
   * @return boolean
   */
  function every(ary, predicate) {
    return ary.reduce((result, x, item, val, ary) => {
      return result && predicate(item, val, ary);
    }, true);
  }

  /**
   * 调用func时最多传入n个参数, 忽略额外的参数
   * @param {function} func
   * @param {number} n
   * @return *
   */
  function ary(func, n = func.length) {
    return function(...args) {
      return func(...args.slice(0, n));
    };
  }

  /**
   * predicate对ary中任何元素返回true, every返回true; 如果predicate对ary中的元素返回false, 停止继续运算, 返回false
   * @param {array[]} ary
   * @param {string} predicate
   * @return boolean
   */
  function every(ary, predicate) {
    // FIXME
    let predicate_f = iteratee(predicate);
    return !some(ary, negate(predicate_f));
  }

  /**
   * 遍历collection中每个元素, 对其调用iteratee, 返回调用结果组成的数组
   * @param {object | array} collection
   * @param {function} iteratee
   * @return {array}
   */
  function map(collection, iteratee) {
    let result = [];
    for (let ele in collection) {
      result.push(iteratee(collection[ele]));
    }
    return result;
  }

  /**
   *
   * @param {array} ary
   * @param {function} predicate
   * @return boolean
   */
  function some(ary, predicate) {
    return ary.reduce((result, x, item, val, ary) => {
      return result || predicate(item, val, ary);
    }, false);
  }

  // * _.some(collection, [predicate=_.identity])
  /**
   * predicate对collection中任何值返回true, 中断遍历, some返回true
   * @param {Array} ary
   * @param {string} predicate
   * @return boolean
   */
  function some(ary, predicate) {
    // ! eval
    let predicate_f = iteratee(predicate);
    for (var i = 0; i < ary.length; i++) {
      if (predicate_f(ary[i], i, ary)) return true;
    }
    return false;
  }

  // ANCHOR Function

  /**
   * 调用(called)`func`n次或更多时, 才开始调用(invoke)`func`
   * @param {number} n
   * @param {function} func
   * the oppsite of _.before
   */
  function after(n, func) {
    let times;
    return function(...args) {
      times++;
      if (times >= n) return func(...args);
    };
  }

  /**
   * meoize 记忆f执行后的值, 调用同样参数时, 返回存储在缓存中的值
   * @param {Function} func
   */
  function memoize(func) {
    let cache = {};
    return function(arg) {
      return cache[arg] ? cache[arg] : (cache[arg] = func(arg));
    };
  }

  /**
   * 当func调用超过n(>=n)次时, 不再重新调用func
   * @param {number} n
   * @param {function} func
   * opposite of _.after
   */
  function before(n, func) {
    let times = 0;
    let result;
    return function(...args) {
      times++;
      if (times < n) return (result = func(...args));
      return result;
    };
  }

  // FIXME
  /**
   * 使用thisArg作为this绑定, 调用函数func, 传入多个参数(保存在partials中)
   * @param {Function} func
   * @param {object} thisArg
   * @param  {*} partials
   */
  function bind(func, thisArg, ...partials) {
    return function(...args) {
      var actualArgs = [...partials];
      for (let i = 0; i < actualArgs.length; i++) {
        // 找到占位符位置时(占位符为'_')
        if (actualArgs[i] === "_") {
          // 将占位符替换为返回函数传入的参数
          actualArgs[i] = args.shift();
        }
      }
      return func.apply(thisArg, actualArgs);
    };
  }

  /**
   * 创建一个函数使用相反的arguments调用func
   * @param {Function} func
   * @return *
   */
  function flip(func) {
    return function(...args) {
      return func(...args.reverse());
    };
  }

  /**
   * 返回调用predicate的相反结果
   * @param {function} predicate
   * @return function
   */
  function negate(predicate) {
    return function(args) {
      return !predicate(args);
    };
  }

  /**
   * 创建将数组作为参数的函数
   * @param {function} func
   * @return `function`
   * not use f(...args)
   */
  function spread(func) {
    return function(ary) {
      return func.apply(null, ary);
    };
  }

  /**
   * func只接受一个参数, 忽略多余参数
   * @param {Function} fn
   */
  function unary(fn) {
    return function(...args) {
      return fn(arguments[0]);
    };
  }

  //  ANCHOR Lang

  /**
   * 比较两个object, 判断source中的属性值和object中的对应属性值相等
   * @param {object} object
   * @param {object} source
   * @return {boolean}
   */
  function isMatch(object, source) {
    if (
      (typeof object !== "object" && typeof source !== "object") ||
      object === null ||
      source === null
    ) {
      return object === source;
    }
    for (let obj in source) {
      if (typeof source[obj] === "object" && source[obj] !== null) {
        if (!isMatch(object[obj], source[obj])) {
          return false;
        }
      } else if (object[obj] !== source[obj]) return false;
    }
    return true;
  }

  /**
   * 对两个任意值进行深度比较(`deep comparison`), 判断它们是否相等
   * @param {*} value
   * @param {*} other
   * @return {boolean}
   */
  function isEqual(value, other) {
    if (typeof value === typeof other) {
      let type = typeof value;
      // * NaN
      if (value !== value && other !== other) {
        return true;
      }
      if (type === "object") {
        if (Object.keys(value).length === Object.keys(other).length) {
          for (let prop in value) {
            if (value.hasOwnProperty(prop) && other.hasOwnProperty(prop)) {
              if (!isEqual(value[prop], other[prop])) return false;
            }
          }
          return true;
        }
        return false;
      }
      return value === other;
    }
  }

  // ANCHOR Math

  // ANCHOR Number

  // ANCHOR Object

  /**
   *
   * @param {object} object
   * @param {array} path
   * @param {*} defaultValue
   */
  function get(object, path, defaultValue) {
    if (object === undefined) return defaultValue;
    return get(object[path[0]], path.slice(1), defaultValue);
  }

  /**
   * 通过path参数得到object中对应的属性, 如果值为undefined, 返回defaultValue
   * @param {object} object
   * @param {string | array} path
   * @param {*} defaultValue
   */
  function get(object, path, defaultValue) {
    let pathArray;
    if (typeof path === "string") {
      pathArray = toPath(path);
    } else {
      pathArray = path;
    }
    for (let i = 0; i < pathArray.length; i++) {
      if (object[pathArray[i]] === undefined) return defaultValue;
      object = object[pathArray[i]];
    }
    return object;
  }

  /**
   * 返回一个由对象自身拥有的[prop, value]的数组组成的数组
   * @param {object} obj
   * @return {array}
   */
  function toPairs(obj) {
    let result = [];
    for (let element in obj) {
      if (obj.hasOwnProperty(element)) {
        result.push([element, obj[element]]);
      }
    }
    return result;
  }

  /**
   * 返回一个对象的所有[prop, value]的数组组成的数组
   * @param {object} obj
   * @return {array}
   */
  function toPairsIn(obj) {
    let result = [];
    for (let element in obj) {
      result.push([element, obj[element]]);
    }
    return result;
  }

  // ANCHOR Util

  /**
   * 根据参数func构建函数, func为属性名时, 函数从传入的object中获取属性值;
   * func为object或数组时, 函数当传入的object包含相同的属性时, 返回true, 否则返回false
   * @param {string | array | object | function} func
   * @return {function}
   */
  function iteratee(func) {
    if (typeof func === "string") {
      return property(func);
    }
    if (Array.isArray(func)) {
      return matchesProperty(func.slice(0, func.length - 1), func[length - 1]);
    }
    if (typeof func === "object") {
      return matches(func);
    }

    // * func 为函数
    return func;
  }

  /**
   * 传入属性值, 返回一个函数, 参数为object, 返回值为object的属性值p
   * @param {string} propertyName
   * @return {*}
   */
  function property(propertyName) {
    return function(obj) {
      return obj[propertyName];
    };
  }

  function matches(source) {
    return bind(isMatch, null, "_", source);
  }
  /**
   * 返回一个函数, 参数为obj, 对obj和source的属性值进行比较
   * @param {object} source
   * @return {function}
   */
  function matches(source) {
    return function(obj) {
      return isMatch(obj, source);
    };
  }

  /**
   * 返回一个函数, 以object为参数, 深度比较通过path访问到的object的属性值和srcValue是否相等
   * @param {string | array} path
   * @param {*} srcValue
   * @return {function}
   */
  function matchesProperty(path, srcValue) {
    return function(obj) {
      let provalue = get(obj, path, undefined);
      return isEqual(provalue, srcValue);
    };
  }

  /**
   * 返回一个函数, 以object为参数, 返回object按照path访问到的值
   * @param {string | array} path
   * @return {*}
   */
  function property(path) {
    return function(obj) {
      return get(obj, path, undefined);
    };
  }

  /**
   * 将表示访问属性的路径(property of path)的字符串转换为数组
   * @param {string} value
   * @return {array}
   */
  function toPath(value) {
    return value.split(/\.|\[|\][\[\.]/g);
  }

  return {
    // * Array
    chunk,
    compact,
    concat,
    difference,
    differenceBy,
    dropRight,
    drop,
    dropRightWhile,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    intersection,
    intersectionBy,

    join,
    last,
    lastIndexOf,
    pull,
    remove,

    // * Collection
    every,
    find,
    some,
    map,

    // * Function
    after,
    ary,
    before,
    memoize,
    bind,
    flip,
    negate,
    spread,
    unary,

    // * Lang
    isMatch,
    isEqual,

    // * Object
    get,
    toPairs,
    toPairsIn,

    // * Util
    iteratee,
    property,
    matches,
    matchesProperty,
    toPath
  };
})();

// console.log(rabbitinhat.compact([0, 1, false, 2, '', 3]))
// var array = [1]
// console.log(rabbitinhat.concat(array, 2, [3], [[4]]))
// console.log(rabbitinhat.difference([1,2,3,4,5,6,7,8],[1,3],[4,8],[6]))
// console.log(rabbitinhat.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'))
