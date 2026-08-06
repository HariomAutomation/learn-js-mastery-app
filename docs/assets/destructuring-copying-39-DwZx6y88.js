const t="08-objects-destructuring-copying-39",o="Copy Nested",n=`const obj = {a: 1, b: {c: 2}};
const copy = JSON.parse(JSON.stringify(obj));
copy.b.c = 99;
console.log(obj.b.c);`,s=`const obj = {a: 1, b: 2, c: {d: 2}};
const copy = JSON.parse(JSON.stringify(obj));
copy.c.d = 99;
console.log(obj.c.d);`,c=[{input:[],expected:"2"}],e=["JSON deep copy pattern","Original untouched"],i={id:t,title:o,starterCode:n,solution:s,tests:c,hints:e};export{i as default,e as hints,t as id,s as solution,n as starterCode,c as tests,o as title};
