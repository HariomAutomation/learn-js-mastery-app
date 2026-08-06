const e="11-events-event-delegation-14",t="Capture Demo",n=`document.addEventListener('click', function() {
  console.log('capture');
}, true);
console.log('capture phase listener');`,s=`document.addEventListener('click', function() {
  console.log('capture');
}, true);
console.log('capture phase listener');`,o=[{input:[],expected:"capture phase listener"}],c=["true as third arg means capture","Fires before bubble phase"],r={id:e,title:t,starterCode:n,solution:s,tests:o,hints:c};export{r as default,c as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
