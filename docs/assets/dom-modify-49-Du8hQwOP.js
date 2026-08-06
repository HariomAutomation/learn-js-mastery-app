const e="10-dom-dom-modify-49",t="style Display Toggle",o=`const el = document.querySelector('.box');
el.style.display = 'none';
console.log(el.style.display);`,s=`const el = document.querySelector('.box');
el.style.display = 'none';
console.log(el.style.display);`,n=[{input:[],expected:"none"}],l=["display: none hides element","Inline style hides it"],i={id:e,title:t,starterCode:o,solution:s,tests:n,hints:l};export{i as default,l as hints,e as id,s as solution,o as starterCode,n as tests,t as title};
