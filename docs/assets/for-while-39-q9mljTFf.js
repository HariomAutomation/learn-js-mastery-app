const t="05-loops-for-while-39",i="Matrix Diagonal",o=`const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]);
}`,n=`const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]);
}`,s=[{input:[],expected:`1
5
9`}],e=["Access matrix[i][i]","Row equals column"],l={id:t,title:i,starterCode:o,solution:n,tests:s,hints:e};export{l as default,e as hints,t as id,n as solution,o as starterCode,s as tests,i as title};
