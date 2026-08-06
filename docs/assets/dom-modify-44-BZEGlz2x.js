const t="10-dom-dom-modify-44",e="getAttribute Default",o=`const el = document.querySelector('div');
const role = el.getAttribute('role');
console.log(role);`,n=`const el = document.querySelector('div');
const role = el.getAttribute('role');
console.log(role);`,s=[{input:[],expected:"null"}],l=["getAttribute returns null if not set","Does not throw error"],r={id:t,title:e,starterCode:o,solution:n,tests:s,hints:l};export{r as default,l as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
