const t="04-control-flow-if-else-switch-22",e="If with logical AND",s=`const age = 25;
const hasTicket = true;
if (age >= 18 && hasTicket) {
  console.log('admitted');
} else {
  console.log('denied');
}`,o=`const age = 25;
const hasTicket = true;
if (age >= 18 && hasTicket) {
  console.log('admitted');
} else {
  console.log('denied');
}`,n=[{input:[],expected:"admitted"}],i=["Both conditions must be true for &&","25>=18 is true AND hasTicket is true"],c={id:t,title:e,starterCode:s,solution:o,tests:n,hints:i};export{c as default,i as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
