const t="11-events-event-practice-34",e="Form Submit Handler",n=`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submitted');
});`,o=`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submitted');
});`,s=[{input:[],expected:"submitted"}],r=["Use preventDefault","Handle form data"],c={id:t,title:e,starterCode:n,solution:o,tests:s,hints:r};export{c as default,r as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
