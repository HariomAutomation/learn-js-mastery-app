const t="03-operators-logical-ternary-19",s="Short circuit AND assignment",o=`let x = 0;
const result = x && (x = 5);
console.log(x);`,n=`let x = 0;
const result = x && (x = 5);
console.log(x);`,e=[{input:[],expected:"0"}],i=["&& short-circuits on first falsy","x is 0 (falsy), so assignment never happens"],l={id:t,title:s,starterCode:o,solution:n,tests:e,hints:i};export{l as default,i as hints,t as id,n as solution,o as starterCode,e as tests,s as title};
