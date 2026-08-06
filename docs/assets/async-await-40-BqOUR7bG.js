const t="12-async-async-await-40",n="Await Loop",o=`async function sum() {
  let total = 0;
  for (let i = 1; i <= 3; i++) {
    total += await Promise.resolve(i);
  }
  console.log(total);
}
sum();`,s=`async function sum() {
  let total = 0;
  for (let i = 1; i <= 3; i++) {
    total += await Promise.resolve(i);
  }
  console.log(total);
}
sum();`,i=[{input:[],expected:"6"}],e=["Sequential await in loop","1 + 2 + 3 = 6"],a={id:t,title:n,starterCode:o,solution:s,tests:i,hints:e};export{a as default,e as hints,t as id,s as solution,o as starterCode,i as tests,n as title};
