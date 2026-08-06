const e="02-data-types-reference-types-typeof-21",t="Nested object reference",s=`const a = { nested: { val: 1 } };
const b = a;
console.log(a === b);`,n=`const a = { nested: { val: 1 } };
const b = a;
console.log(a === b);`,o=[{input:[],expected:"true"}],c=["Assignment copies the reference","Same reference, same object"],a={id:e,title:t,starterCode:s,solution:n,tests:o,hints:c};export{a as default,c as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
