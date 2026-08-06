const e="10-dom-dom-create-delete-27",t="before Multiple",n=`const container = document.createElement('div');
const ref = document.createElement('p');
container.appendChild(ref);
ref.before('X', 'Y');
console.log(container.childNodes.length);`,o=`const container = document.createElement('div');
const ref = document.createElement('p');
container.appendChild(ref);
ref.before('X', 'Y');
console.log(container.childNodes.length);`,c=[{input:[],expected:"3"}],r=["before can take multiple arguments","Adds all before reference"],s={id:e,title:t,starterCode:n,solution:o,tests:c,hints:r};export{s as default,r as hints,e as id,o as solution,n as starterCode,c as tests,t as title};
