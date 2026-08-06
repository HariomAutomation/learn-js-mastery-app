const t="05-loops-patterns-practice-34",n="Number Spiral",o=`let num = 1;
for (let i = 0; i < 3; i++) {
  let row = '';
  for (let j = 0; j < 3; j++) {
    row += num++ + ' ';
  }
  console.log(row);
}`,e=`let num = 1;
for (let i = 0; i < 3; i++) {
  let row = '';
  for (let j = 0; j < 3; j++) {
    row += num++ + ' ';
  }
  console.log(row);
}`,s=[{input:[],expected:`1 2 3 
4 5 6 
7 8 9 `}],r=["Use post-increment","Build row string"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:r};export{i as default,r as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
