const t="04-control-flow-if-else-switch-44",s="Switch expression with arrow function",e=`const getStatus = (code) => {
  switch (code) {
    case 200: return 'success';
    case 404: return 'not found';
    default: return 'error';
  }
};
console.log(getStatus(200));`,n=`const getStatus = (code) => {
  switch (code) {
    case 200: return 'success';
    case 404: return 'not found';
    default: return 'error';
  }
};
console.log(getStatus(200));`,o=[{input:[],expected:"success"}],c=["Arrow function with switch","200 matches case 200"],r={id:t,title:s,starterCode:e,solution:n,tests:o,hints:c};export{r as default,c as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
