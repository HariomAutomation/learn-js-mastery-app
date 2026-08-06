const n="11-events-event-delegation-06",e="stopPropagation Effect",t=`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('inner only');
});`,o=`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('inner only');
});`,i=[{input:[],expected:"inner only"}],s=["stopPropagation stops event bubbling","Parent handlers won't fire"],r={id:n,title:e,starterCode:t,solution:o,tests:i,hints:s};export{r as default,s as hints,n as id,o as solution,t as starterCode,i as tests,e as title};
