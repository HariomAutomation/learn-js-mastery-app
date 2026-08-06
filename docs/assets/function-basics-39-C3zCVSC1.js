const e="06-functions-function-basics-39",t="Middleware Pattern",n=`function createPipeline(...middlewares) {
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
console.log(greet('world'));`,a=[{input:[],expected:"HELLO, WORLD!"}],d=["Chain middlewares","Each transforms value"],r={id:e,title:t,starterCode:n,solution:s,tests:a,hints:d};export{r as default,d as hints,e as id,s as solution,n as starterCode,a as tests,t as title};
