const t="08-objects-object-basics-38",e="Complete 1",o=`const arr = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const obj = Object.fromEntries(arr.map(p => [p.name, p.age]));
console.log(obj);`,s=`const arr = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const obj = Object.fromEntries(arr.map(p => [p.name, p.age]));
console.log(obj);`,n=[{input:[],expected:"{ Alice: 25, Bob: 30 }"}],a=["Map to entries","fromEntries to object"],c={id:t,title:e,starterCode:o,solution:s,tests:n,hints:a};export{c as default,a as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
