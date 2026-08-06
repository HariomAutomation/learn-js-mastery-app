const s="10-dom-dom-modify-06",e="classList remove",t=`const el = document.querySelector('.box');
el.classList.remove('active');
console.log(el.classList.contains('active'));`,o=`const el = document.querySelector('.box');
el.classList.remove('active');
console.log(el.classList.contains('active'));`,c=[{input:[],expected:"false"}],n=["classList.remove removes a class","Returns false if not present"],l={id:s,title:e,starterCode:t,solution:o,tests:c,hints:n};export{l as default,n as hints,s as id,o as solution,t as starterCode,c as tests,e as title};
