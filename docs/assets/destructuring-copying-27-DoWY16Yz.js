const t="08-objects-destructuring-copying-27",s="Rest Nested",e=`const obj = {a: 1, b: {c: 2, d: 3}, e: 4};
const {a, b: {c, ...restB}, ...rest} = obj;
console.log(restB);
console.log(rest);`,o=`const obj = {a: 1, b: {c: 2, d: 3}, e: 4};
const {a, b: {c, ...restB}, ...rest} = obj;
console.log(restB);
console.log(rest);`,n=[{input:[],expected:`{ d: 3 }
{ e: 4 }`}],c=["Rest at multiple levels","Collect remaining"],l={id:t,title:s,starterCode:e,solution:o,tests:n,hints:c};export{l as default,c as hints,t as id,o as solution,e as starterCode,n as tests,s as title};
