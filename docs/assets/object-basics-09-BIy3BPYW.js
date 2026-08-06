const t="08-objects-object-basics-09",s="Object Assign",e=`const target = {a: 1};
const source = {b: 2, c: 3};
Object.assign(target, source);
console.log(target);`,o=`const target = {a: 1};
const source = {b: 2, c: 3};
Object.assign(target, source);
console.log(target);`,c=[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],n=["Object.assign mutates target","Copies properties"],a={id:t,title:s,starterCode:e,solution:o,tests:c,hints:n};export{a as default,n as hints,t as id,o as solution,e as starterCode,c as tests,s as title};
