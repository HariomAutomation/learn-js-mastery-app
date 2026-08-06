const o="08-objects-object-basics-37",t="Practice 8",s=`const obj1 = {a: 1, b: {c: 2}};
const obj2 = {...obj1};
obj2.b.c = 99;
console.log(obj1.b.c);`,c=`const obj1 = {a: 1, b: {c: 2}};
const obj2 = {...obj1};
obj2.b.c = 99;
console.log(obj1.b.c);`,n=[{input:[],expected:"99"}],e=["Shallow clone only","Nested objects shared"],b={id:o,title:t,starterCode:s,solution:c,tests:n,hints:e};export{b as default,e as hints,o as id,c as solution,s as starterCode,n as tests,t as title};
