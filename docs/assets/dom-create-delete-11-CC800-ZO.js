const e="10-dom-dom-create-delete-11",n="cloneNode Shallow",o=`const original = document.createElement('div');
const child = document.createElement('p');
original.appendChild(child);
const clone = original.cloneNode(false);
console.log(clone.children.length);`,t=`const original = document.createElement('div');
const child = document.createElement('p');
original.appendChild(child);
const clone = original.cloneNode(false);
console.log(clone.children.length);`,l=[{input:[],expected:"0"}],c=["cloneNode(false) does shallow clone","Does not copy children"],d={id:e,title:n,starterCode:o,solution:t,tests:l,hints:c};export{d as default,c as hints,e as id,t as solution,o as starterCode,l as tests,n as title};
