const e="10-dom-dom-create-delete-46",t="remove Child Return",n=`const parent = document.createElement('div');
const child = document.createElement('span');
parent.appendChild(child);
const removed = parent.removeChild(child);
console.log(removed.parentNode);`,o=`const parent = document.createElement('div');
const child = document.createElement('span');
parent.appendChild(child);
const removed = parent.removeChild(child);
console.log(removed.parentNode);`,d=[{input:[],expected:"null"}],c=["Removed node has no parent","parentNode is null"],l={id:e,title:t,starterCode:n,solution:o,tests:d,hints:c};export{l as default,c as hints,e as id,o as solution,n as starterCode,d as tests,t as title};
