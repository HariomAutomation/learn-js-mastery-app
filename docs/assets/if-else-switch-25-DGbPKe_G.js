const n="04-control-flow-if-else-switch-25",e="Switch as expression",t=`const code = 404;
const message = (() => {
  switch (code) {
    case 200: return 'OK';
    case 404: return 'Not Found';
    case 500: return 'Server Error';
    default: return 'Unknown';
  }
})();
console.log(message);`,s=`const code = 404;
const message = (() => {
  switch (code) {
    case 200: return 'OK';
    case 404: return 'Not Found';
    case 500: return 'Server Error';
    default: return 'Unknown';
  }
})();
console.log(message);`,o=[{input:[],expected:"Not Found"}],r=["Switch can return values","404 matches case 404"],c={id:n,title:e,starterCode:t,solution:s,tests:o,hints:r};export{c as default,r as hints,n as id,s as solution,t as starterCode,o as tests,e as title};
