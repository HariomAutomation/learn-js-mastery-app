const n="06-functions-function-basics-35",r="Curry Function",t=`function curry(fn) {
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
console.log(add(1)(2)(3));`,o=[{input:[],expected:"6"}],c=["Partial application","Collect args until enough"],e={id:n,title:r,starterCode:t,solution:s,tests:o,hints:c};export{e as default,c as hints,n as id,s as solution,t as starterCode,o as tests,r as title};
