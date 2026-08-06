const t="05-loops-patterns-practice-21",n="Reverse Matrix Rows",o=`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < m.length; i++) {
  let row = '';
  for (let j = m[i].length - 1; j >= 0; j--) {
    row += m[i][j] + ' ';
  }
  console.log(row);
}`,e=`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < m.length; i++) {
  let row = '';
  for (let j = m[i].length - 1; j >= 0; j--) {
    row += m[i][j] + ' ';
  }
  console.log(row);
}`,s=[{input:[],expected:`3 2 1 
6 5 4 
9 8 7 `}],r=["Iterate backwards","Build row string"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:r};export{i as default,r as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
