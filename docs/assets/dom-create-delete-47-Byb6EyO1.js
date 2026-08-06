const e="10-dom-dom-create-delete-47",t="Fragment Batch Insert",n=`const frag = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
  frag.appendChild(document.createElement('div'));
}
const container = document.createElement('div');
container.appendChild(frag);
console.log(container.children.length);`,o=`const frag = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
  frag.appendChild(document.createElement('div'));
}
const container = document.createElement('div');
container.appendChild(frag);
console.log(container.children.length);`,c=[{input:[],expected:"3"}],r=["Fragment children move to container","Efficient batch operation"],a={id:e,title:t,starterCode:n,solution:o,tests:c,hints:r};export{a as default,r as hints,e as id,o as solution,n as starterCode,c as tests,t as title};
