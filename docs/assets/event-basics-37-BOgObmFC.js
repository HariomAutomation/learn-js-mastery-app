const e="11-events-event-basics-37",t="Mouse Event Properties",n=`document.addEventListener('click', function(e) {
  console.log(e.clientX + ',' + e.clientY);
});`,s=`document.addEventListener('click', function(e) {
  console.log(e.clientX + ',' + e.clientY);
});`,o=[{input:[],expected:"0,0"}],c=["clientX/Y is viewport coordinates","pageX/Y includes scroll"],i={id:e,title:t,starterCode:n,solution:s,tests:o,hints:c};export{i as default,c as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
