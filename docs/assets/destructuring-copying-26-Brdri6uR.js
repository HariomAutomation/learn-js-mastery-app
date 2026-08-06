const t="08-objects-destructuring-copying-26",e="Rename Nested",s=`const obj = {user: {name: 'Alice', address: {city: 'NYC'}}};
const {user: {name, address: {city: location}} = {}} = obj;
console.log(name, location);`,o=`const obj = {user: {name: 'Alice', address: {city: 'NYC'}}};
const {user: {name, address: {city: location}} = {}} = obj;
console.log(name, location);`,n=[{input:[],expected:"Alice NYC"}],c=["Nested rename","Drill down deep"],i={id:t,title:e,starterCode:s,solution:o,tests:n,hints:c};export{i as default,c as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
