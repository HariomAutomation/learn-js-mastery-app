const e="07-arrays-map-filter-reduce-20",a="Reduce Group",c=`const people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 25}];
const byAge = people.____((acc, p) => {
  acc[p.age] = acc[p.age] || [];
  acc[p.age].push(p.name);
  return acc;
}, {});
console.log(byAge);`,n=`const people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 25}];
const byAge = people.reduce((acc, p) => {
  acc[p.age] = acc[p.age] || [];
  acc[p.age].push(p.name);
  return acc;
}, {});
console.log(byAge);`,t=[{input:[],expected:"{ '25': [ 'Alice', 'Charlie' ], '30': [ 'Bob' ] }"}],o=["Group by age property","Initialize array"],p={id:e,title:a,starterCode:c,solution:n,tests:t,hints:o};export{p as default,o as hints,e as id,n as solution,c as starterCode,t as tests,a as title};
