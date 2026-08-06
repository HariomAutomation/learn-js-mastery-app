const t="11-events-event-basics-14",e="Focus Event",n=`const input = document.querySelector('input');
input.addEventListener('focus', function(e) {
  console.log('focused');
});`,s=`const input = document.querySelector('input');
input.addEventListener('focus', function(e) {
  console.log('focused');
});`,o=[{input:[],expected:"focused"}],c=["Fires when element gains focus","Use for input highlighting"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:c};export{i as default,c as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
