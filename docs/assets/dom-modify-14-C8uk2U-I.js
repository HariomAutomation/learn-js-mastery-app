const t="10-dom-dom-modify-14",e="classList toggle",s=`const el = document.querySelector('.box');
el.classList.toggle('active');
console.log(el.classList.contains('active'));`,o=`const el = document.querySelector('.box');
el.classList.toggle('active');
console.log(el.classList.contains('active'));`,n=[{input:[],expected:"true"}],c=["toggle adds if not present, removes if present","Returns true if added"],l={id:t,title:e,starterCode:s,solution:o,tests:n,hints:c};export{l as default,c as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
