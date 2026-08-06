const n="06-functions-function-basics-32",e="Memoization",c=`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,t=`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,s=[{input:[],expected:`16
16`}],o=["Cache results","Check cache first"],i={id:n,title:e,starterCode:c,solution:t,tests:s,hints:o};export{i as default,o as hints,n as id,t as solution,c as starterCode,s as tests,e as title};
