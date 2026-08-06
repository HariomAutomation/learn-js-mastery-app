const t="07-arrays-map-filter-reduce-36",c="Reduce Join",s=`const arr = ['a', 'b', 'c', 'd'];
const str = arr.____((acc, x) => acc + x, '');
console.log(str);`,e=`const arr = ['a', 'b', 'c', 'd'];
const str = arr.reduce((acc, x) => acc + x, '');
console.log(str);`,o=[{input:[],expected:"abcd"}],n=["Concatenate all","Start empty"],r={id:t,title:c,starterCode:s,solution:e,tests:o,hints:n};export{r as default,n as hints,t as id,e as solution,s as starterCode,o as tests,c as title};
