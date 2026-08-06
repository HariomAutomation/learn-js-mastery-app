const e="07-arrays-map-filter-reduce-10",t="Complex Reduce",n=`const items = [{type: 'fruit', name: 'apple'}, {type: 'veggie', name: 'carrot'}, {type: 'fruit', name: 'banana'}];
const grouped = items.____((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log(grouped);`,a=`const items = [{type: 'fruit', name: 'apple'}, {type: 'veggie', name: 'carrot'}, {type: 'fruit', name: 'banana'}];
const grouped = items.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log(grouped);`,c=[{input:[],expected:"{ fruit: [ 'apple', 'banana' ], veggie: [ 'carrot' ] }"}],i=["Group by type","Initialize array if needed"],o={id:e,title:t,starterCode:n,solution:a,tests:c,hints:i};export{o as default,i as hints,e as id,a as solution,n as starterCode,c as tests,t as title};
