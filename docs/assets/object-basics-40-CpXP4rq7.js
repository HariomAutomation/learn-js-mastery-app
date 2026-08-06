const t="08-objects-object-basics-40",e="Complete 3",o=`const obj = {name: 'Alice', age: 25, city: 'NYC'};
const {name, ...rest} = obj;
console.log(name);
console.log(rest);`,s=`const obj = {name: 'Alice', age: 25, city: 'NYC'};
const {name, ...rest} = obj;
console.log(name);
console.log(rest);`,n=[{input:[],expected:`Alice
{ age: 25, city: 'NYC' }`}],c=["Rest in destructuring","Collects remaining"],i={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{i as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
