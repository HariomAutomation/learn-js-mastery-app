const o="08-objects-destructuring-copying-07",n="Shallow Copy Spread",t=`const original = {a: 1, b: {c: 2}};
const copy = {...original};
copy.a = 10;
console.log(original.a);
console.log(copy.a);`,c=`const original = {a: 1, b: {c: 2}};
const copy = {...original};
copy.a = 10;
console.log(original.a);
console.log(copy.a);`,s=[{input:[],expected:`1
10`}],e=["Spread creates shallow clone","Top level copied"],i={id:o,title:n,starterCode:t,solution:c,tests:s,hints:e};export{i as default,e as hints,o as id,c as solution,t as starterCode,s as tests,n as title};
