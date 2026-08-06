const e="10-dom-dom-create-delete-09",t="remove Method",n=`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
child.remove();
console.log(parent.children.length);`,o=`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
child.remove();
console.log(parent.children.length);`,c=[{input:[],expected:"0"}],d=["remove() removes element from parent","Parent has no children after"],l={id:e,title:t,starterCode:n,solution:o,tests:c,hints:d};export{l as default,d as hints,e as id,o as solution,n as starterCode,c as tests,t as title};
