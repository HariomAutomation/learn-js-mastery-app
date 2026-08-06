const t="05-loops-patterns-practice-50",i="Fibonacci Array",n=`const n = 7;
const fib = [0, 1];
for (let i = 2; i < n; i++) {
  fib.push(fib[i-1] + fib[i-2]);
}
console.log(fib);`,o=`const n = 7;
const fib = [0, 1];
for (let i = 2; i < n; i++) {
  fib.push(fib[i-1] + fib[i-2]);
}
console.log(fib);`,s=[{input:[],expected:"[ 0, 1, 1, 2, 3, 5, 8 ]"}],e=["Start with [0, 1]","Sum previous two"],c={id:t,title:i,starterCode:n,solution:o,tests:s,hints:e};export{c as default,e as hints,t as id,o as solution,n as starterCode,s as tests,i as title};
