const t="11-events-event-basics-47",e="Event Target ID",n=`const btn = document.querySelector('#myButton');
btn.addEventListener('click', function(e) {
  console.log(e.target.id);
});`,s=`const btn = document.querySelector('#myButton');
btn.addEventListener('click', function(e) {
  console.log(e.target.id);
});`,o=[{input:[],expected:"myButton"}],c=["target.id gives the element's id","Same as element's id attribute"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:c};export{i as default,c as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
