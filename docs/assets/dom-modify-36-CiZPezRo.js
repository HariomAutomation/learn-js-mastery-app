const t="10-dom-dom-modify-36",o="style Property Check",e=`const el = document.querySelector('.box');
console.log(el.style.hasOwnProperty('color'));`,s=`const el = document.querySelector('.box');
console.log(el.style.hasOwnProperty('color'));`,n=[{input:[],expected:"false"}],l=["style only includes inline styles","Check with hasOwnProperty"],c={id:t,title:o,starterCode:e,solution:s,tests:n,hints:l};export{c as default,l as hints,t as id,s as solution,e as starterCode,n as tests,o as title};
