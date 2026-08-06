const n="06-functions-higher-order-functions-48",e="Memoize Basics",c=`function memoize(fn) {
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
console.log(square(4));`,s=`function memoize(fn) {
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
console.log(square(4));`,t=[{input:[],expected:`16
16`}],o=["Cache results","Check cache first"],r={id:n,title:e,starterCode:c,solution:s,tests:t,hints:o};export{r as default,o as hints,n as id,s as solution,c as starterCode,t as tests,e as title};
