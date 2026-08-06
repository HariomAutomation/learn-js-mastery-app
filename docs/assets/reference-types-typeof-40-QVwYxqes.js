const e="02-data-types-reference-types-typeof-40",t="Check for null explicitly",l=`const val = null;
console.log();`,n=`const val = null;
console.log(val === null);`,o=[{input:[],expected:"true"}],s=["Use === null for null checks","typeof is unreliable for null"],c={id:e,title:t,starterCode:l,solution:n,tests:o,hints:s};export{c as default,s as hints,e as id,n as solution,l as starterCode,o as tests,t as title};
