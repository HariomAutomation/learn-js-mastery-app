const e="11-events-event-basics-28",t="preventDefault",n=`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('prevented');
});`,o=`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('prevented');
});`,s=[{input:[],expected:"prevented"}],r=["preventDefault stops default behavior","Form won't submit/reload"],c={id:e,title:t,starterCode:n,solution:o,tests:s,hints:r};export{c as default,r as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
