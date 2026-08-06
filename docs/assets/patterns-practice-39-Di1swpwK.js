const n="05-loops-patterns-practice-39",t="Star Pattern Z",o=`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n-1 || i + j === n - 1) {
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
    if (i === 0 || i === n-1 || i + j === n - 1) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,s=[{input:[],expected:`* * * * * 
        * 
      *   
    *     
* * * * * `}],i=["Top and bottom rows full","Diagonal from top-right"],r={id:n,title:t,starterCode:o,solution:e,tests:s,hints:i};export{r as default,i as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
