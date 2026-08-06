const t="10-dom-dom-modify-30",e="attribute Check",o=`const el = document.querySelector('input');
console.log(el.hasAttribute('type'));`,s=`const el = document.querySelector('input');
console.log(el.hasAttribute('type'));`,n=[{input:[],expected:"false"}],c=["hasAttribute checks attribute existence","Returns true or false"],i={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{i as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
