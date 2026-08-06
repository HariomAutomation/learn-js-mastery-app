const e="02-data-types-reference-types-typeof-30",t="Delete removes property",o=`const obj = { a: 1, b: 2 };
;
console.log(obj.a);`,s=`const obj = { a: 1, b: 2 };
delete obj.b;
console.log(obj.a);`,n=[{input:[],expected:"1"}],r=["delete removes a property","The property no longer exists"],c={id:e,title:t,starterCode:o,solution:s,tests:n,hints:r};export{c as default,r as hints,e as id,s as solution,o as starterCode,n as tests,t as title};
