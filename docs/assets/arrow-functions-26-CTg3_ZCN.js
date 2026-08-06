const o="06-functions-arrow-functions-26",t="Arrow Vs Expression",n=`const add1 = function(a, b) { return a + b; };
const add2 = (a, b) => a + b;
console.log(add1(2, 3));
console.log(add2(2, 3));`,s=`const add1 = function(a, b) { return a + b; };
const add2 = (a, b) => a + b;
console.log(add1(2, 3));
console.log(add2(2, 3));`,e=[{input:[],expected:`5
5`}],a=["Both produce same result","Arrow is shorter"],d={id:o,title:t,starterCode:n,solution:s,tests:e,hints:a};export{d as default,a as hints,o as id,s as solution,n as starterCode,e as tests,t as title};
