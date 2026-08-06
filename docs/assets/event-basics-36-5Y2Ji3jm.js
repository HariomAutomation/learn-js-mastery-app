const e="11-events-event-basics-36",t="Key Event Properties",n=`document.addEventListener('keydown', function(e) {
  console.log(e.key + ' ' + e.code);
});`,o=`document.addEventListener('keydown', function(e) {
  console.log(e.key + ' ' + e.code);
});`,s=[{input:[],expected:"a KeyA"}],c=["key is the key value","code is physical key code"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
