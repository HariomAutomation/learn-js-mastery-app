const e="07-arrays-array-patterns-49",n="Group By Multiple",o=`const people = [
  {name: 'Alice', dept: 'eng', level: 'senior'},
  {name: 'Bob', dept: 'sales', level: 'junior'},
  {name: 'Charlie', dept: 'eng', level: 'junior'},
  {name: 'Diana', dept: 'sales', level: 'senior'}
];
const grouped = people.reduce((acc, p) => {
  const key = p.dept + '-' + p.level;
  acc[key] = acc[key] || [];
  acc[key].push(p.name);
  return acc;
}, {});
console.log(grouped);`,t=`const people = [
  {name: 'Alice', dept: 'eng', level: 'senior'},
  {name: 'Bob', dept: 'sales', level: 'junior'},
  {name: 'Charlie', dept: 'eng', level: 'junior'},
  {name: 'Diana', dept: 'sales', level: 'senior'}
];
const grouped = people.reduce((acc, p) => {
  const key = p.dept + '-' + p.level;
  acc[key] = acc[key] || [];
  acc[key].push(p.name);
  return acc;
}, {});
console.log(grouped);`,s=[{input:[],expected:"{ 'eng-senior': [ 'Alice' ], 'sales-junior': [ 'Bob' ], 'eng-junior': [ 'Charlie' ], 'sales-senior': [ 'Diana' ] }"}],a=["Composite key","Reduce to grouped object"],l={id:e,title:n,starterCode:o,solution:t,tests:s,hints:a};export{l as default,a as hints,e as id,t as solution,o as starterCode,s as tests,n as title};
