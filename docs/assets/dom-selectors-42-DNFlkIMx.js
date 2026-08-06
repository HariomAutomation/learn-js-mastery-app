const t="10-dom-dom-selectors-42",e="closest with ID Selector",o=`const el = document.querySelector('.nested');
const found = el.closest('#container');
console.log(found);`,s=`const el = document.querySelector('.nested');
const found = el.closest('#container');
console.log(found);`,n=[{input:[],expected:"null"}],c=["closest works with any CSS selector","Including ID selectors"],l={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{l as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
