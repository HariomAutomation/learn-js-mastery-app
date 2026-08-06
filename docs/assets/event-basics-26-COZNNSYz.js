const e="11-events-event-basics-26",t="Capture Option",n=`document.addEventListener('click', function() {
  console.log('capture');
}, { capture: true });
console.log('capture listener');`,s=`document.addEventListener('click', function() {
  console.log('capture');
}, { capture: true });
console.log('capture listener');`,o=[{input:[],expected:"capture listener"}],c=["capture: true fires during capture phase","Before bubbling phase"],r={id:e,title:t,starterCode:n,solution:s,tests:o,hints:c};export{r as default,c as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
