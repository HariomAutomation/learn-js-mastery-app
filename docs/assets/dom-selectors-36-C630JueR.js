const t="10-dom-dom-selectors-36",e="matches Returns Boolean",o=`const el = document.querySelector('div');
const result = el.matches('div');
console.log(typeof result);`,s=`const el = document.querySelector('div');
const result = el.matches('div');
console.log(typeof result);`,n=[{input:[],expected:"boolean"}],c=["matches always returns true or false","Use typeof to check"],l={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{l as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
