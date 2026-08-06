const o="08-objects-advanced-objects-30",t="Advanced Complete",e=`const obj = {a: 1, b: 2};
const sym = Symbol('key');
obj[sym] = 3;
console.log(Object.keys(obj).length);
console.log(Object.getOwnPropertySymbols(obj).length);`,s=`const obj = {a: 1, b: 2};
const sym = Symbol('key');
obj[sym] = 3;
console.log(Object.keys(obj).length);
console.log(Object.getOwnPropertySymbols(obj).length);`,n=[{input:[],expected:`2
1`}],c=["Regular vs symbol keys","Count each"],l={id:o,title:t,starterCode:e,solution:s,tests:n,hints:c};export{l as default,c as hints,o as id,s as solution,e as starterCode,n as tests,t as title};
