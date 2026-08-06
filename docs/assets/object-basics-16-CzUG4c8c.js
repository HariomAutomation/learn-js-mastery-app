const t="08-objects-object-basics-16",e="Object GroupBy",o=`const items = [{type: 'fruit', name: 'apple'}, {type: 'veggie', name: 'carrot'}];
const grouped = Object.groupBy(items, item => item.type);
console.log(grouped);`,s=`const items = [{type: 'fruit', name: 'apple'}, {type: 'veggie', name: 'carrot'}];
const grouped = Object.groupBy(items, item => item.type);
console.log(grouped);`,c=[{input:[],expected:"{ fruit: [ { type: 'fruit', name: 'apple' } ], veggie: [ { type: 'veggie', name: 'carrot' } ] }"}],n=["Object.groupBy groups","By callback result"],i={id:t,title:e,starterCode:o,solution:s,tests:c,hints:n};export{i as default,n as hints,t as id,s as solution,o as starterCode,c as tests,e as title};
