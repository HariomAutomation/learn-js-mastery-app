const t="10-dom-dom-modify-21",e="removeAttribute Check",o=`const el = document.querySelector('button');
el.removeAttribute('type');
console.log(el.hasAttribute('type'));`,s=`const el = document.querySelector('button');
el.removeAttribute('type');
console.log(el.hasAttribute('type'));`,n=[{input:[],expected:"false"}],r=["removeAttribute removes the attribute","hasAttribute returns false"],i={id:t,title:e,starterCode:o,solution:s,tests:n,hints:r};export{i as default,r as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
