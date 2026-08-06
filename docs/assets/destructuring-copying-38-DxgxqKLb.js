const t="08-objects-destructuring-copying-38",s="Merge Objects",o=`const obj = {};
Object.assign(obj, {a: 1}, {b: 2}, {a: 3});
console.log(obj);`,e=`const obj = {};
Object.assign(obj, {a: 1}, {b: 2}, {a: 3});
console.log(obj);`,n=[{input:[],expected:"{ a: 3, b: 2 }"}],c=["Object.assign with multiple","Later overrides"],i={id:t,title:s,starterCode:o,solution:e,tests:n,hints:c};export{i as default,c as hints,t as id,e as solution,o as starterCode,n as tests,s as title};
