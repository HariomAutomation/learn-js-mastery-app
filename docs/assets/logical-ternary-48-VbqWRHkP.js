const t="03-operators-logical-ternary-48",e="Complex ternary expression",s=`const age = 15;
const result = age >= 18 ? 'adult' : age >= 13 ? 'teen' : 'child';
console.log(result);`,n=`const age = 15;
const result = age >= 18 ? 'adult' : age >= 13 ? 'teen' : 'child';
console.log(result);`,o=[{input:[],expected:"teen"}],l=["15 < 18, check second ternary","15 >= 13 is true"],c={id:t,title:e,starterCode:s,solution:n,tests:o,hints:l};export{c as default,l as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
