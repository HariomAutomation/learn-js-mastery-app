const n="05-loops-for-while-40",o="Pattern X Shape",t=`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === j || i + j === n - 1) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,e=`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === j || i + j === n - 1) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,i=[{input:[],expected:`*       * 
  *   * 
    *   
  *   * 
*       * `}],s=["Check i===j for main diagonal","Check i+j===n-1 for anti-diagonal"],l={id:n,title:o,starterCode:t,solution:e,tests:i,hints:s};export{l as default,s as hints,n as id,e as solution,t as starterCode,i as tests,o as title};
