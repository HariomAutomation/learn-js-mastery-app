const t="11-events-event-delegation-31",e="Nested Delegation",n=`const table = document.querySelector('table');
table.addEventListener('click', function(e) {
  const td = e.target.closest('td');
  if (td) console.log(td.textContent);
});`,o=`const table = document.querySelector('table');
table.addEventListener('click', function(e) {
  const td = e.target.closest('td');
  if (td) console.log(td.textContent);
});`,s=[{input:[],expected:"Cell"}],l=["closest traverses up","Works with nested elements"],c={id:t,title:e,starterCode:n,solution:o,tests:s,hints:l};export{c as default,l as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
