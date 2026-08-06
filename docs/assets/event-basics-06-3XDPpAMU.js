const e="11-events-event-basics-06",t="Keydown Event",n=`document.addEventListener('keydown', function(e) {
  console.log(e.key);
});`,s=`document.addEventListener('keydown', function(e) {
  console.log(e.key);
});`,o=[{input:[],expected:"a"}],d=["key property has the key value","Fires when key is pressed down"],i={id:e,title:t,starterCode:n,solution:s,tests:o,hints:d};export{i as default,d as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
