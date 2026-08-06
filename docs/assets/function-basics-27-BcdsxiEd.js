const o="06-functions-function-basics-27",n="Function As Value",s=`const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};
console.log(operations.add(5, 3));
console.log(operations.sub(5, 3));`,t=`const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};
console.log(operations.add(5, 3));
console.log(operations.sub(5, 3));`,e=[{input:[],expected:`8
2`}],a=["Functions are values","Store in object"],i={id:o,title:n,starterCode:s,solution:t,tests:e,hints:a};export{i as default,a as hints,o as id,t as solution,s as starterCode,e as tests,n as title};
