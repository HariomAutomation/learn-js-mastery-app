const e="11-events-event-basics-32",t="Event Phase",s=`document.addEventListener('click', function(e) {
  console.log(e.eventPhase);
}, { capture: true });`,n=`document.addEventListener('click', function(e) {
  console.log(e.eventPhase);
}, { capture: true });`,c=[{input:[],expected:"1"}],o=["Phase 1 is capture, 2 is target, 3 is bubble","capture phase is 1"],i={id:e,title:t,starterCode:s,solution:n,tests:c,hints:o};export{i as default,o as hints,e as id,n as solution,s as starterCode,c as tests,t as title};
