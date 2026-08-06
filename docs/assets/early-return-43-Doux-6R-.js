const t="04-control-flow-early-return-43",n="Early return - flatten nested",e=`function getStatusColor(status) {
  if (status === 'active') return 'green';
  if (status === 'pending') return 'yellow';
  if (status === 'error') return 'red';
  return 'gray';
}
console.log(getStatusColor('pending'));`,r=`function getStatusColor(status) {
  if (status === 'active') return 'green';
  if (status === 'pending') return 'yellow';
  if (status === 'error') return 'red';
  return 'gray';
}
console.log(getStatusColor('pending'));`,s=[{input:[],expected:"yellow"}],o=["status is 'pending'","Second guard matches"],u={id:t,title:n,starterCode:e,solution:r,tests:s,hints:o};export{u as default,o as hints,t as id,r as solution,e as starterCode,s as tests,n as title};
