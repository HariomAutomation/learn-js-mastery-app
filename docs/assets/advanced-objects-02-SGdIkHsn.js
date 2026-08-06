const s="08-objects-advanced-objects-02",o="Symbol Key",t=`const sym = Symbol('id');
const obj = {[sym]: 123};
console.log(obj[sym]);`,n=`const sym = Symbol('id');
const obj = {[sym]: 123};
console.log(obj[sym]);`,e=[{input:[],expected:"123"}],c=["Symbol as key","Access with symbol"],l={id:s,title:o,starterCode:t,solution:n,tests:e,hints:c};export{l as default,c as hints,s as id,n as solution,t as starterCode,e as tests,o as title};
