const n="06-functions-function-basics-28",t="Closure Counter",o=`function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());`,e=`function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());`,c=[{input:[],expected:`1
2
3`}],u=["Closure captures count","Increment and return"],r={id:n,title:t,starterCode:o,solution:e,tests:c,hints:u};export{r as default,u as hints,n as id,e as solution,o as starterCode,c as tests,t as title};
