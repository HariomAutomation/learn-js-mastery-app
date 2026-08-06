const o="06-functions-function-basics-31",n="Function Composition",s=`const compose = (f, g) => x => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,t=`const compose = (f, g) => x => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,e=[{input:[],expected:"8"}],c=["g runs first","f runs on result"],d={id:o,title:n,starterCode:s,solution:t,tests:e,hints:c};export{d as default,c as hints,o as id,t as solution,s as starterCode,e as tests,n as title};
