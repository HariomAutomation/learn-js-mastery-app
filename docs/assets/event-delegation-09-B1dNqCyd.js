const t="11-events-event-delegation-09",e="Data Attribute Delegation",n=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const id = e.target.dataset.id;
  console.log(id);
});`,o=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const id = e.target.dataset.id;
  console.log(id);
});`,s=[{input:[],expected:"123"}],i=["Use data-* attributes for identification","Read with dataset property"],c={id:t,title:e,starterCode:n,solution:o,tests:s,hints:i};export{c as default,i as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
