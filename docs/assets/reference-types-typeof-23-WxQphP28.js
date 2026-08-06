const e="02-data-types-reference-types-typeof-23",t="Nested deep copy check",s=`const a = { nested: { val: 1 } };
const b = structuredClone(a);
b.nested.val = 99;
console.log();`,n=`const a = { nested: { val: 1 } };
const b = structuredClone(a);
b.nested.val = 99;
console.log(a.nested.val);`,o=[{input:[],expected:"1"}],c=["Deep copy breaks all references","Original is unaffected"],a={id:e,title:t,starterCode:s,solution:n,tests:o,hints:c};export{a as default,c as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
