const e="11-events-event-delegation-07",t="preventDefault Delegated",n=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    console.log('link blocked');
  }
});`,o=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    console.log('link blocked');
  }
});`,l=[{input:[],expected:"link blocked"}],i=["Check target to conditionally prevent","Links won't navigate"],s={id:e,title:t,starterCode:n,solution:o,tests:l,hints:i};export{s as default,i as hints,e as id,o as solution,n as starterCode,l as tests,t as title};
