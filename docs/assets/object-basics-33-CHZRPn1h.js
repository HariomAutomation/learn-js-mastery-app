const t="08-objects-object-basics-33",e="Practice 4",o=`const obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', {value: 3});
console.log(Object.keys(obj));`,s=`const obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', {value: 3});
console.log(Object.keys(obj));`,c=[{input:[],expected:"[ 'a', 'b', 'c' ]"}],n=["defineProperty adds new","Keys includes it"],b={id:t,title:e,starterCode:o,solution:s,tests:c,hints:n};export{b as default,n as hints,t as id,s as solution,o as starterCode,c as tests,e as title};
