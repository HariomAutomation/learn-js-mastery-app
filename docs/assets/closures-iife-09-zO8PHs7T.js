const n="06-functions-closures-iife-09",e="Once Function",t=`function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return 'Already called';
  };
}
const greet = once(() => 'Hello');
console.log(greet());
console.log(greet());`,l=`function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return 'Already called';
  };
}
const greet = once(() => 'Hello');
console.log(greet());
console.log(greet());`,o=[{input:[],expected:`Hello
Already called`}],c=["Track if called","Return result only once"],r={id:n,title:e,starterCode:t,solution:l,tests:o,hints:c};export{r as default,c as hints,n as id,l as solution,t as starterCode,o as tests,e as title};
