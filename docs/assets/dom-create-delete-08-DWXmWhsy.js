const e="10-dom-dom-create-delete-08",t="before Method",n=`const container = document.createElement('div');
const last = document.createElement('p');
container.appendChild(last);
last.before('Before');
console.log(container.childNodes.length);`,o=`const container = document.createElement('div');
const last = document.createElement('p');
container.appendChild(last);
last.before('Before');
console.log(container.childNodes.length);`,s=[{input:[],expected:"2"}],c=["before inserts before the element","Adds as a sibling"],l={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{l as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
