const n="06-functions-higher-order-functions-45",r="Curry Function",t=`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,e=`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,o=[{input:[],expected:"6"}],s=["Partial application","Collect args until enough"],c={id:n,title:r,starterCode:t,solution:e,tests:o,hints:s};export{c as default,s as hints,n as id,e as solution,t as starterCode,o as tests,r as title};
