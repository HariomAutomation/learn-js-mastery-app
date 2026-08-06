const t="05-loops-for-while-23",n="Matrix Iteration",o=`const matrix = [[1, 2], [3, 4]];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}`,i=`const matrix = [[1, 2], [3, 4]];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}`,e=[{input:[],expected:`1
2
3
4`}],s=["Access rows first","Then columns"],r={id:t,title:n,starterCode:o,solution:i,tests:e,hints:s};export{r as default,s as hints,t as id,i as solution,o as starterCode,e as tests,n as title};
