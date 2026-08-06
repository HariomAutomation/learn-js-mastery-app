const t="08-objects-object-basics-29",c="Reduce Object",s=`const obj = {a: 1, b: 2, c: 3};
const sum = Object.values(obj).reduce((acc, v) => acc + v, 0);
console.log(sum);`,e=`const obj = {a: 1, b: 2, c: 3};
const sum = Object.values(obj).reduce((acc, v) => acc + v, 0);
console.log(sum);`,o=[{input:[],expected:"6"}],n=["Object.values then reduce","Sum all values"],a={id:t,title:c,starterCode:s,solution:e,tests:o,hints:n};export{a as default,n as hints,t as id,e as solution,s as starterCode,o as tests,c as title};
