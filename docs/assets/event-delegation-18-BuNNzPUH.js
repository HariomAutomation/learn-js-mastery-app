const e="11-events-event-delegation-18",t="dispatchEvent",n=`const el = document.querySelector('.box');
const event = new Event('build');
el.addEventListener('build', () => console.log('built'));
el.dispatchEvent(event);`,s=`const el = document.querySelector('.box');
const event = new Event('build');
el.addEventListener('build', () => console.log('built'));
el.dispatchEvent(event);`,o=[{input:[],expected:"built"}],i=["dispatchEvent triggers the event","Must add listener first"],l={id:e,title:t,starterCode:n,solution:s,tests:o,hints:i};export{l as default,i as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
