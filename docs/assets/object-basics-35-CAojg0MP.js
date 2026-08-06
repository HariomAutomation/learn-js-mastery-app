const t="08-objects-object-basics-35",o="Practice 6",s=`const obj = {};
obj[Symbol('id')] = 123;
console.log(Object.getOwnPropertySymbols(obj).length);`,e=`const obj = {};
obj[Symbol('id')] = 123;
console.log(Object.getOwnPropertySymbols(obj).length);`,n=[{input:[],expected:"1"}],c=["Symbol keys","getOwnPropertySymbols"],b={id:t,title:o,starterCode:s,solution:e,tests:n,hints:c};export{b as default,c as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
