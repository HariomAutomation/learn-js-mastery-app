const e="10-dom-dom-modify-40",t="style Object Keys",o=`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.margin = '10px';
console.log(Object.keys(el.style).length);`,s=`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.margin = '10px';
console.log(Object.keys(el.style).length);`,l=[{input:[],expected:"2"}],n=["Each inline style is a key","Count the keys with Object.keys"],c={id:e,title:t,starterCode:o,solution:s,tests:l,hints:n};export{c as default,n as hints,e as id,s as solution,o as starterCode,l as tests,t as title};
