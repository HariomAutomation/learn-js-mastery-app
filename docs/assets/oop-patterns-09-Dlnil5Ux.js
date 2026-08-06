const n="13-oop-oop-patterns-09",o="Decorator",t=`function withLogging(fn) {
  return function(...args) {
    console.log('calling');
    return fn(...args);
  };
}
const add = (a, b) => a + b;
const logged = withLogging(add);
console.log(logged(1, 2));`,e=`function withLogging(fn) {
  return function(...args) {
    console.log('calling');
    return fn(...args);
  };
}
const add = (a, b) => a + b;
const logged = withLogging(add);
console.log(logged(1, 2));`,s=[{input:[],expected:`calling
3`}],g=["Decorator wraps function","Add behavior before/after"],r={id:n,title:o,starterCode:t,solution:e,tests:s,hints:g};export{r as default,g as hints,n as id,e as solution,t as starterCode,s as tests,o as title};
