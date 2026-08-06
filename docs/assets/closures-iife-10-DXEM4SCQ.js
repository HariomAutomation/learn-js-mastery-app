const n="06-functions-closures-iife-10",e="Memoize Basics",s=`function memoize(fn) {
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
console.log(square(4));`,c=`function memoize(fn) {
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
16`}],o=["Cache results","Check cache first"],r={id:n,title:e,starterCode:s,solution:c,tests:t,hints:o};export{r as default,o as hints,n as id,c as solution,s as starterCode,t as tests,e as title};
