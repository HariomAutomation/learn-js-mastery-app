const o="05-loops-for-while-33",t="Number Triangle",n=`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row);
}`,e=`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row);
}`,s=[{input:[],expected:`1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 `}],i=["Print j instead of star","j goes from 1 to i"],r={id:o,title:t,starterCode:n,solution:e,tests:s,hints:i};export{r as default,i as hints,o as id,e as solution,n as starterCode,s as tests,t as title};
