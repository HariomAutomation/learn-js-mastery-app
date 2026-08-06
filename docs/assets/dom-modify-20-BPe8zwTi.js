const t="10-dom-dom-modify-20",s="classList add Multiple",e=`const el = document.querySelector('.box');
el.classList.add('active', 'highlight', 'selected');
console.log(el.classList.length);`,l=`const el = document.querySelector('.box');
el.classList.add('active', 'highlight', 'selected');
console.log(el.classList.length);`,o=[{input:[],expected:"4"}],n=["classList.add can take multiple arguments","Original class plus 3 new ones"],c={id:t,title:s,starterCode:e,solution:l,tests:o,hints:n};export{c as default,n as hints,t as id,l as solution,e as starterCode,o as tests,s as title};
