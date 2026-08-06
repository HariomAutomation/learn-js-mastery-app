const e="11-events-event-delegation-39",t="Custom Event Delegation",n=`const el = document.querySelector('.box');
const event = new CustomEvent('select', { detail: 'item1' });
el.addEventListener('select', (e) => console.log(e.detail));
el.dispatchEvent(event);`,o=`const el = document.querySelector('.box');
const event = new CustomEvent('select', { detail: 'item1' });
el.addEventListener('select', (e) => console.log(e.detail));
el.dispatchEvent(event);`,s=[{input:[],expected:"item1"}],l=["Custom events work with delegation","Use detail for data"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:l};export{i as default,l as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
