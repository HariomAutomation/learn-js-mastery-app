const t="08-objects-destructuring-copying-01",e="Object Destructuring",n=`const obj = {name: 'Alice', age: 25};
const {name, age} = obj;
console.log(name, age);`,o=`const obj = {name: 'Alice', age: 25};
const {name, age} = obj;
console.log(name, age);`,s=[{input:[],expected:"Alice 25"}],c=["Destructure with curly braces","Extract properties"],i={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
