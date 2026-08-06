const e="04-control-flow-early-return-33",t="Nested guard pattern",s=`function processRequest(request) {
  if (!request) return 'no request';
  if (!request.method) return 'no method';
  if (request.method !== 'GET' && request.method !== 'POST') return 'invalid method';
  return \`processing \${request.method}\`;
}
console.log(processRequest({ method: 'POST' }));`,r=`function processRequest(request) {
  if (!request) return 'no request';
  if (!request.method) return 'no method';
  if (request.method !== 'GET' && request.method !== 'POST') return 'invalid method';
  return \`processing \${request.method}\`;
}
console.log(processRequest({ method: 'POST' }));`,n=[{input:[],expected:"processing POST"}],o=["request is truthy","method exists","POST is valid"],u={id:e,title:t,starterCode:s,solution:r,tests:n,hints:o};export{u as default,o as hints,e as id,r as solution,s as starterCode,n as tests,t as title};
