const e="11-events-event-delegation-47",t="Delegation Selector Complexity",n=`const table = document.querySelector('table');
table.addEventListener('click', function(e) {
  if (e.target.closest('td.active')) console.log('active cell');
});`,o=`const table = document.querySelector('table');
table.addEventListener('click', function(e) {
  if (e.target.closest('td.active')) console.log('active cell');
});`,c=[{input:[],expected:"active cell"}],l=["Complex selectors work with closest","Combine class and tag"],s={id:e,title:t,starterCode:n,solution:o,tests:c,hints:l};export{s as default,l as hints,e as id,o as solution,n as starterCode,c as tests,t as title};
