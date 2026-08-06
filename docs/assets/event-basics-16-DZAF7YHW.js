const n="11-events-event-basics-16",e="Change Event",t=`const input = document.querySelector('input');
input.addEventListener('change', function(e) {
  console.log('changed');
});`,s=`const input = document.querySelector('input');
input.addEventListener('change', function(e) {
  console.log('changed');
});`,o=[{input:[],expected:"changed"}],c=["Fires when value changes and loses focus","Unlike input, fires once"],i={id:n,title:e,starterCode:t,solution:s,tests:o,hints:c};export{i as default,c as hints,n as id,s as solution,t as starterCode,o as tests,e as title};
