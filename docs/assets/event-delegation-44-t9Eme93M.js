const t="11-events-event-delegation-44",e="Delegation Tag Check",n=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') console.log('list item');
});`,s=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') console.log('list item');
});`,o=[{input:[],expected:"list item"}],i=["Check tagName for element type","Use uppercase tag name"],l={id:t,title:e,starterCode:n,solution:s,tests:o,hints:i};export{l as default,i as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
