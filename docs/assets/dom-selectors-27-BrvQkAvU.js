const t="10-dom-dom-selectors-27",e="getAttribute Method",o=`const el = document.querySelector('a');
const href = el.getAttribute('href');
console.log(typeof href);`,s=`const el = document.querySelector('a');
const href = el.getAttribute('href');
console.log(typeof href);`,n=[{input:[],expected:"string"}],r=["getAttribute returns attribute value","Always returns a string or null"],l={id:t,title:e,starterCode:o,solution:s,tests:n,hints:r};export{l as default,r as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
