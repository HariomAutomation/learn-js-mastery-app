const e="07-arrays-array-patterns-29",t="Group Reduce",n=`const items = [
  {type: 'fruit', name: 'apple'},
  {type: 'veggie', name: 'carrot'},
  {type: 'fruit', name: 'banana'}
];
const grouped = items.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log(grouped);`,a=`const items = [
  {type: 'fruit', name: 'apple'},
  {type: 'veggie', name: 'carrot'},
  {type: 'fruit', name: 'banana'}
];
const grouped = items.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log(grouped);`,c=[{input:[],expected:"{ fruit: [ 'apple', 'banana' ], veggie: [ 'carrot' ] }"}],r=["Group by type","Reduce to object"],o={id:e,title:t,starterCode:n,solution:a,tests:c,hints:r};export{o as default,r as hints,e as id,a as solution,n as starterCode,c as tests,t as title};
