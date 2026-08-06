const t="11-events-event-delegation-15",n="stopImmediatePropagation",e=`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  e.stopImmediatePropagation();
  console.log('first');
});
btn.addEventListener('click', function() {
  console.log('second');
});`,o=`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  e.stopImmediatePropagation();
  console.log('first');
});
btn.addEventListener('click', function() {
  console.log('second');
});`,s=[{input:[],expected:"first"}],i=["stopImmediatePropagation stops all handlers","Even on same element"],c={id:t,title:n,starterCode:e,solution:o,tests:s,hints:i};export{c as default,i as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
