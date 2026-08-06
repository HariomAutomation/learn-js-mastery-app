const o="08-objects-destructuring-copying-08",t="Deep Copy structuredClone",n=`const original = {a: 1, b: {c: 2}};
const copy = structuredClone(original);
copy.b.c = 99;
console.log(original.b.c);
console.log(copy.b.c);`,c=`const original = {a: 1, b: {c: 2}};
const copy = structuredClone(original);
copy.b.c = 99;
console.log(original.b.c);
console.log(copy.b.c);`,e=[{input:[],expected:`2
99`}],s=["structuredClone deep copies","Nested objects independent"],i={id:o,title:t,starterCode:n,solution:c,tests:e,hints:s};export{i as default,s as hints,o as id,c as solution,n as starterCode,e as tests,t as title};
