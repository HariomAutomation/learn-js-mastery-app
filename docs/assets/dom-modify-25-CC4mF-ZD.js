const t="10-dom-dom-modify-25",e="textContent String",o=`const el = document.querySelector('.box');
const text = el.textContent;
console.log(typeof text);`,n=`const el = document.querySelector('.box');
const text = el.textContent;
console.log(typeof text);`,s=[{input:[],expected:"string"}],c=["textContent always returns a string","Use typeof to verify"],l={id:t,title:e,starterCode:o,solution:n,tests:s,hints:c};export{l as default,c as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
