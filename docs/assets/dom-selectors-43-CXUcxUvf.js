const t="10-dom-dom-selectors-43",e="matches Complex Selector",s=`const el = document.querySelector('a');
const result = el.matches('a[href^="https"]');
console.log(typeof result);`,o=`const el = document.querySelector('a');
const result = el.matches('a[href^="https"]');
console.log(typeof result);`,n=[{input:[],expected:"boolean"}],l=["^= means starts with","matches always returns boolean"],c={id:t,title:e,starterCode:s,solution:o,tests:n,hints:l};export{c as default,l as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
