const t="05-loops-for-while-42",e="Reverse Matrix Rows",o=`const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].reverse().join(' '));
}`,i=`const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].reverse().join(' '));
}`,s=[{input:[],expected:`3 2 1
6 5 4
9 8 7`}],n=["Use reverse() method","Join with space"],r={id:t,title:e,starterCode:o,solution:i,tests:s,hints:n};export{r as default,n as hints,t as id,i as solution,o as starterCode,s as tests,e as title};
