const t="10-dom-dom-modify-24",s="classList remove Multiple",e=`const el = document.querySelector('.box');
el.classList.remove('active', 'highlight');
console.log(el.classList.toString());`,o=`const el = document.querySelector('.box');
el.classList.remove('active', 'highlight');
console.log(el.classList.toString());`,i=[{input:[],expected:"box"}],l=["classList.remove takes multiple args","toString returns remaining classes"],n={id:t,title:s,starterCode:e,solution:o,tests:i,hints:l};export{n as default,l as hints,t as id,o as solution,e as starterCode,i as tests,s as title};
