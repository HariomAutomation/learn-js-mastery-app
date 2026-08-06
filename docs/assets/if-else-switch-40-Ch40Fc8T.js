const t="04-control-flow-if-else-switch-40",n="Switch with function return",e=`function getHttpStatus(code) {
  switch (code) {
    case 200: return 'OK';
    case 301: return 'Moved';
    case 404: return 'Not Found';
    case 500: return 'Error';
    default: return 'Unknown';
  }
}
console.log(getHttpStatus(301));`,o=`function getHttpStatus(code) {
  switch (code) {
    case 200: return 'OK';
    case 301: return 'Moved';
    case 404: return 'Not Found';
    case 500: return 'Error';
    default: return 'Unknown';
  }
}
console.log(getHttpStatus(301));`,s=[{input:[],expected:"Moved"}],r=["switch can return from function","301 matches case 301"],c={id:t,title:n,starterCode:e,solution:o,tests:s,hints:r};export{c as default,r as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
