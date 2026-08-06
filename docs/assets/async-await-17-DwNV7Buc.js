const t="12-async-async-await-17",e="Top-Level Await",o=`// In ES modules, top-level await is allowed
const data = await Promise.resolve('top level');
console.log(data);`,s=`// In ES modules, top-level await is allowed
const data = await Promise.resolve('top level');
console.log(data);`,l=[{input:[],expected:"top level"}],a=["await at module top level","Module pauses until resolved"],n={id:t,title:e,starterCode:o,solution:s,tests:l,hints:a};export{n as default,a as hints,t as id,s as solution,o as starterCode,l as tests,e as title};
