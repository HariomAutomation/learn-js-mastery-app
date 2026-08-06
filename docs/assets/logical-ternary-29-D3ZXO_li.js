const t="03-operators-logical-ternary-29",s="AND returns first falsy",e=`const result = 1 && 0 && 3;
console.log(result);`,o=`const result = 1 && 0 && 3;
console.log(result);`,n=[{input:[],expected:"0"}],r=["&& returns first falsy value","0 is the first falsy"],l={id:t,title:s,starterCode:e,solution:o,tests:n,hints:r};export{l as default,r as hints,t as id,o as solution,e as starterCode,n as tests,s as title};
