const t="05-loops-patterns-practice-25",n="Matrix Search",e=`const m = [[1,2,3],[4,5,6],[7,8,9]];
const target = 5;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (m[i][j] === target) {
      console.log('Found at ' + i + ',' + j);
    }
  }
}`,o=`const m = [[1,2,3],[4,5,6],[7,8,9]];
const target = 5;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (m[i][j] === target) {
      console.log('Found at ' + i + ',' + j);
    }
  }
}`,s=[{input:[],expected:"Found at 1,1"}],i=["Nested loop","Check each element"],c={id:t,title:n,starterCode:e,solution:o,tests:s,hints:i};export{c as default,i as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
