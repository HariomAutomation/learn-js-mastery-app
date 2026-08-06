const t="08-objects-object-basics-05",s="Object Keys",e=`const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(____);
console.log(keys);`,o=`const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(obj);
console.log(keys);`,c=[{input:[],expected:"[ 'a', 'b', 'c' ]"}],n=["Object.keys returns array","Of property names"],b={id:t,title:s,starterCode:e,solution:o,tests:c,hints:n};export{b as default,n as hints,t as id,o as solution,e as starterCode,c as tests,s as title};
