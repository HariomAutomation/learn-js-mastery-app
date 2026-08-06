const e="11-events-event-delegation-23",t="Keyboard Shortcuts",n=`document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('save');
  }
});`,s=`document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('save');
  }
});`,o=[{input:[],expected:"save"}],c=["Check ctrlKey, shiftKey, altKey","Use preventDefault for browser shortcuts"],r={id:e,title:t,starterCode:n,solution:s,tests:o,hints:c};export{r as default,c as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
