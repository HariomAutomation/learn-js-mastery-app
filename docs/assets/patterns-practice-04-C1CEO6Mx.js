const t="05-loops-patterns-practice-04",o="Fibonacci Loop",s=`let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
  process.stdout.write(a + ' ');
  [a, b] = [b, a + b];
}
console.log();`,n=`let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
  process.stdout.write(a + ' ');
  [a, b] = [b, a + b];
}
console.log();`,e=[{input:[],expected:"0 1 1 2 3 5 8 13 21 34 "}],i=["Swap with destructuring","Start with 0 and 1"],a={id:t,title:o,starterCode:s,solution:n,tests:e,hints:i};export{a as default,i as hints,t as id,n as solution,s as starterCode,e as tests,o as title};
