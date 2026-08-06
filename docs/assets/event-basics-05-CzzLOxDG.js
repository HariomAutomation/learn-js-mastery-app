const t="11-events-event-basics-05",e="Submit Event",n=`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submitted');
});`,s=`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submitted');
});`,o=[{input:[],expected:"submitted"}],i=["Use preventDefault to stop form submission","Event type is 'submit'"],r={id:t,title:e,starterCode:n,solution:s,tests:o,hints:i};export{r as default,i as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
