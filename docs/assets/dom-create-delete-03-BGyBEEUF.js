const e="10-dom-dom-create-delete-03",t="appendChild",n=`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
console.log(parent.children.length);`,d=`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
console.log(parent.children.length);`,c=[{input:[],expected:"1"}],o=["appendChild adds child to parent","Check children length"],l={id:e,title:t,starterCode:n,solution:d,tests:c,hints:o};export{l as default,o as hints,e as id,d as solution,n as starterCode,c as tests,t as title};
