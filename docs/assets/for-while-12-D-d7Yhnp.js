const o="05-loops-for-while-12",t="Loop Variable Scope",e=`for (let i = 0; i < 3; i++) {
  console.log(i);
}`,i=`for (let i = 0; i < 3; i++) {
  console.log(i);
}`,s=[{input:[],expected:`0
1
2`}],n=["let in for loop is block scoped","i only accessible inside loop"],l={id:o,title:t,starterCode:e,solution:i,tests:s,hints:n};export{l as default,n as hints,o as id,i as solution,e as starterCode,s as tests,t as title};
