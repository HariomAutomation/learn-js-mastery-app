const n="05-loops-patterns-practice-10",t="Hollow Rectangle",o=`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 6; j++) {
    if (i === 0 || i === 3 || j === 0 || j === 5) {
      row += '#';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}`,e=`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 6; j++) {
    if (i === 0 || i === 3 || j === 0 || j === 5) {
      row += '#';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}`,s=[{input:[],expected:`######
#    #
#    #
######`}],i=["Print # on borders","Spaces inside"],r={id:n,title:t,starterCode:o,solution:e,tests:s,hints:i};export{r as default,i as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
