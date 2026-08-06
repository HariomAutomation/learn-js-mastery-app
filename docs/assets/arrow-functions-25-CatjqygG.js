const o="06-functions-arrow-functions-25",n="Arrow Usage Patterns",t=`const operations = {
  double: x => x * 2,
  triple: x => x * 3,
  negate: x => -x
};
console.log(operations.double(5));
console.log(operations.triple(5));
console.log(operations.negate(5));`,e=`const operations = {
  double: x => x * 2,
  triple: x => x * 3,
  negate: x => -x
};
console.log(operations.double(5));
console.log(operations.triple(5));
console.log(operations.negate(5));`,s=[{input:[],expected:`10
15
-5`}],r=["Arrows as object methods","Concise syntax"],i={id:o,title:n,starterCode:t,solution:e,tests:s,hints:r};export{i as default,r as hints,o as id,e as solution,t as starterCode,s as tests,n as title};
