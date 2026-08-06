const e="10-dom-dom-create-delete-29",n="cloneNode Deep Copy",o=`const original = document.createElement('div');
original.innerHTML = '<span>Hi</span>';
const clone = original.cloneNode(true);
console.log(clone.innerHTML);`,t=`const original = document.createElement('div');
original.innerHTML = '<span>Hi</span>';
const clone = original.cloneNode(true);
console.log(clone.innerHTML);`,i=[{input:[],expected:"<span>Hi</span>"}],s=["deep clone copies innerHTML","Same structure as original"],c={id:e,title:n,starterCode:o,solution:t,tests:i,hints:s};export{c as default,s as hints,e as id,t as solution,o as starterCode,i as tests,n as title};
