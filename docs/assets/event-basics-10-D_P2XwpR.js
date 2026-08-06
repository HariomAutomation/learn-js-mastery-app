const e="11-events-event-basics-10",t="Scroll Event",n=`window.addEventListener('scroll', function(e) {
  console.log('scrolled');
});`,s=`window.addEventListener('scroll', function(e) {
  console.log('scrolled');
});`,o=[{input:[],expected:"scrolled"}],l=["Fires on window scroll","Can fire many times per second"],c={id:e,title:t,starterCode:n,solution:s,tests:o,hints:l};export{c as default,l as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
