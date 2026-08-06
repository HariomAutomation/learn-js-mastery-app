const e="11-events-event-basics-12",t="Event Object",n=`document.addEventListener('click', function(e) {
  console.log(typeof e);
});`,o=`document.addEventListener('click', function(e) {
  console.log(typeof e);
});`,s=[{input:[],expected:"object"}],c=["Event handler receives Event object","e is an object"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
