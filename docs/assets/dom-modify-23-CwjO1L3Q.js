const e="10-dom-dom-modify-23",t="style Assign",o=`const el = document.querySelector('.box');
Object.assign(el.style, { color: 'red', fontSize: '20px' });
console.log(el.style.color + ' ' + el.style.fontSize);`,s=`const el = document.querySelector('.box');
Object.assign(el.style, { color: 'red', fontSize: '20px' });
console.log(el.style.color + ' ' + el.style.fontSize);`,l=[{input:[],expected:"red 20px"}],n=["Object.assign can set multiple properties","Use camelCase keys"],c={id:e,title:t,starterCode:o,solution:s,tests:l,hints:n};export{c as default,n as hints,e as id,s as solution,o as starterCode,l as tests,t as title};
