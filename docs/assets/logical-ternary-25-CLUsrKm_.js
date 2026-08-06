const t="03-operators-logical-ternary-25",n="Nullish assignment with zero",o=`let x = 0;
x ??= 'default';
console.log(x);`,e=`let x = 0;
x ??= 'default';
console.log(x);`,s=[{input:[],expected:"0"}],l=["?? only triggers on null/undefined","0 is not null or undefined, so no assignment"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:l};export{i as default,l as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
