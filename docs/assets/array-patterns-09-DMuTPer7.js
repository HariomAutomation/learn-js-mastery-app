const t="07-arrays-array-patterns-09",o="Compact Array",a=`const arr = [0, 1, false, 2, '', 3, null, 4];
const compact = arr.filter(Boolean);
console.log(compact);`,s=`const arr = [0, 1, false, 2, '', 3, null, 4];
const compact = arr.filter(Boolean);
console.log(compact);`,n=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],e=["Boolean as callback","Remove falsy values"],c={id:t,title:o,starterCode:a,solution:s,tests:n,hints:e};export{c as default,e as hints,t as id,s as solution,a as starterCode,n as tests,o as title};
