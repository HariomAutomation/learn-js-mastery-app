const o="08-objects-advanced-objects-47",t="HasOwnProperty Chain",n=`const proto = {x: 1};
const obj = Object.create(proto);
obj.y = 2;
console.log(obj.hasOwnProperty('x'));
console.log(obj.hasOwnProperty('y'));`,e=`const proto = {x: 1};
const obj = Object.create(proto);
obj.y = 2;
console.log(obj.hasOwnProperty('x'));
console.log(obj.hasOwnProperty('y'));`,s=[{input:[],expected:`false
true`}],c=["hasOwnProperty own only","Inherited not counted"],r={id:o,title:t,starterCode:n,solution:e,tests:s,hints:c};export{r as default,c as hints,o as id,e as solution,n as starterCode,s as tests,t as title};
