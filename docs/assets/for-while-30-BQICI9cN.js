const o="05-loops-for-while-30",n="Hollow Rectangle",t=`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 3 || j === 0 || j === 4) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,e=`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 3 || j === 0 || j === 4) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,s=[{input:[],expected:`* * * * * 
*       * 
*       * 
* * * * * `}],i=["Check edges for stars","Use spaces for interior"],r={id:o,title:n,starterCode:t,solution:e,tests:s,hints:i};export{r as default,i as hints,o as id,e as solution,t as starterCode,s as tests,n as title};
