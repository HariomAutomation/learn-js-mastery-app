const o="08-objects-advanced-objects-15",t="Symbol Key Access",e=`const id = Symbol('id');
const obj = {[id]: 123, name: 'Alice'};
console.log(obj[id]);
console.log(Object.getOwnPropertySymbols(obj).length);`,s=`const id = Symbol('id');
const obj = {[id]: 123, name: 'Alice'};
console.log(obj[id]);
console.log(Object.getOwnPropertySymbols(obj).length);`,n=[{input:[],expected:`123
1`}],c=["Access with symbol","Count symbol keys"],l={id:o,title:t,starterCode:e,solution:s,tests:n,hints:c};export{l as default,c as hints,o as id,s as solution,e as starterCode,n as tests,t as title};
