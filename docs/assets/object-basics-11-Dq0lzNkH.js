const t="08-objects-object-basics-11",o="Object FromEntries",s=`const entries = [['a', 1], ['b', 2], ['c', 3]];
const obj = Object.fromEntries(____);
console.log(obj);`,e=`const entries = [['a', 1], ['b', 2], ['c', 3]];
const obj = Object.fromEntries(entries);
console.log(obj);`,n=[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],c=["fromEntries converts pairs","To object"],i={id:t,title:o,starterCode:s,solution:e,tests:n,hints:c};export{i as default,c as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
