const t="08-objects-destructuring-copying-06",s="Rest in Destructuring",o=`const obj = {a: 1, b: 2, c: 3, d: 4};
const {a, b, ...rest} = obj;
console.log(rest);`,n=`const obj = {a: 1, b: 2, c: 3, d: 4};
const {a, b, ...rest} = obj;
console.log(rest);`,e=[{input:[],expected:"{ c: 3, d: 4 }"}],c=["Rest collects remaining","Spread into rest"],i={id:t,title:s,starterCode:o,solution:n,tests:e,hints:c};export{i as default,c as hints,t as id,n as solution,o as starterCode,e as tests,s as title};
