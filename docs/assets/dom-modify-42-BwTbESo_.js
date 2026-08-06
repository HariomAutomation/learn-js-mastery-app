const t="10-dom-dom-modify-42",e="textContent Empty",o=`const el = document.querySelector('.box');
el.textContent = '';
console.log(el.textContent.length);`,n=`const el = document.querySelector('.box');
el.textContent = '';
console.log(el.textContent.length);`,s=[{input:[],expected:"0"}],l=["Empty string has length 0","textContent removes all children"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:l};export{c as default,l as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
