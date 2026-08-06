const e="02-data-types-reference-types-typeof-25",t="Reference sharing in function",n=`function modify(obj) { obj.x = 10; }
const a = { x: 1 };
modify(a);
console.log();`,o=`function modify(obj) { obj.x = 10; }
const a = { x: 1 };
modify(a);
console.log(a.x);`,s=[{input:[],expected:"10"}],i=["Objects are passed by reference","Modifying inside affects the original"],c={id:e,title:t,starterCode:n,solution:o,tests:s,hints:i};export{c as default,i as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
