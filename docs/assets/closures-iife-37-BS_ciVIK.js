const n="06-functions-closures-iife-37",r="Curry Function",t=`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,s=`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,e=[{input:[],expected:"6"}],o=["Partial application","Collect args until enough"],c={id:n,title:r,starterCode:t,solution:s,tests:e,hints:o};export{c as default,o as hints,n as id,s as solution,t as starterCode,e as tests,r as title};
