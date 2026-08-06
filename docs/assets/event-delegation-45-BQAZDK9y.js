const e="11-events-event-delegation-45",t="Delegation Multiple Levels",n=`const nav = document.querySelector('nav');
nav.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link) console.log('link clicked');
});`,s=`const nav = document.querySelector('nav');
nav.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link) console.log('link clicked');
});`,o=[{input:[],expected:"link clicked"}],l=["closest traverses up multiple levels","Works with nested structures"],c={id:e,title:t,starterCode:n,solution:s,tests:o,hints:l};export{c as default,l as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
