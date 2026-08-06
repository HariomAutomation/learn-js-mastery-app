const t="05-loops-patterns-practice-38",o="Matrix Row Sum",n=`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < 3; i++) {
  let sum = 0;
  for (let j = 0; j < 3; j++) {
    sum += m[i][j];
  }
  console.log('Row ' + i + ': ' + sum);
}`,s=`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < 3; i++) {
  let sum = 0;
  for (let j = 0; j < 3; j++) {
    sum += m[i][j];
  }
  console.log('Row ' + i + ': ' + sum);
}`,e=[{input:[],expected:`Row 0: 6
Row 1: 15
Row 2: 24`}],i=["Sum each row","Inner loop for columns"],c={id:t,title:o,starterCode:n,solution:s,tests:e,hints:i};export{c as default,i as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
