const t="10-dom-dom-modify-22",e="conditional setAttribute",o=`const el = document.querySelector('.box');
const isActive = true;
if (isActive) el.setAttribute('data-active', 'true');
console.log(el.dataset.active);`,s=`const el = document.querySelector('.box');
const isActive = true;
if (isActive) el.setAttribute('data-active', 'true');
console.log(el.dataset.active);`,i=[{input:[],expected:"true"}],n=["Use conditional logic before setAttribute","dataset reads the value"],c={id:t,title:e,starterCode:o,solution:s,tests:i,hints:n};export{c as default,n as hints,t as id,s as solution,o as starterCode,i as tests,e as title};
