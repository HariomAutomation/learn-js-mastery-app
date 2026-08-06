const t="13-oop-prototypes-this-23",s="Call Args",o=`function sum(a, b) { return a + b; }
console.log(sum.call(null, 1, 2));`,n=`function sum(a, b) { return a + b; }
console.log(sum.call(null, 1, 2));`,l=[{input:[],expected:"3"}],e=["call passes args individually","First arg is this context"],i={id:t,title:s,starterCode:o,solution:n,tests:l,hints:e};export{i as default,e as hints,t as id,n as solution,o as starterCode,l as tests,s as title};
