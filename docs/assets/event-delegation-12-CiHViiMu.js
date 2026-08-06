const e="11-events-event-delegation-12",t="Once Delegation",n=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  console.log('clicked once');
}, { once: true });
console.log('once option');`,o=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  console.log('clicked once');
}, { once: true });
console.log('once option');`,c=[{input:[],expected:"once option"}],s=["once: true auto-removes after first fire","Works with delegation"],i={id:e,title:t,starterCode:n,solution:o,tests:c,hints:s};export{i as default,s as hints,e as id,o as solution,n as starterCode,c as tests,t as title};
