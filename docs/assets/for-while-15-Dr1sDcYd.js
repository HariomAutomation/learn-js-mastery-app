const t="05-loops-for-while-15",e="Nested Break",o=`for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break;
    console.log(i + j);
  }
}`,n=`for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break;
    console.log(i + j);
  }
}`,i=[{input:[],expected:`0
1
2`}],s=["break only exits inner loop","Check j value for break"],l={id:t,title:e,starterCode:o,solution:n,tests:i,hints:s};export{l as default,s as hints,t as id,n as solution,o as starterCode,i as tests,e as title};
