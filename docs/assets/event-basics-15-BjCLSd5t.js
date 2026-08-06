const t="11-events-event-basics-15",e="Blur Event",n=`const input = document.querySelector('input');
input.addEventListener('blur', function(e) {
  console.log('blurred');
});`,s=`const input = document.querySelector('input');
input.addEventListener('blur', function(e) {
  console.log('blurred');
});`,o=[{input:[],expected:"blurred"}],u=["Fires when element loses focus","Opposite of focus"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:u};export{i as default,u as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
