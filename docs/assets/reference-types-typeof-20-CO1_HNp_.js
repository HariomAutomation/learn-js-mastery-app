const e="02-data-types-reference-types-typeof-20",t="Object.keys returns array",s=`const obj = { x: 1, y: 2 };
console.log();`,o=`const obj = { x: 1, y: 2 };
console.log(Object.keys(obj));`,n=[{input:[],expected:"x,y"}],r=["Object.keys returns an array of keys","console.log shows array without brackets in some environments"],c={id:e,title:t,starterCode:s,solution:o,tests:n,hints:r};export{c as default,r as hints,e as id,o as solution,s as starterCode,n as tests,t as title};
