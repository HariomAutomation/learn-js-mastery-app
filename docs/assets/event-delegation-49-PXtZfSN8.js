const e="11-events-event-delegation-49",t="Delegation Once Option",n=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') console.log('once');
}, { once: true });
console.log('once option');`,o=`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') console.log('once');
}, { once: true });
console.log('once option');`,s=[{input:[],expected:"once option"}],c=["once: true removes after first fire","Works with delegation"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
