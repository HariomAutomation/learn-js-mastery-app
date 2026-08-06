const t="05-loops-patterns-practice-29",n="Binary Pattern",o=`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 4; j++) {
    row += (i + j) % 2;
  }
  console.log(row);
}`,e=`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 4; j++) {
    row += (i + j) % 2;
  }
  console.log(row);
}`,s=[{input:[],expected:`0101
1010
0101
1010`}],r=["Use (i+j)%2","Alternating pattern"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:r};export{i as default,r as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
