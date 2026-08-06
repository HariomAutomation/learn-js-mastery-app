const t="10-dom-dom-modify-15",o="classList contains",s=`const el = document.querySelector('.box');
console.log(el.classList.contains('box'));`,e=`const el = document.querySelector('.box');
console.log(el.classList.contains('box'));`,n=[{input:[],expected:"true"}],c=["contains checks if class exists","Returns boolean"],i={id:t,title:o,starterCode:s,solution:e,tests:n,hints:c};export{i as default,c as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
