const t="06-functions-arrow-functions-42",o="Arrow Flat Map",n=`const arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.flatMap(x => x);
console.log(flat);`,s=`const arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.flatMap(x => x);
console.log(flat);`,a=[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],r=["flatMap flattens one level","Arrow returns array"],e={id:t,title:o,starterCode:n,solution:s,tests:a,hints:r};export{e as default,r as hints,t as id,s as solution,n as starterCode,a as tests,o as title};
