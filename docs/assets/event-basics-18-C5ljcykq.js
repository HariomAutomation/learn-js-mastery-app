const t="11-events-event-basics-18",e="Contextmenu Event",n=`document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  console.log('right clicked');
});`,o=`document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  console.log('right clicked');
});`,s=[{input:[],expected:"right clicked"}],c=["Fires on right-click","Use preventDefault to block menu"],i={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
