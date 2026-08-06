const t="11-events-event-delegation-34",e="Delegation Selector Check",n=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.closest('li')) console.log('li found');
});`,o=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.closest('li')) console.log('li found');
});`,s=[{input:[],expected:"li found"}],l=["closest checks ancestors","Returns element or null"],c={id:t,title:e,starterCode:n,solution:o,tests:s,hints:l};export{c as default,l as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
