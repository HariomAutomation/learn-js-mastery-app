const e="11-events-event-delegation-33",t="Event Listener Count",n=`const btn = document.querySelector('button');
btn.addEventListener('click', () => {});
btn.addEventListener('click', () => {});
console.log('2 listeners added');`,s=`const btn = document.querySelector('button');
btn.addEventListener('click', () => {});
btn.addEventListener('click', () => {});
console.log('2 listeners added');`,o=[{input:[],expected:"2 listeners added"}],d=["Multiple listeners can be added","All fire on event"],i={id:e,title:t,starterCode:n,solution:s,tests:o,hints:d};export{i as default,d as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
