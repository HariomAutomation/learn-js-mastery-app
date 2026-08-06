const t="11-events-event-delegation-25",e="Touch Delegation",n=`const list = document.querySelector('ul');
list.addEventListener('touchstart', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('touched');
  }
});`,o=`const list = document.querySelector('ul');
list.addEventListener('touchstart', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('touched');
  }
});`,s=[{input:[],expected:"touched"}],c=["Touch events delegate like mouse","Use e.touches for position"],i={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
