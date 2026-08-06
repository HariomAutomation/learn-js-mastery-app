const e="11-events-event-basics-02",n="removeEventListener",t=`function handleClick() { console.log('clicked'); }
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);
console.log('removed');`,o=`function handleClick() { console.log('clicked'); }
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);
console.log('removed');`,c=[{input:[],expected:"removed"}],s=["Must pass same function reference","Anonymous functions can't be removed"],l={id:e,title:n,starterCode:t,solution:o,tests:c,hints:s};export{l as default,s as hints,e as id,o as solution,t as starterCode,c as tests,n as title};
