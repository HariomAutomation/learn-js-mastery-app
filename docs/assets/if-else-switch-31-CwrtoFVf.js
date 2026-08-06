const e="04-control-flow-if-else-switch-31",o="If with negation",s=`const isLoggedIn = false;
if (!isLoggedIn) {
  console.log('please log in');
} else {
  console.log('welcome');
}`,n=`const isLoggedIn = false;
if (!isLoggedIn) {
  console.log('please log in');
} else {
  console.log('welcome');
}`,t=[{input:[],expected:"please log in"}],l=["!false is true","if block executes"],i={id:e,title:o,starterCode:s,solution:n,tests:t,hints:l};export{i as default,l as hints,e as id,n as solution,s as starterCode,t as tests,o as title};
