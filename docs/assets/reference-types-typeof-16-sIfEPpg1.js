const t="02-data-types-reference-types-typeof-16",e="Copy array with spread",s=`const a = [1, 2, 3];
const b = ;
b.push(4);
console.log(a.length);`,n=`const a = [1, 2, 3];
const b = [...a];
b.push(4);
console.log(a.length);`,o=[{input:[],expected:"3"}],a=["Spread creates a new array","Original is not affected"],c={id:t,title:e,starterCode:s,solution:n,tests:o,hints:a};export{c as default,a as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
