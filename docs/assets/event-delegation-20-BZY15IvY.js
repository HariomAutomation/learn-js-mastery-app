const e="11-events-event-delegation-20",n="removeEventListener Match",t=`function handler() { console.log('done'); }
const el = document.querySelector('.box');
el.addEventListener('click', handler);
el.removeEventListener('click', handler);
console.log('matching required');`,o=`function handler() { console.log('done'); }
const el = document.querySelector('.box');
el.addEventListener('click', handler);
el.removeEventListener('click', handler);
console.log('matching required');`,c=[{input:[],expected:"matching required"}],l=["Same function reference needed","Anonymous functions can't be removed"],r={id:e,title:n,starterCode:t,solution:o,tests:c,hints:l};export{r as default,l as hints,e as id,o as solution,t as starterCode,c as tests,n as title};
