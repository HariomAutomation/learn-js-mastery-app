const t="07-arrays-map-filter-reduce-23",c="Reduce Flatten",e=`const arr = [[1, 2], [3, [4, 5]]];
const flat = arr.____((acc, x) => acc.concat(x), []);
console.log(flat);`,o=`const arr = [[1, 2], [3, [4, 5]]];
const flat = arr.reduce((acc, x) => acc.concat(x), []);
console.log(flat);`,n=[{input:[],expected:"[ 1, 2, 3, [ 4, 5 ] ]"}],a=["Concat to accumulator","One level flatten"],s={id:t,title:c,starterCode:e,solution:o,tests:n,hints:a};export{s as default,a as hints,t as id,o as solution,e as starterCode,n as tests,c as title};
