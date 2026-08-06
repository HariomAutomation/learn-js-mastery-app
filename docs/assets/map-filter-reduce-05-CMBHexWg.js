const e="07-arrays-map-filter-reduce-05",t="Map with Index",n=`const arr = ['a', 'b', 'c'];
const indexed = arr.____((val, idx) => idx + ':' + val);
console.log(indexed);`,a=`const arr = ['a', 'b', 'c'];
const indexed = arr.map((val, idx) => idx + ':' + val);
console.log(indexed);`,s=[{input:[],expected:"[ '0:a', '1:b', '2:c' ]"}],o=["map callback gets index","Combine index and value"],d={id:e,title:t,starterCode:n,solution:a,tests:s,hints:o};export{d as default,o as hints,e as id,a as solution,n as starterCode,s as tests,t as title};
