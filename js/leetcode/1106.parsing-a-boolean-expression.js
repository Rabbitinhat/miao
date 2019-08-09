/*
 * @lc app=leetcode id=1106 lang=javascript
 *
 * [1106] Parsing A Boolean Expression
 */
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expr) {
  var i = 0;
  return runTree(parse());

  function parse() {
    if (expr[i] === "t") {
      i++;
      return {
        type: "literal",
        value: true
      };
    }
    if (expr[i] === "f") {
      i++;
      return {
        type: "literal",
        value: false
      };
    }
    if (expr[i] === "!") {
      return parseNot();
    }
    if (expr[i] === "&") {
      return parseAnd();
    }
    if (expr[i] === "|") {
      return parseOR();
    }
  }

  function runTree(tree) {
    if (tree.type === "literal") return tree.value;
    if (tree.type === "operator") {
      if (tree.name === "!") return !runTree(tree.parameter);
      if (tree.name === "&")
        return tree.parameter.reduce((s, x) => s && runTree(x), true);
      if (tree.name === "|")
        return tree.parameter.reduce((s, x) => s || runTree(x), false);
    }
  }

  function parseNot() {
    i += 2;
    var value = parse();
    i++;
    return {
      type: "operator",
      name: "!",
      parameter: value
    };
  }

  function parseAnd() {
    i += 2;
    var result = {
      type: "operator",
      name: "&",
      parameter: []
    };
    while (true) {
      var value = parse();
      result.parameter.push(value);
      if (expr[i] === ")") {
        i++;
        break;
      }
      if (expr[i] === ",") {
        i++;
      }
    }
    return result;
  }

  function parseOR() {
    i += 2;
    var result = {
      type: "operator",
      name: "|",
      parameter: []
    };
    while (true) {
      var value = parse();
      result.parameter.push(value);
      if (expr[i] === ")") {
        i++;
        break;
      }
      if (expr[i] === ",") {
        i++;
      }
    }
    return result;
  }
};

// console.log(parseBoolExpr("|(&(t,f,t),!(t))"));
