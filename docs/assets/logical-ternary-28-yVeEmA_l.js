const t="03-operators-logical-ternary-28",s="AND returns last truthy",e=`const result = 1 && 2 && 3;
console.log(result);`,o=`const result = 1 && 2 && 3;
console.log(result);`,l=[{input:[],expected:"3"}],r=["&& returns last value if all truthy","1, 2, 3 are all truthy"],n={id:t,title:s,starterCode:e,solution:o,tests:l,hints:r};export{n as default,r as hints,t as id,o as solution,e as starterCode,l as tests,s as title};
