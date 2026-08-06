const t="11-events-event-basics-42",e="Input Value Event",n=`const input = document.querySelector('input');
input.addEventListener('input', function(e) {
  console.log(e.target.value);
});`,s=`const input = document.querySelector('input');
input.addEventListener('input', function(e) {
  console.log(e.target.value);
});`,o=[{input:[],expected:"hello"}],u=["e.target.value has current input value","Fires on every keystroke"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:u};export{i as default,u as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
