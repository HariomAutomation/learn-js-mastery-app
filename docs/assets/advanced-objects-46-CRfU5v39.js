const e="08-objects-advanced-objects-46",t="Delete Operator",o=`const obj = {a: 1, b: 2, c: 3};
delete obj.b;
console.log(Object.keys(obj));`,s=`const obj = {a: 1, b: 2, c: 3};
delete obj.b;
console.log(Object.keys(obj));`,c=[{input:[],expected:"[ 'a', 'c' ]"}],n=["delete removes property","From object"],b={id:e,title:t,starterCode:o,solution:s,tests:c,hints:n};export{b as default,n as hints,e as id,s as solution,o as starterCode,c as tests,t as title};
