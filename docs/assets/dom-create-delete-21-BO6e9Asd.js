const e="10-dom-dom-create-delete-21",t="create Text Node",o=`const parent = document.createElement('div');
const textNode = document.createTextNode('Hello');
parent.appendChild(textNode);
console.log(parent.textContent);`,n=`const parent = document.createElement('div');
const textNode = document.createTextNode('Hello');
parent.appendChild(textNode);
console.log(parent.textContent);`,d=[{input:[],expected:"Hello"}],c=["createTextNode creates a text node","appendChild adds it to parent"],s={id:e,title:t,starterCode:o,solution:n,tests:d,hints:c};export{s as default,c as hints,e as id,n as solution,o as starterCode,d as tests,t as title};
