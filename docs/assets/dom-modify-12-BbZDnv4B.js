const t="10-dom-dom-modify-12",e="textContent vs innerHTML",n=`// textContent escapes HTML, innerHTML does not
const el = document.querySelector('p');
el.textContent = '<b>Bold</b>';
console.log(el.innerHTML);`,o=`// textContent escapes HTML, innerHTML does not
const el = document.querySelector('p');
el.textContent = '<b>Bold</b>';
console.log(el.innerHTML);`,s=[{input:[],expected:"&lt;b&gt;Bold&lt;/b&gt;"}],l=["textContent escapes HTML entities","innerHTML interprets HTML"],i={id:t,title:e,starterCode:n,solution:o,tests:s,hints:l};export{i as default,l as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
