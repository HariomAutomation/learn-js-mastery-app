const t="05-loops-patterns-practice-37",n="Factorial Recursive",o=`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(6));`,e=`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(6));`,c=[{input:[],expected:"720"}],s=["Base case: n <= 1","Recursive call"],r={id:t,title:n,starterCode:o,solution:e,tests:c,hints:s};export{r as default,s as hints,t as id,e as solution,o as starterCode,c as tests,n as title};
