const e="07-arrays-array-methods-34",o="Find Callback",t=`const people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const person = people.____(p => p.age > 28);
console.log(person.name);`,n=`const people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const person = people.find(p => p.age > 28);
console.log(person.name);`,s=[{input:[],expected:"Bob"}],a=["Find first matching object","Access property"],c={id:e,title:o,starterCode:t,solution:n,tests:s,hints:a};export{c as default,a as hints,e as id,n as solution,t as starterCode,s as tests,o as title};
