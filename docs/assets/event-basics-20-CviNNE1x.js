const t="11-events-event-basics-20",e="Paste Event",s=`document.addEventListener('paste', function(e) {
  console.log('pasted');
});`,n=`document.addEventListener('paste', function(e) {
  console.log('pasted');
});`,o=[{input:[],expected:"pasted"}],a=["Fires when user pastes content","Can access pasted data"],c={id:t,title:e,starterCode:s,solution:n,tests:o,hints:a};export{c as default,a as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
