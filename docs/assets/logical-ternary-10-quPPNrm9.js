const t="03-operators-logical-ternary-10",s="Nested ternary",o=`const score = 85;
const result = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
console.log(result);`,e=`const score = 85;
const result = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
console.log(result);`,n=[{input:[],expected:"B"}],r=["85 is not >= 90, so check second ternary","85 >= 80 is true"],c={id:t,title:s,starterCode:o,solution:e,tests:n,hints:r};export{c as default,r as hints,t as id,e as solution,o as starterCode,n as tests,s as title};
