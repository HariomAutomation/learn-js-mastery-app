const o="06-functions-higher-order-functions-04",n="Compose Functions",s=`const compose = (f, g) => (x) => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,t=`const compose = (f, g) => (x) => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,e=[{input:[],expected:"8"}],d=["g runs first","f runs on result"],c={id:o,title:n,starterCode:s,solution:t,tests:e,hints:d};export{c as default,d as hints,o as id,t as solution,s as starterCode,e as tests,n as title};
