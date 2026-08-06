const o="08-objects-destructuring-copying-16",t="Shallow Demo",c=`const obj = {a: 1, b: {c: 2}};
const copy = {...obj};
copy.b.c = 99;
console.log(obj.b.c);`,n=`const obj = {a: 1, b: {c: 2}};
const copy = {...obj};
copy.b.c = 99;
console.log(obj.b.c);`,s=[{input:[],expected:"99"}],e=["Shallow copy shares nested","Reference copied"],i={id:o,title:t,starterCode:c,solution:n,tests:s,hints:e};export{i as default,e as hints,o as id,n as solution,c as starterCode,s as tests,t as title};
