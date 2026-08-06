const n="03-operators-logical-ternary-37",t="Nullish coalescing chain",s=`const a = null;
const b = undefined;
const c = 0;
const result = a ?? b ?? c ?? 'default';
console.log(result);`,o=`const a = null;
const b = undefined;
const c = 0;
const result = a ?? b ?? c ?? 'default';
console.log(result);`,e=[{input:[],expected:"0"}],l=["?? chains until non-null/undefined","c is 0, which is not null/undefined"],c={id:n,title:t,starterCode:s,solution:o,tests:e,hints:l};export{c as default,l as hints,n as id,o as solution,s as starterCode,e as tests,t as title};
