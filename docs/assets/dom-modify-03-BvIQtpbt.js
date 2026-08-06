const t="10-dom-dom-modify-03",e="setAttribute Method",o=`const el = document.querySelector('a');
el.setAttribute('href', 'https://example.com');
console.log(el.getAttribute('href'));`,s=`const el = document.querySelector('a');
el.setAttribute('href', 'https://example.com');
console.log(el.getAttribute('href'));`,n=[{input:[],expected:"https://example.com"}],r=["setAttribute takes attribute name and value","Use getAttribute to read"],l={id:t,title:e,starterCode:o,solution:s,tests:n,hints:r};export{l as default,r as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
