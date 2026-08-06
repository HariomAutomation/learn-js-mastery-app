const t="11-events-event-practice-39",e="Event Target Closest",n=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const item = e.target.closest('li');
  if (item) console.log(item.textContent);
});`,s=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const item = e.target.closest('li');
  if (item) console.log(item.textContent);
});`,o=[{input:[],expected:"Item 1"}],i=["closest finds matching ancestor","Works with nested elements"],c={id:t,title:e,starterCode:n,solution:s,tests:o,hints:i};export{c as default,i as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
