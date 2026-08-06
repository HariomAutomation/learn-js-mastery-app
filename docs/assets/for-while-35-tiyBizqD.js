const t="05-loops-for-while-35",o="Factorial Loop",i=`let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);`,n=`let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);`,l=[{input:[],expected:"120"}],e=["Start at 1","Multiply by each i"],a={id:t,title:o,starterCode:i,solution:n,tests:l,hints:e};export{a as default,e as hints,t as id,n as solution,i as starterCode,l as tests,o as title};
