const t="08-objects-destructuring-copying-15",o="Rest Pattern",s=`function log({first, ...others}) {
  console.log(first);
  console.log(others);
}
log({first: 1, second: 2, third: 3});`,n=`function log({first, ...others}) {
  console.log(first);
  console.log(others);
}
log({first: 1, second: 2, third: 3});`,e=[{input:[],expected:`1
{ second: 2, third: 3 }`}],r=["Rest collects rest","Log both parts"],i={id:t,title:o,starterCode:s,solution:n,tests:e,hints:r};export{i as default,r as hints,t as id,n as solution,s as starterCode,e as tests,o as title};
