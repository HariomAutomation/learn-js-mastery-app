const t="06-functions-arrow-functions-12",n="Arrow No Arguments",s=`const getArgs = () => arguments;
try {
  getArgs(1, 2, 3);
} catch (e) {
  console.log('No arguments object');
}`,o=`const getArgs = () => arguments;
try {
  getArgs(1, 2, 3);
} catch (e) {
  console.log('No arguments object');
}`,e=[{input:[],expected:"No arguments object"}],r=["Arrow has no arguments","Use rest params instead"],c={id:t,title:n,starterCode:s,solution:o,tests:e,hints:r};export{c as default,r as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
