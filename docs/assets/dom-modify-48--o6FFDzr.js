const t="10-dom-dom-modify-48",e="textContent Preserve Tags",o=`const el = document.querySelector('div');
el.textContent = '<p>Text</p>';
console.log(el.querySelector('p'));`,n=`const el = document.querySelector('div');
el.textContent = '<p>Text</p>';
console.log(el.querySelector('p'));`,s=[{input:[],expected:"null"}],l=["textContent does not create DOM nodes","Use innerHTML for that"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:l};export{c as default,l as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
