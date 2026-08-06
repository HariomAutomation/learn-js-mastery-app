const s="11-events-event-basics-25",e="Passive Option",t=`window.addEventListener('scroll', function() {}, { passive: true });
console.log('passive listener');`,n=`window.addEventListener('scroll', function() {}, { passive: true });
console.log('passive listener');`,o=[{input:[],expected:"passive listener"}],i=["passive: true tells browser not to wait","Improves scroll performance"],r={id:s,title:e,starterCode:t,solution:n,tests:o,hints:i};export{r as default,i as hints,s as id,n as solution,t as starterCode,o as tests,e as title};
