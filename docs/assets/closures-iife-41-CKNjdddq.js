const e="06-functions-closures-iife-41",t="Middleware Pattern",n=`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,s=`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,d=[{input:[],expected:"HELLO, WORLD!"}],r=["Chain middlewares","Each transforms value"],a={id:e,title:t,starterCode:n,solution:s,tests:d,hints:r};export{a as default,r as hints,e as id,s as solution,n as starterCode,d as tests,t as title};
