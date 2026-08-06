const t="05-loops-patterns-practice-09",o="Matrix Traversal",n=`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    process.stdout.write(m[i][j] + ' ');
  }
  console.log();
}`,s=`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    process.stdout.write(m[i][j] + ' ');
  }
  console.log();
}`,e=[{input:[],expected:`1 2 3 
4 5 6 
7 8 9 `}],r=["Outer for rows","Inner for columns"],i={id:t,title:o,starterCode:n,solution:s,tests:e,hints:r};export{i as default,r as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
