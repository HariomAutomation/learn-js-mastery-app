const t="11-events-event-delegation-43",n="Delegation with Class",e=`const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn')) {
    console.log('button class found');
  }
});`,s=`const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn')) {
    console.log('button class found');
  }
});`,o=[{input:[],expected:"button class found"}],c=["classList.contains checks class","Use for class-based delegation"],i={id:t,title:n,starterCode:e,solution:s,tests:o,hints:c};export{i as default,c as hints,t as id,s as solution,e as starterCode,o as tests,n as title};
