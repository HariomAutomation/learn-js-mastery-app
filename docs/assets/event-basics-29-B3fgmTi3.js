const n="11-events-event-basics-29",t="stopPropagation",e=`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('stopped');
});`,o=`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('stopped');
});`,s=[{input:[],expected:"stopped"}],i=["stopPropagation prevents bubbling","Event won't reach parent elements"],c={id:n,title:t,starterCode:e,solution:o,tests:s,hints:i};export{c as default,i as hints,n as id,o as solution,e as starterCode,s as tests,t as title};
