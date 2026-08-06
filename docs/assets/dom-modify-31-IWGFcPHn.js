const t="10-dom-dom-modify-31",e="Modify Practice",o=`const el = document.querySelector('.item');
el.textContent = 'Updated';
console.log(el.textContent);`,n=`const el = document.querySelector('.item');
el.textContent = 'Updated';
console.log(el.textContent);`,s=[{input:[],expected:"Updated"}],d=["Use textContent to change text","Read it back to verify"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:d};export{c as default,d as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
