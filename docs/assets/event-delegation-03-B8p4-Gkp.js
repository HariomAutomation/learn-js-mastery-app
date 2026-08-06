const e="11-events-event-delegation-03",t="currentTarget Property",n=`const ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
  console.log(e.currentTarget.tagName);
});`,o=`const ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
  console.log(e.currentTarget.tagName);
});`,s=[{input:[],expected:"UL"}],r=["currentTarget is element with listener","Always the parent in delegation"],c={id:e,title:t,starterCode:n,solution:o,tests:s,hints:r};export{c as default,r as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
