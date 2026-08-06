const t="11-events-event-delegation-32",e="Delegation with Data Attributes",n=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const action = e.target.dataset.action;
  if (action) console.log(action);
});`,o=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const action = e.target.dataset.action;
  if (action) console.log(action);
});`,i=[{input:[],expected:"delete"}],s=["data-action attribute holds action name","Check if action exists"],c={id:t,title:e,starterCode:n,solution:o,tests:i,hints:s};export{c as default,s as hints,t as id,o as solution,n as starterCode,i as tests,e as title};
