const t="06-functions-arrow-functions-22",n="Block Body Arrow",o=`const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(5));`,e=`const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(5));`,s=[{input:[],expected:"120"}],r=["Multiple statements need braces","Explicit return"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:r};export{i as default,r as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
