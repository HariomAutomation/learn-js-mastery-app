const t="11-events-event-basics-04",n="Input Event",e=`const input = document.querySelector('input');
input.addEventListener('input', function(e) {
  console.log(e.type);
});`,s=`const input = document.querySelector('input');
input.addEventListener('input', function(e) {
  console.log(e.type);
});`,o=[{input:[],expected:"input"}],i=["Fires on every input change","Event type is 'input'"],u={id:t,title:n,starterCode:e,solution:s,tests:o,hints:i};export{u as default,i as hints,t as id,s as solution,e as starterCode,o as tests,n as title};
