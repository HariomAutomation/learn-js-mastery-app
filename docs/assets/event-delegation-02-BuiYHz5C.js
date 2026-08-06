const e="11-events-event-delegation-02",t="event.target Property",n=`document.querySelector('ul').addEventListener('click', function(e) {
  console.log(e.target.tagName);
});`,o=`document.querySelector('ul').addEventListener('click', function(e) {
  console.log(e.target.tagName);
});`,s=[{input:[],expected:"LI"}],c=["target is the actual clicked element","tagName gives element type"],l={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{l as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
