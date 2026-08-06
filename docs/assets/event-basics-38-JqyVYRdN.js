const e="11-events-event-basics-38",t="Event Type Check",n=`document.addEventListener('click', function(e) {
  console.log(e instanceof Event);
});`,s=`document.addEventListener('click', function(e) {
  console.log(e instanceof Event);
});`,o=[{input:[],expected:"true"}],c=["Event handler receives Event instance","Use instanceof to verify"],i={id:e,title:t,starterCode:n,solution:s,tests:o,hints:c};export{i as default,c as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
