const e="11-events-event-practice-40",t="Custom Event Dispatch",n=`const el = document.querySelector('.box');
const event = new CustomEvent('alert', { detail: 'warning' });
el.addEventListener('alert', (e) => console.log(e.detail));
el.dispatchEvent(event);`,s=`const el = document.querySelector('.box');
const event = new CustomEvent('alert', { detail: 'warning' });
el.addEventListener('alert', (e) => console.log(e.detail));
el.dispatchEvent(event);`,o=[{input:[],expected:"warning"}],i=["Create CustomEvent with detail","dispatchEvent triggers it"],c={id:e,title:t,starterCode:n,solution:s,tests:o,hints:i};export{c as default,i as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
