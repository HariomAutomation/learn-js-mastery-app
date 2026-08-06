const e="07-arrays-array-patterns-10",n="Group By Property",t=`const people = [
  {name: 'Alice', dept: 'eng'},
  {name: 'Bob', dept: 'sales'},
  {name: 'Charlie', dept: 'eng'}
];
const grouped = people.reduce((acc, p) => {
  acc[p.dept] = acc[p.dept] || [];
  acc[p.dept].push(p.name);
  return acc;
}, {});
console.log(grouped);`,p=`const people = [
  {name: 'Alice', dept: 'eng'},
  {name: 'Bob', dept: 'sales'},
  {name: 'Charlie', dept: 'eng'}
];
const grouped = people.reduce((acc, p) => {
  acc[p.dept] = acc[p.dept] || [];
  acc[p.dept].push(p.name);
  return acc;
}, {});
console.log(grouped);`,c=[{input:[],expected:"{ eng: [ 'Alice', 'Charlie' ], sales: [ 'Bob' ] }"}],o=["Group by dept","Reduce to object"],a={id:e,title:n,starterCode:t,solution:p,tests:c,hints:o};export{a as default,o as hints,e as id,p as solution,t as starterCode,c as tests,n as title};
