const e="11-events-event-practice-37",t="Mouse Position",n=`document.addEventListener('mousemove', function(e) {
  console.log(e.clientX + ',' + e.clientY);
});`,o=`document.addEventListener('mousemove', function(e) {
  console.log(e.clientX + ',' + e.clientY);
});`,s=[{input:[],expected:"100,200"}],i=["clientX/Y gives viewport coordinates","Fires on every mouse move"],c={id:e,title:t,starterCode:n,solution:o,tests:s,hints:i};export{c as default,i as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
