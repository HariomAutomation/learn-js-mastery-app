const e="02-data-types-reference-types-typeof-42",t="Map preserves insertion order",s=`const m = new Map();
m.set('b', 2);
m.set('a', 1);
console.log();`,n=`const m = new Map();
m.set('b', 2);
m.set('a', 1);
console.log([...m.keys()]);`,o=[{input:[],expected:"b,a"}],r=["Maps preserve key order","Use spread to get keys as array"],a={id:e,title:t,starterCode:s,solution:n,tests:o,hints:r};export{a as default,r as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
