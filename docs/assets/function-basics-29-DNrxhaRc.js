const n="06-functions-function-basics-29",t="Recursion Factorial",o=`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));`,s=`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));`,c=[{input:[],expected:"120"}],i=["Base case: n <= 1","Recursive call"],e={id:n,title:t,starterCode:o,solution:s,tests:c,hints:i};export{e as default,i as hints,n as id,s as solution,o as starterCode,c as tests,t as title};
