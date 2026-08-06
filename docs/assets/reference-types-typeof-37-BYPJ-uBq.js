const t="02-data-types-reference-types-typeof-37",e="Object.assign merges",s=`const a = { x: 1 };
Object.assign(a, { y: 2 });
console.log();`,n=`const a = { x: 1 };
Object.assign(a, { y: 2 });
console.log(a.y);`,o=[{input:[],expected:"2"}],a=["Object.assign can add properties","It mutates the first argument"],c={id:t,title:e,starterCode:s,solution:n,tests:o,hints:a};export{c as default,a as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
