const e="07-arrays-array-patterns-11",a="Sort Objects",t=`const people = [{name: 'Bob', age: 30}, {name: 'Alice', age: 25}, {name: 'Charlie', age: 35}];
people.sort((a, b) => a.age - b.age);
console.log(people.map(p => p.name));`,o=`const people = [{name: 'Bob', age: 30}, {name: 'Alice', age: 25}, {name: 'Charlie', age: 35}];
people.sort((a, b) => a.age - b.age);
console.log(people.map(p => p.name));`,n=[{input:[],expected:"[ 'Alice', 'Bob', 'Charlie' ]"}],s=["Sort by age property","Map to names after"],p={id:e,title:a,starterCode:t,solution:o,tests:n,hints:s};export{p as default,s as hints,e as id,o as solution,t as starterCode,n as tests,a as title};
