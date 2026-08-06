const n="07-arrays-array-patterns-39",e="Group By Function",t=`const nums = [1, 2, 3, 4, 5, 6];
const grouped = nums.reduce((acc, n) => {
  const key = n % 2 === 0 ? 'even' : 'odd';
  acc[key] = acc[key] || [];
  acc[key].push(n);
  return acc;
}, {});
console.log(grouped);`,c=`const nums = [1, 2, 3, 4, 5, 6];
const grouped = nums.reduce((acc, n) => {
  const key = n % 2 === 0 ? 'even' : 'odd';
  acc[key] = acc[key] || [];
  acc[key].push(n);
  return acc;
}, {});
console.log(grouped);`,o=[{input:[],expected:"{ odd: [ 1, 3, 5 ], even: [ 2, 4, 6 ] }"}],s=["Group by odd/even","Use ternary for key"],r={id:n,title:e,starterCode:t,solution:c,tests:o,hints:s};export{r as default,s as hints,n as id,c as solution,t as starterCode,o as tests,e as title};
