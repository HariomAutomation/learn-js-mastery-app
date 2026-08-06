const t="11-events-event-basics-22",e="Touch Events",o=`const el = document.querySelector('.touchable');
el.addEventListener('touchstart', function(e) {
  console.log('touched');
});`,n=`const el = document.querySelector('.touchable');
el.addEventListener('touchstart', function(e) {
  console.log('touched');
});`,s=[{input:[],expected:"touched"}],c=["touchstart fires on touch","First of touch events"],u={id:t,title:e,starterCode:o,solution:n,tests:s,hints:c};export{u as default,c as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
