const e="06-functions-higher-order-functions-39",t="Middleware Pattern",n=`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,r=`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,d=[{input:[],expected:"HELLO, WORLD!"}],s=["Chain middlewares","Each transforms value"],a={id:e,title:t,starterCode:n,solution:r,tests:d,hints:s};export{a as default,s as hints,e as id,r as solution,n as starterCode,d as tests,t as title};
