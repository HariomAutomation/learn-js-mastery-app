const e="08-objects-destructuring-copying-05",t="Nested Destructuring",s=`const obj = {user: {name: 'Alice', age: 25}};
const {user: {name, age}} = obj;
console.log(name, age);`,n=`const obj = {user: {name: 'Alice', age: 25}};
const {user: {name, age}} = obj;
console.log(name, age);`,o=[{input:[],expected:"Alice 25"}],c=["Nested object destructuring","Drill down properties"],i={id:e,title:t,starterCode:s,solution:n,tests:o,hints:c};export{i as default,c as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
