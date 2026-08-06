const e="02-data-types-reference-types-typeof-27",t="Object identity check",n=`const a = {};
const b = a;
const c = {};
console.log(a === b, a === c);`,s=`const a = {};
const b = a;
const c = {};
console.log(a === b, a === c);`,c=[{input:[],expected:"true false"}],o=["=== checks reference equality","Same reference = true, different = false"],a={id:e,title:t,starterCode:n,solution:s,tests:c,hints:o};export{a as default,o as hints,e as id,s as solution,n as starterCode,c as tests,t as title};
