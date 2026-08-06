const e="02-data-types-reference-types-typeof-07",t="Modify through reference",n=`const a = { x: 1 };
const b = a;
;
console.log(a.x);`,o=`const a = { x: 1 };
const b = a;
b.x = 99;
console.log(a.x);`,s=[{input:[],expected:"99"}],c=["Changing b changes a too","They reference the same object"],a={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{a as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
