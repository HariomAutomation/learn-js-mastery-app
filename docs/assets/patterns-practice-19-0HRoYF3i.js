const n="05-loops-patterns-practice-19",t="Pattern X Shape",o=`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === j || i + j === n - 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}`,e=`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === j || i + j === n - 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}`,i=[{input:[],expected:`*   *
 * * 
  *  
 * * 
*   *`}],s=["Main diagonal: i===j","Anti-diagonal: i+j===n-1"],r={id:n,title:t,starterCode:o,solution:e,tests:i,hints:s};export{r as default,s as hints,n as id,e as solution,o as starterCode,i as tests,t as title};
