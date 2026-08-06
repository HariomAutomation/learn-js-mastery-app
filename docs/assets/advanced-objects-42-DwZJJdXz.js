const e="08-objects-advanced-objects-42",t="IsSealed",o=`const obj1 = {a: 1};
const obj2 = Object.seal({a: 1});
console.log(Object.isSealed(obj1));
console.log(Object.isSealed(obj2));`,s=`const obj1 = {a: 1};
const obj2 = Object.seal({a: 1});
console.log(Object.isSealed(obj1));
console.log(Object.isSealed(obj2));`,c=[{input:[],expected:`false
true`}],n=["isSealed check","Sealed objects"],l={id:e,title:t,starterCode:o,solution:s,tests:c,hints:n};export{l as default,n as hints,e as id,s as solution,o as starterCode,c as tests,t as title};
