const t="10-dom-dom-modify-09",e="getComputedStyle",o=`const el = document.querySelector('.box');
const computed = window.getComputedStyle(el);
console.log(typeof computed);`,n=`const el = document.querySelector('.box');
const computed = window.getComputedStyle(el);
console.log(typeof computed);`,s=[{input:[],expected:"object"}],c=["getComputedStyle returns CSSStyleDeclaration","Shows computed (final) styles"],d={id:t,title:e,starterCode:o,solution:n,tests:s,hints:c};export{d as default,c as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
