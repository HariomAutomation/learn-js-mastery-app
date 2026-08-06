const n="06-functions-function-basics-34",t="Once Function",e=`function once(fn) {
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
console.log(init());`,o=`function once(fn) {
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
console.log(init());`,l=[{input:[],expected:`Initializing...
42
42`}],i=["Run only once","Cache result"],s={id:n,title:t,starterCode:e,solution:o,tests:l,hints:i};export{s as default,i as hints,n as id,o as solution,e as starterCode,l as tests,t as title};
