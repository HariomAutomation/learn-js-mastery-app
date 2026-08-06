const t="05-loops-patterns-practice-35",o="Matrix Transpose",n=`const m = [[1,2,3],[4,5,6]];
for (let j = 0; j < 3; j++) {
  let row = '';
  for (let i = 0; i < 2; i++) {
    row += m[i][j] + ' ';
  }
  console.log(row);
}`,s=`const m = [[1,2,3],[4,5,6]];
for (let j = 0; j < 3; j++) {
  let row = '';
  for (let i = 0; i < 2; i++) {
    row += m[i][j] + ' ';
  }
  console.log(row);
}`,e=[{input:[],expected:`1 4 
2 5 
3 6 `}],r=["Swap rows and columns","Outer loop columns"],i={id:t,title:o,starterCode:n,solution:s,tests:e,hints:r};export{i as default,r as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
