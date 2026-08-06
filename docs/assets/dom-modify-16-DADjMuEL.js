const o="10-dom-dom-modify-16",e="camelCase Style",t=`const el = document.querySelector('.box');
el.style.backgroundColor = 'green';
console.log(el.style.backgroundColor);`,l=`const el = document.querySelector('.box');
el.style.backgroundColor = 'green';
console.log(el.style.backgroundColor);`,n=[{input:[],expected:"green"}],s=["Use camelCase for multi-word properties","background-color becomes backgroundColor"],r={id:o,title:e,starterCode:t,solution:l,tests:n,hints:s};export{r as default,s as hints,o as id,l as solution,t as starterCode,n as tests,e as title};
