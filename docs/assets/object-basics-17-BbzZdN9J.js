const t="08-objects-object-basics-17",o="Keys Sort",e=`const obj = {c: 3, a: 1, b: 2};
const sorted = Object.keys(obj).sort().reduce((acc, key) => ({...acc, [key]: obj[key]}), {});
console.log(sorted);`,s=`const obj = {c: 3, a: 1, b: 2};
const sorted = Object.keys(obj).sort().reduce((acc, key) => ({...acc, [key]: obj[key]}), {});
console.log(sorted);`,c=[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],n=["Sort keys alphabetically","Rebuild object"],b={id:t,title:o,starterCode:e,solution:s,tests:c,hints:n};export{b as default,n as hints,t as id,s as solution,e as starterCode,c as tests,o as title};
