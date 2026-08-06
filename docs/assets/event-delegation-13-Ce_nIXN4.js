const e="11-events-event-delegation-13",s="Passive Scroll",o=`window.addEventListener('scroll', function() {
  console.log('scrolling');
}, { passive: true });
console.log('passive scroll');`,t=`window.addEventListener('scroll', function() {
  console.log('scrolling');
}, { passive: true });
console.log('passive scroll');`,n=[{input:[],expected:"passive scroll"}],l=["passive: true for scroll performance","Browser doesn't wait for preventDefault"],i={id:e,title:s,starterCode:o,solution:t,tests:n,hints:l};export{i as default,l as hints,e as id,t as solution,o as starterCode,n as tests,s as title};
