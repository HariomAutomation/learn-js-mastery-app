const e="10-dom-dom-create-delete-26",t="after Multiple",n=`const container = document.createElement('div');
const ref = document.createElement('p');
container.appendChild(ref);
ref.after('A', 'B');
console.log(container.childNodes.length);`,o=`const container = document.createElement('div');
const ref = document.createElement('p');
container.appendChild(ref);
ref.after('A', 'B');
console.log(container.childNodes.length);`,c=[{input:[],expected:"3"}],r=["after can take multiple arguments","Adds all after reference"],s={id:e,title:t,starterCode:n,solution:o,tests:c,hints:r};export{s as default,r as hints,e as id,o as solution,n as starterCode,c as tests,t as title};
