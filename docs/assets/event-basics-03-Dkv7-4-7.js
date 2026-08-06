const t="11-events-event-basics-03",e="Click Event",n=`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.type);
});`,c=`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.type);
});`,o=[{input:[],expected:"click"}],s=["Event object has type property","click event type is 'click'"],i={id:t,title:e,starterCode:n,solution:c,tests:o,hints:s};export{i as default,s as hints,t as id,c as solution,n as starterCode,o as tests,e as title};
