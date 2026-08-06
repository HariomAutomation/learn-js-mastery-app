const n="06-functions-function-basics-12",t="Named Function Expression",o=`const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5));`,s=`const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5));`,c=[{input:[],expected:"120"}],e=["Named for recursion","Base case n <= 1"],i={id:n,title:t,starterCode:o,solution:s,tests:c,hints:e};export{i as default,e as hints,n as id,s as solution,o as starterCode,c as tests,t as title};
