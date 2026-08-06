const t="11-events-event-delegation-28",e="Delegation Pattern Complete",n=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const item = e.target.closest('li');
  if (item) console.log(item.textContent);
});`,o=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const item = e.target.closest('li');
  if (item) console.log(item.textContent);
});`,s=[{input:[],expected:"Item 1"}],i=["Use closest to find parent element","Works even with nested elements"],l={id:t,title:e,starterCode:n,solution:o,tests:s,hints:i};export{l as default,i as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
