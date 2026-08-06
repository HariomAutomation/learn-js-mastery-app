const t="11-events-event-basics-33",e="Multiple Listeners",n=`const btn = document.querySelector('button');
btn.addEventListener('click', () => console.log('first'));
btn.addEventListener('click', () => console.log('second'));
console.log('two listeners');`,s=`const btn = document.querySelector('button');
btn.addEventListener('click', () => console.log('first'));
btn.addEventListener('click', () => console.log('second'));
console.log('two listeners');`,o=[{input:[],expected:"two listeners"}],c=["Multiple listeners can be added","All fire in order added"],l={id:t,title:e,starterCode:n,solution:s,tests:o,hints:c};export{l as default,c as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
