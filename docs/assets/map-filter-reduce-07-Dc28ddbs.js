const t="07-arrays-map-filter-reduce-07",o="Reduce to Object",e=`const arr = [['a', 1], ['b', 2], ['c', 3]];
const obj = arr.____((o, [k, v]) => ({ ...o, [k]: v }), {});
console.log(obj);`,s=`const arr = [['a', 1], ['b', 2], ['c', 3]];
const obj = arr.reduce((o, [k, v]) => ({ ...o, [k]: v }), {});
console.log(obj);`,c=[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],r=["Spread accumulator","Create object from pairs"],n={id:t,title:o,starterCode:e,solution:s,tests:c,hints:r};export{n as default,r as hints,t as id,s as solution,e as starterCode,c as tests,o as title};
