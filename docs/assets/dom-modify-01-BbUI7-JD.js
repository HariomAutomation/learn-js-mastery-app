const t="10-dom-dom-modify-01",e="textContent Property",o=`const el = document.querySelector('p');
el.textContent = 'Hello';
console.log(el.textContent);`,n=`const el = document.querySelector('p');
el.textContent = 'Hello';
console.log(el.textContent);`,s=[{input:[],expected:"Hello"}],l=["textContent sets text content","Returns the text content"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:l};export{c as default,l as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
