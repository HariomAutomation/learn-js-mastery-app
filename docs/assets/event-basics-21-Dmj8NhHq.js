const t="11-events-event-basics-21",e="Drag Event",n=`const el = document.querySelector('.draggable');
el.addEventListener('dragstart', function(e) {
  console.log('dragging');
});`,s=`const el = document.querySelector('.draggable');
el.addEventListener('dragstart', function(e) {
  console.log('dragging');
});`,o=[{input:[],expected:"dragging"}],r=["dragstart fires when drag begins","Set dataTransfer in handler"],a={id:t,title:e,starterCode:n,solution:s,tests:o,hints:r};export{a as default,r as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
