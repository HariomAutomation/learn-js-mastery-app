const t="03-operators-arithmetic-comparison-29",s="Using Math.abs for float comparison",o=`const result = Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
console.log(result);`,e=`const result = Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
console.log(result);`,r=[{input:[],expected:"true"}],n=["Use Math.abs for absolute difference","Compare difference to Number.EPSILON"],a={id:t,title:s,starterCode:o,solution:e,tests:r,hints:n};export{a as default,n as hints,t as id,e as solution,o as starterCode,r as tests,s as title};
