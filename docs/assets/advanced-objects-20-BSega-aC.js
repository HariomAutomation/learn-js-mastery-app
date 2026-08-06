const o="08-objects-advanced-objects-20",e="IsFrozen",t=`const obj1 = {a: 1};
const obj2 = Object.freeze({a: 1});
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj2));`,s=`const obj1 = {a: 1};
const obj2 = Object.freeze({a: 1});
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj2));`,n=[{input:[],expected:`false
true`}],c=["isFrozen checks","Frozen objects"],b={id:o,title:e,starterCode:t,solution:s,tests:n,hints:c};export{b as default,c as hints,o as id,s as solution,t as starterCode,n as tests,e as title};
