const t="08-objects-object-basics-25",e="Pick",c=`const obj = {a: 1, b: 2, c: 3, d: 4};
const picked = Object.fromEntries(Object.entries(obj).filter(([k]) => ['a', 'c'].includes(k)));
console.log(picked);`,s=`const obj = {a: 1, b: 2, c: 3, d: 4};
const picked = Object.fromEntries(Object.entries(obj).filter(([k]) => ['a', 'c'].includes(k)));
console.log(picked);`,o=[{input:[],expected:"{ a: 1, c: 3 }"}],i=["Filter by keys","Pick specific properties"],n={id:t,title:e,starterCode:c,solution:s,tests:o,hints:i};export{n as default,i as hints,t as id,s as solution,c as starterCode,o as tests,e as title};
