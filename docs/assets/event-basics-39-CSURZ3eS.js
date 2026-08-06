const t="11-events-event-basics-39",e="addEventListener Return",n=`const btn = document.querySelector('button');
const result = btn.addEventListener('click', () => {});
console.log(result);`,s=`const btn = document.querySelector('button');
const result = btn.addEventListener('click', () => {});
console.log(result);`,o=[{input:[],expected:"undefined"}],c=["addEventListener returns undefined","Unlike jQuery which returns element"],r={id:t,title:e,starterCode:n,solution:s,tests:o,hints:c};export{r as default,c as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
