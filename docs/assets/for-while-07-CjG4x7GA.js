const n="05-loops-for-while-07",o="Nested For Loops",t=`for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + j);
  }
}`,e=`for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + j);
  }
}`,s=[{input:[],expected:`0
1
2
1
2
3
2
3
4`}],i=["Inner loop runs fully each outer iteration","Sum i and j"],l={id:n,title:o,starterCode:t,solution:e,tests:s,hints:i};export{l as default,i as hints,n as id,e as solution,t as starterCode,s as tests,o as title};
