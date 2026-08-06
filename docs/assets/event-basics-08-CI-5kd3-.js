const e="11-events-event-basics-08",t="Mouseenter Event",n=`const box = document.querySelector('.box');
box.addEventListener('mouseenter', function(e) {
  console.log('entered');
});`,o=`const box = document.querySelector('.box');
box.addEventListener('mouseenter', function(e) {
  console.log('entered');
});`,s=[{input:[],expected:"entered"}],c=["Fires when mouse enters element","Does not bubble"],r={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{r as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
