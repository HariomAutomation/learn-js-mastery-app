const t="02-data-types-coercion-truthy-falsy-01",s="Check if 0 is falsy",o=`if (0) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,e=`if (0) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,n=[{input:[],expected:"falsy"}],l=["0 is one of the falsy values","Numbers can be truthy or falsy"],c={id:t,title:s,starterCode:o,solution:e,tests:n,hints:l};export{c as default,l as hints,t as id,e as solution,o as starterCode,n as tests,s as title};
