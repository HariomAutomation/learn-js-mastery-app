const t="03-operators-arithmetic-comparison-50",e="Float integer check",s=`const result = Number.isInteger(42.5);
console.log(result);`,o=`const result = Number.isInteger(42.5);
console.log(result);`,n=[{input:[],expected:"false"}],r=["42.5 is not an integer","Number.isInteger returns false for floats"],i={id:t,title:e,starterCode:s,solution:o,tests:n,hints:r};export{i as default,r as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
