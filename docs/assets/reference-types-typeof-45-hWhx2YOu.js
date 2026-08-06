const t="02-data-types-reference-types-typeof-45",e="Array destructuring copies values",s=`const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b);`,o=`const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b);`,n=[{input:[],expected:"1 2"}],r=["Array destructuring extracts by position","Values are copied, not referenced"],c={id:t,title:e,starterCode:s,solution:o,tests:n,hints:r};export{c as default,r as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
