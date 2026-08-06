const t="10-dom-dom-modify-18",e="Computed Style Reading",o=`const el = document.querySelector('.box');
const style = window.getComputedStyle(el);
console.log(style.display);`,s=`const el = document.querySelector('.box');
const style = window.getComputedStyle(el);
console.log(style.display);`,l=[{input:[],expected:"block"}],n=["getComputedStyle reads final computed styles","Default display for div is block"],d={id:t,title:e,starterCode:o,solution:s,tests:l,hints:n};export{d as default,n as hints,t as id,s as solution,o as starterCode,l as tests,e as title};
