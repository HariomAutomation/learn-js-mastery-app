const t="05-loops-for-while-19",o="Modulo Pattern",e=`for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}`,n=`for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}`,i=[{input:[],expected:`2
4
6
8
10`}],s=["Use modulo to check even","i % 2 === 0 means even"],l={id:t,title:o,starterCode:e,solution:n,tests:i,hints:s};export{l as default,s as hints,t as id,n as solution,e as starterCode,i as tests,o as title};
