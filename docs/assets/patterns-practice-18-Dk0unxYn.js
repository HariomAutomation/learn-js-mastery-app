const t="05-loops-patterns-practice-18",s="Matrix Diagonal Sum",n=`const m = [[1,2,3],[4,5,6],[7,8,9]];
let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += m[i][i];
}
console.log(sum);`,o=`const m = [[1,2,3],[4,5,6],[7,8,9]];
let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += m[i][i];
}
console.log(sum);`,i=[{input:[],expected:"15"}],e=["Access m[i][i]","Sum diagonal"],c={id:t,title:s,starterCode:n,solution:o,tests:i,hints:e};export{c as default,e as hints,t as id,o as solution,n as starterCode,i as tests,s as title};
