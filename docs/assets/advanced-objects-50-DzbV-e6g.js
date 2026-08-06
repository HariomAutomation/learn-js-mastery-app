const t="08-objects-advanced-objects-50",o="Instanceof Practice",n=`const arr = [1, 2, 3];
const obj = {a: 1};
console.log(arr instanceof Array);
console.log(obj instanceof Object);`,e=`const arr = [1, 2, 3];
const obj = {a: 1};
console.log(arr instanceof Array);
console.log(obj instanceof Object);`,s=[{input:[],expected:`true
true`}],c=["instanceof checks prototype","Returns boolean"],a={id:t,title:o,starterCode:n,solution:e,tests:s,hints:c};export{a as default,c as hints,t as id,e as solution,n as starterCode,s as tests,o as title};
