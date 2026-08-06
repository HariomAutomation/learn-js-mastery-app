const t="11-events-event-delegation-26",e="Pointer Delegation",n=`const list = document.querySelector('ul');
list.addEventListener('pointerdown', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('pointer');
  }
});`,o=`const list = document.querySelector('ul');
list.addEventListener('pointerdown', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('pointer');
  }
});`,i=[{input:[],expected:"pointer"}],s=["Pointer events unify input types","Same delegation pattern"],l={id:t,title:e,starterCode:n,solution:o,tests:i,hints:s};export{l as default,s as hints,t as id,o as solution,n as starterCode,i as tests,e as title};
