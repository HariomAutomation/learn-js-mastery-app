const t="03-operators-logical-ternary-30",s="OR returns first truthy",e=`const result = 0 || "" || 42;
console.log(result);`,o=`const result = 0 || "" || 42;
console.log(result);`,r=[{input:[],expected:"42"}],n=["|| returns first truthy value","0 and '' are falsy, 42 is truthy"],l={id:t,title:s,starterCode:e,solution:o,tests:r,hints:n};export{l as default,n as hints,t as id,o as solution,e as starterCode,r as tests,s as title};
