const t="05-loops-patterns-practice-05",n="Factorial Loop",o=`let n = 6;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(fact);`,e=`let n = 6;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(fact);`,s=[{input:[],expected:"720"}],i=["Multiply from 1 to n","Start with 1"],c={id:t,title:n,starterCode:o,solution:e,tests:s,hints:i};export{c as default,i as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
