const n="06-functions-closures-iife-36",t="Once Function",e=`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,l=`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,o=[{input:[],expected:`Initializing...
42
42`}],i=["Run only once","Cache result"],s={id:n,title:t,starterCode:e,solution:l,tests:o,hints:i};export{s as default,i as hints,n as id,l as solution,e as starterCode,o as tests,t as title};
