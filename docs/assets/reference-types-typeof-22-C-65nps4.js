const e="02-data-types-reference-types-typeof-22",t="Nested spread shallow copy",s=`const a = { nested: { val: 1 } };
const b = { ...a };
console.log(a === b);`,o=`const a = { nested: { val: 1 } };
const b = { ...a };
console.log(a === b);`,n=[{input:[],expected:"false"}],c=["Spread creates a new object","But nested objects still reference"],a={id:e,title:t,starterCode:s,solution:o,tests:n,hints:c};export{a as default,c as hints,e as id,o as solution,s as starterCode,n as tests,t as title};
