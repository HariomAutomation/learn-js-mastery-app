const e="10-dom-dom-modify-07",o="style Property",t=`const el = document.querySelector('.box');
el.style.color = 'red';
console.log(el.style.color);`,s=`const el = document.querySelector('.box');
el.style.color = 'red';
console.log(el.style.color);`,l=[{input:[],expected:"red"}],n=["style property sets inline styles","Use camelCase for property names"],r={id:e,title:o,starterCode:t,solution:s,tests:l,hints:n};export{r as default,n as hints,e as id,s as solution,t as starterCode,l as tests,o as title};
