const e="10-dom-dom-create-delete-12",n="cloneNode Deep",o=`const original = document.createElement('div');
const child = document.createElement('p');
original.appendChild(child);
const clone = original.cloneNode(true);
console.log(clone.children.length);`,t=`const original = document.createElement('div');
const child = document.createElement('p');
original.appendChild(child);
const clone = original.cloneNode(true);
console.log(clone.children.length);`,l=[{input:[],expected:"1"}],c=["cloneNode(true) does deep clone","Copies all children"],d={id:e,title:n,starterCode:o,solution:t,tests:l,hints:c};export{d as default,c as hints,e as id,t as solution,o as starterCode,l as tests,n as title};
