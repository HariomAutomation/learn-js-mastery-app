const t="10-dom-dom-modify-41",e="classList Entries",s=`const el = document.querySelector('.box');
const entries = [...el.classList.entries()];
console.log(entries.length);`,n=`const el = document.querySelector('.box');
const entries = [...el.classList.entries()];
console.log(entries.length);`,o=[{input:[],expected:"1"}],i=["entries returns index-class pairs","Spread to array to get length"],r={id:t,title:e,starterCode:s,solution:n,tests:o,hints:i};export{r as default,i as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
