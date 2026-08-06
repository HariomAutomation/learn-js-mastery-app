const e="13-oop-oop-patterns-34",t="Factory",n=`function create(type) {
  const types = { admin: { role: 'admin' }, user: { role: 'user' } };
  return { ...types[type] };
}
console.log(create('admin').role);`,o=`function create(type) {
  const types = { admin: { role: 'admin' }, user: { role: 'user' } };
  return { ...types[type] };
}
console.log(create('admin').role);`,s=[{input:[],expected:"admin"}],r=["Factory creates objects by type","No new keyword needed"],c={id:e,title:t,starterCode:n,solution:o,tests:s,hints:r};export{c as default,r as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
