const t="05-loops-for-while-36",n="While Factorial",i=`let n = 5;
let factorial = 1;
let i = 1;
while (i <= n) {
  factorial *= i;
  i++;
}
console.log(factorial);`,o=`let n = 5;
let factorial = 1;
let i = 1;
while (i <= n) {
  factorial *= i;
  i++;
}
console.log(factorial);`,l=[{input:[],expected:"120"}],e=["Initialize i to 1","Increment after multiply"],s={id:t,title:n,starterCode:i,solution:o,tests:l,hints:e};export{s as default,e as hints,t as id,o as solution,i as starterCode,l as tests,n as title};
