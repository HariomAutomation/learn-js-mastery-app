const t="08-objects-object-basics-06",s="Object Values",e=`const obj = {a: 1, b: 2, c: 3};
const values = Object.values(____);
console.log(values);`,o=`const obj = {a: 1, b: 2, c: 3};
const values = Object.values(obj);
console.log(values);`,c=[{input:[],expected:"[ 1, 2, 3 ]"}],n=["Object.values returns array","Of property values"],a={id:t,title:s,starterCode:e,solution:o,tests:c,hints:n};export{a as default,n as hints,t as id,o as solution,e as starterCode,c as tests,s as title};
