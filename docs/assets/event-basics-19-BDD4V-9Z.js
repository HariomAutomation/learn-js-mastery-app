const t="11-events-event-basics-19",e="Copy Event",n=`document.addEventListener('copy', function(e) {
  console.log('copied');
});`,o=`document.addEventListener('copy', function(e) {
  console.log('copied');
});`,s=[{input:[],expected:"copied"}],c=["Fires when user copies content","Can modify clipboard data"],i={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
