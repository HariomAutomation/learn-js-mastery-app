const n="11-events-event-delegation-42",e="Closest Method",t=`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  const parent = e.target.closest('.parent');
  console.log(parent ? 'found' : 'not found');
});`,o=`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  const parent = e.target.closest('.parent');
  console.log(parent ? 'found' : 'not found');
});`,s=[{input:[],expected:"found"}],c=["closest finds ancestor matching selector","Returns element or null"],r={id:n,title:e,starterCode:t,solution:o,tests:s,hints:c};export{r as default,c as hints,n as id,o as solution,t as starterCode,s as tests,e as title};
