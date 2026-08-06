const e="10-dom-dom-selectors-02",t="querySelector Single Element",o=`const el = document.querySelector(???);
console.log(el);`,s=`const el = document.querySelector('.box');
console.log(el);`,l=[{input:[],expected:"null"}],n=["querySelector takes a CSS selector string","Use class selector with . prefix"],c={id:e,title:t,starterCode:o,solution:s,tests:l,hints:n};export{c as default,n as hints,e as id,s as solution,o as starterCode,l as tests,t as title};
