const s="10-dom-dom-modify-46",o="classList ForEach",e=`const el = document.querySelector('.box');
let classes = [];
el.classList.forEach(c => classes.push(c));
console.log(classes.join(','));`,t=`const el = document.querySelector('.box');
let classes = [];
el.classList.forEach(c => classes.push(c));
console.log(classes.join(','));`,c=[{input:[],expected:"box"}],l=["forEach iterates over each class","Join array to see all classes"],n={id:s,title:o,starterCode:e,solution:t,tests:c,hints:l};export{n as default,l as hints,s as id,t as solution,e as starterCode,c as tests,o as title};
