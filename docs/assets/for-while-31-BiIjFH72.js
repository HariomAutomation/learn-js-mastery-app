const t="05-loops-for-while-31",o="Right Triangle",n=`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}`,e=`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}`,i=[{input:[],expected:`* 
* * 
* * * 
* * * * 
* * * * * `}],s=["Inner loop runs i times","Add star each iteration"],r={id:t,title:o,starterCode:n,solution:e,tests:i,hints:s};export{r as default,s as hints,t as id,e as solution,n as starterCode,i as tests,o as title};
