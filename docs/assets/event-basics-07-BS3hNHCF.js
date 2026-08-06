const e="11-events-event-basics-07",t="Keyup Event",n=`document.addEventListener('keyup', function(e) {
  console.log(e.type);
});`,s=`document.addEventListener('keyup', function(e) {
  console.log(e.type);
});`,o=[{input:[],expected:"keyup"}],i=["Fires when key is released","Event type is 'keyup'"],c={id:e,title:t,starterCode:n,solution:s,tests:o,hints:i};export{c as default,i as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
