const t="08-objects-object-basics-42",o="Complete 5",s=`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = Object.assign({}, obj1, obj2);
console.log(merged);`,e=`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = Object.assign({}, obj1, obj2);
console.log(merged);`,n=[{input:[],expected:"{ a: 1, b: 3, c: 4 }"}],c=["Object.assign merge","Later overrides"],b={id:t,title:o,starterCode:s,solution:e,tests:n,hints:c};export{b as default,c as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
