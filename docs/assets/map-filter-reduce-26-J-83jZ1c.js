const c="07-arrays-map-filter-reduce-26",t="Reduce Frequency",e=`const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
const freq = arr.____((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {});
console.log(freq);`,n=`const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
const freq = arr.reduce((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {});
console.log(freq);`,o=[{input:[],expected:"{ a: 3, b: 2, c: 1 }"}],r=["Count occurrences","Increment count"],s={id:c,title:t,starterCode:e,solution:n,tests:o,hints:r};export{s as default,r as hints,c as id,n as solution,e as starterCode,o as tests,t as title};
