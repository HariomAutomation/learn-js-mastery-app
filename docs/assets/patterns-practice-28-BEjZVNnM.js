const t="05-loops-patterns-practice-28",o="Matrix Column Sum",n=`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let j = 0; j < 3; j++) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += m[i][j];
  }
  console.log('Col ' + j + ': ' + sum);
}`,s=`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let j = 0; j < 3; j++) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += m[i][j];
  }
  console.log('Col ' + j + ': ' + sum);
}`,e=[{input:[],expected:`Col 0: 12
Col 1: 15
Col 2: 18`}],l=["Outer loop for columns","Inner for rows"],i={id:t,title:o,starterCode:n,solution:s,tests:e,hints:l};export{i as default,l as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
