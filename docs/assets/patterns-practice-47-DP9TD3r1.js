const t="05-loops-patterns-practice-47",o="Matrix Rotate 90",n=`const m = [[1,2,3],[4,5,6],[7,8,9]];
const rotated = [];
for (let j = 0; j < 3; j++) {
  rotated[j] = [];
  for (let i = 2; i >= 0; i--) {
    rotated[j].push(m[i][j]);
  }
}
console.log(rotated);`,e=`const m = [[1,2,3],[4,5,6],[7,8,9]];
const rotated = [];
for (let j = 0; j < 3; j++) {
  rotated[j] = [];
  for (let i = 2; i >= 0; i--) {
    rotated[j].push(m[i][j]);
  }
}
console.log(rotated);`,s=[{input:[],expected:"[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]"}],r=["Read columns top to bottom","Build new rows"],i={id:t,title:o,starterCode:n,solution:e,tests:s,hints:r};export{i as default,r as hints,t as id,e as solution,n as starterCode,s as tests,o as title};
