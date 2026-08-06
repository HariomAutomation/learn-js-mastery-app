const e="04-control-flow-early-return-34",t="Nested guard - invalid method",s=`function processRequest(request) {
  if (!request) return 'no request';
  if (!request.method) return 'no method';
  if (request.method !== 'GET' && request.method !== 'POST') return 'invalid method';
  return \`processing \${request.method}\`;
}
console.log(processRequest({ method: 'DELETE' }));`,o=`function processRequest(request) {
  if (!request) return 'no request';
  if (!request.method) return 'no method';
  if (request.method !== 'GET' && request.method !== 'POST') return 'invalid method';
  return \`processing \${request.method}\`;
}
console.log(processRequest({ method: 'DELETE' }));`,n=[{input:[],expected:"invalid method"}],r=["request is truthy","method exists","DELETE is not GET or POST"],u={id:e,title:t,starterCode:s,solution:o,tests:n,hints:r};export{u as default,r as hints,e as id,o as solution,s as starterCode,n as tests,t as title};
