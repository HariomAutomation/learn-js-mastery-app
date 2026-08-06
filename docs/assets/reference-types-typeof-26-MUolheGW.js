const e="02-data-types-reference-types-typeof-26",t="Primitive passed by value",n=`function modify(n) { n = 10; }
let a = 1;
modify(a);
console.log();`,o=`function modify(n) { n = 10; }
let a = 1;
modify(a);
console.log(a);`,s=[{input:[],expected:"1"}],i=["Primitives are copied by value","The original is not affected"],a={id:e,title:t,starterCode:n,solution:o,tests:s,hints:i};export{a as default,i as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
