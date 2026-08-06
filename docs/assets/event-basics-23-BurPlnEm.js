const e="11-events-event-basics-23",n="Pointer Events",t=`const el = document.querySelector('.pointer');
el.addEventListener('pointerdown', function(e) {
  console.log('pointer down');
});`,o=`const el = document.querySelector('.pointer');
el.addEventListener('pointerdown', function(e) {
  console.log('pointer down');
});`,s=[{input:[],expected:"pointer down"}],i=["Pointer events unify mouse and touch","pointerdown is like mousedown"],c={id:e,title:n,starterCode:t,solution:o,tests:s,hints:i};export{c as default,i as hints,e as id,o as solution,t as starterCode,s as tests,n as title};
