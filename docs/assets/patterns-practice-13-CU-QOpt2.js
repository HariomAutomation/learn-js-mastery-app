const t="05-loops-patterns-practice-13",e="Diamond Pattern",o=`for (let i = 1; i <= 5; i += 2) {
  console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}
for (let i = 3; i >= 1; i -= 2) {
  console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}`,n=`for (let i = 1; i <= 5; i += 2) {
  console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}
for (let i = 3; i >= 1; i -= 2) {
  console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}`,i=[{input:[],expected:`  *
 ***
*****
 ***
  *`}],s=["Build top half","Then bottom half"],r={id:t,title:e,starterCode:o,solution:n,tests:i,hints:s};export{r as default,s as hints,t as id,n as solution,o as starterCode,i as tests,e as title};
